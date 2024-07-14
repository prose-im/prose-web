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

        .c-section-pricing-simulate__calculator-field
          label.c-section-pricing-simulate__calculator-label.c-section-pricing-simulate__calculator-label--secondary
            | I want to pay yearly (20% discount)

          form-toggle(
            v-model="calculatorOptions.annual"
            name="simulate_annual"
            class="c-section-pricing-simulate__calculator-field-part"
          )

      .c-section-pricing-simulate__calculator-result
        .c-section-pricing-simulate__calculator-section
          .c-section-pricing-simulate__calculator-section-labels
            p.c-section-pricing-simulate__calculator-section-label.u-medium
              | Price per user

            p.c-section-pricing-simulate__calculator-section-label.u-medium
              | Volume discount

          .c-section-pricing-simulate__calculator-section-results
            .c-section-pricing-simulate__calculator-section-result
              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                span.u-semibold
                  | $5

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | /user/month

              image-result-cross(
                class="c-section-pricing-simulate__calculator-cross"
              )

              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                span.u-semibold
                  | 100

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | team members

            .c-section-pricing-simulate__calculator-section-result
              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--secondary.c-section-pricing-simulate__calculator-amount--green
                span.u-semibold
                  | -20%

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | off of total

                  base-space(
                    :repeat="2"
                  )

                  | (100+)

        .c-section-pricing-simulate__calculator-section
          .c-section-pricing-simulate__calculator-section-labels
            p.c-section-pricing-simulate__calculator-section-label.u-medium
              | Grand total

          .c-section-pricing-simulate__calculator-section-results
            .c-section-pricing-simulate__calculator-section-result
              p.c-section-pricing-simulate__calculator-amount.c-section-pricing-simulate__calculator-amount--primary
                span.c-section-pricing-simulate__calculator-amount-total.u-semibold
                  | $400

                base-space

                span.c-section-pricing-simulate__calculator-amount-label
                  | /month
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageFormActionMinus from "@/assets/images/components/section/pricing/SectionPricingSimulate/form-action-minus.svg?component";
import ImageFormActionPlus from "@/assets/images/components/section/pricing/SectionPricingSimulate/form-action-plus.svg?component";
import ImageResultCross from "@/assets/images/components/section/pricing/SectionPricingSimulate/result-cross.svg?component";

export default {
  name: "SectionPricingSimulate",

  components: { ImageFormActionMinus, ImageFormActionPlus, ImageResultCross },

  data() {
    return {
      // --> STATE <--

      calculatorOptions: {
        annual: true
      }
    };
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
    padding: 30px 46px 30px 66px;
    width: 100%;
    max-width: 760px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    border-radius: 20px;

    #{$c}__calculator-result {
      margin-top: 36px;
    }

    #{$c}__calculator-field {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

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
      &--primary {
        color: $color-base-black-mid;
        font-size: 17px;
        letter-spacing: 0.11px;
        line-height: 32px;
      }

      &--secondary {
        color: $color-base-grey-dark;
        font-size: 16px;
        letter-spacing: 0.11px;
        line-height: 32px;
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
        display: flex;
        align-items: center;

        #{$c}__calculator-cross {
          margin: 0 21px;
          flex: 0 0 auto;
        }
      }

      #{$c}__calculator-section-labels {
        border-right-width: $section-border-width;
        border-right-style: solid;
        width: 30%;
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
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.17px;
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
</style>
