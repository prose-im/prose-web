<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-simulate
  page-wrapper
    base-descripted-title(
      level="medium"
      align="center"
    )
      template(
        v-slot:title
      )
        | See how much you’ll pay

      template(
        v-slot:description
      )
        p
          | Prose Cloud pricing is all-inclusive, with no hidden costs.

        p.u-medium
          | You will only pay per user, with volume discounts.

    .c-section-pricing-simulate__calculator
      .c-section-pricing-simulate__calculator-form
        .c-section-pricing-simulate__calculator-field
          label.c-section-pricing-simulate__calculator-label.c-section-pricing-simulate__calculator-label--primary.u-medium
            | How many people are there in your team?

          form-increment(
            v-model="calculatorOptions.users"
            :minimum="1"
            name="simulate_users"
            class="c-section-pricing-simulate__calculator-field-part"
          )

        .c-section-pricing-simulate__calculator-field
          label.c-section-pricing-simulate__calculator-label.c-section-pricing-simulate__calculator-label--secondary
            | I want to pay yearly ({{ yearlyDiscountPercent }}% discount)

          form-toggle(
            v-model="calculatorOptions.annual"
            name="simulate_annual"
            class="c-section-pricing-simulate__calculator-field-part"
          )

      .c-section-pricing-simulate__calculator-result
        .c-section-pricing-simulate__calculator-section
          .c-section-pricing-simulate__calculator-section-labels
            p.c-section-pricing-simulate__calculator-section-label.u-medium.u-ellipsis
              | Price per user

            p.c-section-pricing-simulate__calculator-section-label.u-medium.u-ellipsis
              | Volume discount

          .c-section-pricing-simulate__calculator-section-results
            .c-section-pricing-simulate__calculator-section-result
              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                span.u-semibold
                  | {{ planPricePerMonth }}€

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | /user/month

              .c-section-pricing-simulate__calculator-additional
                image-result-cross(
                  class="c-section-pricing-simulate__calculator-cross"
                )

                p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                  span.u-semibold
                    | {{ calculatorOptions.users }}

                  base-space

                  span.c-section-pricing-simulate__calculator-amount-label
                    | team member

                    template(
                      v-if="calculatorOptions.users > 1"
                    )
                      | s

            .c-section-pricing-simulate__calculator-section-result
              template(
                v-if="volumeDiscount.penalty < 1.0"
              )
                p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--secondary.c-section-pricing-simulate__calculator-amount--green
                  span.u-semibold
                    | -{{ volumeDiscountPercent }}%

                  base-space

                  span.c-section-pricing-simulate__calculator-amount-label
                    | off of total

                    template(
                      v-if="volumeDiscount.users > 0"
                    )
                      base-space(
                        :repeat="2"
                      )

                      | ({{ volumeDiscount.users }}+ users)

              template(
                v-else
              )
                p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--secondary
                  span.u-semibold
                    | 0%

                  base-space

                  span.c-section-pricing-simulate__calculator-amount-label
                    | off (discount applies on more users!)

        .c-section-pricing-simulate__calculator-section
          .c-section-pricing-simulate__calculator-section-labels
            p.c-section-pricing-simulate__calculator-section-label.u-medium.u-ellipsis
              | Grand total

          .c-section-pricing-simulate__calculator-section-results
            .c-section-pricing-simulate__calculator-section-result
              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                span.c-section-pricing-simulate__calculator-amount-total.u-semibold
                  | {{ grandTotal }}€

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | /month
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageResultCross from "@/assets/images/components/section/pricing/SectionPricingSimulate/result-cross.svg?component";

// CONSTANTS
const PERCENTAGE_MAXIMUM = 100;
const PERCENTAGE_ENCODED_MAXIMUM = 1.0;

export default {
  name: "SectionPricingSimulate",

  components: { ImageResultCross },

  data() {
    return {
      // --> STATE <--

      calculatorOptions: {
        users: 1,
        annual: true
      }
    };
  },

  computed: {
    planPricePerMonth() {
      return (
        this.$config.public.pricing.plans.business.price *
        this.monthlyTermPenalty
      );
    },

    volumeDiscount() {
      const _users = this.calculatorOptions.users,
        _volumeDiscounts = this.$config.public.pricing.volume || [];

      // Find largest match for volume discount?
      if (_users > 0 && _volumeDiscounts.length > 0) {
        for (let _i = _volumeDiscounts.length - 1; _i >= 0; _i--) {
          const _volumeDiscount = _volumeDiscounts[_i];

          // Volume discount found? Return it straight away (stop there)
          if (_users >= _volumeDiscount.users) {
            return _volumeDiscount;
          }
        }
      }

      // Fallback on default (no discount)
      return {
        users: 0,
        penalty: PERCENTAGE_ENCODED_MAXIMUM
      };
    },

    volumeDiscountPercent() {
      return Math.round(
        (PERCENTAGE_ENCODED_MAXIMUM - this.volumeDiscount.penalty) *
          PERCENTAGE_MAXIMUM
      );
    },

    yearlyDiscountPercent() {
      return Math.round(
        (this.$config.public.pricing.terms.monthly.penalty -
          PERCENTAGE_ENCODED_MAXIMUM) *
          PERCENTAGE_MAXIMUM
      );
    },

    monthlyTermPenalty() {
      // Apply non-annual penalty?
      if (this.calculatorOptions.annual !== true) {
        return this.$config.public.pricing.terms.monthly.penalty;
      }

      // No penalty (default)
      return 1.0;
    },

    grandTotal() {
      return (
        this.planPricePerMonth *
        this.calculatorOptions.users *
        this.volumeDiscount.penalty
      );
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-simulate";

// VARIABLES
$section-line-height: 32px;
$section-border-width: 1.5px;

$section-inner-padding-side: 32px;

#{$c} {
  #{$c}__calculator {
    background-color: rgba($color-background-primary, 0.9);
    border: 1px solid rgba($color-base-grey-dark, 0.2);
    backdrop-filter: blur(20px);
    margin: 46px auto 0;
    padding: 24px 46px 30px 66px;
    width: 100%;
    max-width: 740px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 1;
    border-radius: 20px;

    #{$c}__calculator-result {
      margin-top: 41px;
    }

    #{$c}__calculator-field {
      display: flex;
      align-items: center;
      margin-bottom: 19px;

      &:last-child {
        margin-bottom: 0;
      }

      #{$c}__calculator-label {
        &--primary {
          flex: 1;
        }
      }

      #{$c}__calculator-field-part {
        margin-left: 22px;
        flex: 0 0 auto;
      }
    }

    #{$c}__calculator-label {
      letter-spacing: 0.11px;
      line-height: 22px;

      &--primary {
        color: $color-base-black-mid;
        font-size: 17px;
      }

      &--secondary {
        color: $color-base-grey-dark;
        font-size: 16px;
      }
    }

    #{$c}__calculator-section {
      border-top-width: $section-border-width;
      border-top-style: solid;
      display: flex;

      &,
      #{$c}__calculator-section-labels {
        border-color: darken($color-base-grey-light, 1.5%);
      }

      #{$c}__calculator-section-label,
      #{$c}__calculator-section-result {
        line-height: $section-line-height;
        margin-bottom: 18px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      #{$c}__calculator-section-labels,
      #{$c}__calculator-section-results {
        padding: 36px 0;
        overflow: hidden;
      }

      #{$c}__calculator-section-label {
        color: $color-base-black-mid;
        font-size: 15px;
        letter-spacing: 0.1px;
        text-align: right;
        padding-right: $section-inner-padding-side;
      }

      #{$c}__calculator-section-result {
        padding-left: $section-inner-padding-side;

        #{$c}__calculator-cross {
          margin: 0 21px;
          flex: 0 0 auto;
        }
      }

      #{$c}__calculator-section-result,
      #{$c}__calculator-additional {
        display: flex;
        align-items: center;
      }

      #{$c}__calculator-section-labels {
        border-right-width: $section-border-width;
        border-right-style: solid;
        width: 28%;
        flex: 0 1 auto;
      }

      #{$c}__calculator-section-results {
        flex: 1;
      }
    }

    #{$c}__calculator-amount {
      color: $color-base-black-mid;
      line-height: $section-line-height;
      letter-spacing: 0.33px;
      display: flex;
      align-items: center;

      &--primary {
        font-size: ($section-line-height - 2px);
      }

      &--secondary {
        font-size: ($section-line-height - 6px);
      }

      &--green {
        color: $color-base-green-mid;
      }

      #{$c}__calculator-amount-label {
        color: $color-base-grey-dark;
        font-size: 15px;
        line-height: 17px;
        letter-spacing: 0.15px;
        margin-bottom: -1px;
      }

      #{$c}__calculator-amount-total {
        position: relative;

        &::after {
          content: "";
          background-image: url("@/assets/images/components/section/pricing/SectionPricingSimulate/result-underline.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100px;
          height: 18px;
          margin-left: -4px;
          position: absolute;
          top: 100%;
          left: 0;
        }
      }
    }

    #{$c}__calculator-cross {
      width: 12px;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__calculator {
      padding-left: 34px;
      padding-right: 30px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__calculator {
      padding-left: 24px;
      padding-right: 18px;

      #{$c}__calculator-section {
        #{$c}__calculator-section-label {
          padding-right: 12px;
        }

        #{$c}__calculator-section-result {
          padding-left: 20px;
        }

        #{$c}__calculator-additional {
          display: none;
        }
      }
    }
  }
}
</style>
