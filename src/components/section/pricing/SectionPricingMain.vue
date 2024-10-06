<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-main
  page-wrapper
    .c-section-pricing-main__wrapper
      .c-section-pricing-main__box
        .c-section-pricing-main__decorations

        .c-section-pricing-main__inner
          base-descripted-title(
            level="medium"
            align="center"
            tint="dark"
          )
            template(
              v-slot:title
            )
              | Create your Prose server

            template(
              v-slot:description
            )
              p
                | Setup your workspace on your own domain name, in less than 5 minutes.

              p.u-medium
                | Deploy Prose on our secure Cloud, or on your own premises.

          .c-section-pricing-main__plans
            .c-section-pricing-main__plan.c-section-pricing-main__panel
              .c-section-pricing-main__plan-section
                p.c-section-pricing-main__plan-title.u-semibold
                  | Community

                p.c-section-pricing-main__plan-price.c-section-pricing-main__plan-price--secondary
                  | Free

                p.c-section-pricing-main__plan-description
                  | On your premises

                base-checklist(
                  :items="planFeatures.community"
                  class="c-section-pricing-main__plan-features"
                )

                .c-section-pricing-main__plan-action
                  base-tooltip
                    template(
                      v-slot:tooltip
                    )
                      | Self-hosting is coming soon!

                    template(
                      v-slot:default
                    )
                      a
                        base-button(
                          tint="dark"
                          size="small"
                          reverse
                          disabled
                        )
                          | Self-Host Prose

            .c-section-pricing-main__plan.c-section-pricing-main__panel
              .c-section-pricing-main__plan-section.c-section-pricing-main__plan-section--fit.c-section-pricing-main__plan-section--separated
                p.c-section-pricing-main__plan-title.u-semibold
                  | Business

                  base-badge(
                    color="green"
                    class="c-section-pricing-main__plan-badge"
                  )
                    | Most popular

                p.c-section-pricing-main__plan-price.c-section-pricing-main__plan-price--primary
                  span.u-semibold
                    | {{ planPrices.business }}€

                  base-space

                  span.c-section-pricing-main__plan-price-label
                    | /user/month

                p.c-section-pricing-main__plan-description
                  | Cloud hosting, billed annually

                .c-section-pricing-main__plan-action
                  base-tooltip
                    template(
                      v-slot:tooltip
                    )
                      | Our cloud offering is coming soon!

                    template(
                      v-slot:default
                    )
                      a
                        base-button(
                          right-icon="arrow-right"
                          tint="dark"
                          size="huge"
                          disabled
                        )
                          | Create your Prose Server

                p.c-section-pricing-main__plan-notice
                  | 7 days free trial

                  base-space(
                    :repeat="2"
                  )

                  span.u-bold
                    | ·

                  base-space(
                    :repeat="2"
                  )

                  | Cancel anytime

              .c-section-pricing-main__plan-section.c-section-pricing-main__plan-section--aside
                p.c-section-pricing-main__plan-subtitle.u-medium
                  | Features

                base-checklist(
                  :items="planFeatures.business"
                  class="c-section-pricing-main__plan-features"
                )

          .c-section-pricing-main__actions
            a.c-section-pricing-main__action.u-medium(
              @click="onActionDetailsClick"
            )
              | See all plan details

              image-action-arrow

      .c-section-pricing-main__options
        .c-section-pricing-main__option.c-section-pricing-main__panel.c-section-pricing-main__panel--opaque
          .c-section-pricing-main__option-text
            p.u-medium
              | Annual billing

            p
              | Save {{ yearlyDiscountPercent }}%

          .c-section-pricing-main__option-form
            form-toggle(
              v-model="planOptions.annual"
              name="annual"
            )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageActionArrow from "@/assets/images/components/section/pricing/SectionPricingMain/action-arrow.svg?component";

// CONSTANTS
const PERCENTAGE_MAXIMUM = 100;
const PERCENTAGE_ENCODED_MAXIMUM = 1.0;

export default {
  name: "SectionPricingMain",

  components: { ImageActionArrow },

  emits: ["scroll"],

  data() {
    return {
      // --> DATA <--

      planFeatures: {
        community: [
          {
            status: "information",
            label: "Limited to 100 users"
          },

          {
            status: "information",
            label: "No support, no updates"
          }
        ],

        business: [
          {
            status: "included",
            label: "Fully managed (uptime & updates)"
          },

          {
            status: "included",
            label: "All Prose features"
          },

          {
            status: "included",
            label: "End-to-end encryption"
          },

          {
            status: "included",
            label: "Add unlimited users as you grow"
          },

          {
            status: "included",
            label: "Custom DNS domain name"
          },

          {
            status: "included",
            label: "Full access to your Admin Dashboard"
          }
        ]
      },

      // --> STATE <--

      planOptions: {
        annual: true
      }
    };
  },

  computed: {
    planPrices() {
      // Acquire penalty (none if annual)
      const _penalty =
        this.planOptions.annual !== true
          ? this.$config.public.pricing.terms.monthly.penalty
          : 1.0;

      return {
        business: this.$config.public.pricing.plans.business.price * _penalty
      };
    },

    yearlyDiscountPercent() {
      return Math.round(
        (this.$config.public.pricing.terms.monthly.penalty -
          PERCENTAGE_ENCODED_MAXIMUM) *
          PERCENTAGE_MAXIMUM
      );
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers on action details click
     * @public
     * @return {undefined}
     */
    onActionDetailsClick() {
      // Request to scroll to compare section
      this.$emit("scroll", "compare");
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-main";

// VARIABLES
$wrapper-padding: 7px;
$wrapper-border-radius-default: 50px;
$wrapper-border-radius-small: 30px;

$plan-section-separated-margin-sides-default: 42px;
$plan-section-separated-margin-sides-medium: 28px;

#{$c} {
  #{$c}__wrapper {
    border: 1px solid $color-border-tertiary;
    margin: 0 (-1 * (calc($page-wrapper-default-padding-sides / 2) + 12px));
    padding: $wrapper-padding;
    position: relative;
    border-radius: $wrapper-border-radius-default;
  }

  #{$c}__box {
    background-color: $color-background-quaternary;
    padding: 94px 0;
    position: relative;
    overflow: hidden;
    border-radius: ($wrapper-border-radius-default - $wrapper-padding);
  }

  #{$c}__decorations {
    z-index: 0;

    &,
    &::before {
      position: absolute;
      inset: 0;
    }

    &::before {
      content: "";
      background-color: rgba($color-background-primary, 0.5);
      z-index: 1;
    }
  }

  #{$c}__inner {
    position: relative;
    z-index: 1;
  }

  #{$c}__panel {
    background-color: rgba($color-white, 0.9);
    border: 1px solid $color-border-primary;
    border-radius: 18px;
    box-shadow:
      0 0 0 -1px rgba($color-black, 0.09),
      0 2px 2px -2px rgba($color-black, 0.08),
      0 10px 10px -3px rgba($color-black, 0.03);

    &--opaque {
      background-color: $color-white;
    }
  }

  #{$c}__plans {
    margin-top: 54px;
    padding: 0 76px;
    column-gap: 60px;
    display: grid;
    grid-template-columns: 1fr 2.5fr;

    #{$c}__plan {
      padding: 20px 30px;
      display: flex;

      #{$c}__plan-section {
        padding-top: 5px;
        padding-bottom: 8px;
        flex: 1;

        &--fit {
          flex: 0 1 auto;
        }

        &--separated {
          border-right: 1.5px solid darken($color-base-grey-light, 2%);
          margin-right: $plan-section-separated-margin-sides-default;
          padding-right: $plan-section-separated-margin-sides-default;
        }
      }

      #{$c}__plan-title {
        color: $color-base-blue-dark;
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 0.2px;
        display: flex;
        align-items: center;

        #{$c}__plan-badge {
          margin-left: 15px;
          flex: 0 1 auto;
        }
      }

      #{$c}__plan-subtitle {
        color: $color-black;
        font-size: 15px;
        letter-spacing: 0.16px;
      }

      #{$c}__plan-price {
        line-height: 34px;
        margin-top: 10px;

        &--primary {
          color: $color-base-blue-dark;
          font-size: 32px;
          letter-spacing: 0.33px;
        }

        &--secondary {
          color: $color-base-grey-dark;
          font-size: 22px;
          letter-spacing: 0.23px;
        }

        #{$c}__plan-price-label {
          color: $color-base-grey-dark;
          font-size: 16px;
          line-height: 18px;
          letter-spacing: 0.17px;
        }
      }

      #{$c}__plan-description {
        color: $color-base-grey-dark;
        font-size: 16px;
        letter-spacing: 0.17px;
        line-height: 26px;
        margin-top: 14px;
      }

      #{$c}__plan-action {
        margin-top: 44px;
        display: flex;
        justify-content: center;
      }

      #{$c}__plan-notice {
        color: $color-base-grey-dark;
        font-size: 12.5px;
        line-height: 15px;
        letter-spacing: -0.01px;
        text-align: center;
        margin-top: 14px;
      }

      #{$c}__plan-features {
        margin-top: 24px;
      }
    }
  }

  #{$c}__actions {
    margin-top: 38px;
    display: flex;
    justify-content: center;
    column-gap: 20px;

    #{$c}__action {
      color: $color-base-black-mid;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1px;
      display: flex;
      align-items: center;

      svg {
        fill: $color-base-grey-dark;
        width: 10px;
        margin-left: 8px;
        margin-bottom: -2px;
        opacity: 0.8;
        flex: 0 0 auto;
      }
    }
  }

  #{$c}__options {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -18px;

    #{$c}__option {
      width: fit-content;
      min-width: 180px;
      padding: 11px 25px;
      display: flex;
      align-items: center;

      #{$c}__option-text {
        flex: 1;

        p {
          line-height: 18px;

          &:nth-child(1) {
            color: $color-base-black-mid;
            font-size: 15.5px;
            letter-spacing: 0.1px;
          }

          &:nth-child(2) {
            color: $color-base-grey-dark;
            font-size: 14.5px;
            letter-spacing: 0.09px;
            margin-top: 5px;
          }
        }
      }

      #{$c}__option-form {
        flex: 0 0 auto;
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  #{$c} {
    #{$c}__plans {
      column-gap: 32px;
      padding: 0 44px;
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__wrapper {
      margin: 0 (-1 * (calc($page-wrapper-medium-padding-sides / 2) + 10px));
    }

    #{$c}__plans {
      column-gap: 24px;
      padding: 0 30px;

      #{$c}__plan {
        padding: 18px 24px;

        #{$c}__plan-section {
          &--separated {
            margin-right: $plan-section-separated-margin-sides-medium;
            padding-right: $plan-section-separated-margin-sides-medium;
          }
        }
      }
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__wrapper {
      margin: 0 (-1 * (calc($page-wrapper-small-padding-sides / 2) + 4px));
      border-radius: $wrapper-border-radius-small;
    }

    #{$c}__box {
      border-radius: ($wrapper-border-radius-small - $wrapper-padding);
    }

    #{$c}__plans {
      display: block;

      #{$c}__plan {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }

        #{$c}__plan-section {
          text-align: center;

          &:not(&--aside) {
            #{$c}__plan-features {
              > * {
                justify-content: center;
              }
            }
          }
        }

        #{$c}__plan-title {
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__wrapper {
      margin: 0 (-1 * calc($page-wrapper-tiny-padding-sides / 2));
    }

    #{$c}__plans {
      #{$c}__plan {
        #{$c}__plan-section {
          &--fit {
            flex: 1;
          }

          &--aside {
            display: none;
          }

          &--separated {
            border-right: 0 none;
            margin-right: 0;
            padding-right: 0;
          }
        }
      }
    }
  }
}
</style>
