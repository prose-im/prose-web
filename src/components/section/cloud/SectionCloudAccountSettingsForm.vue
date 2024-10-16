<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-account-settings-form
  page-wrapper
    .c-section-cloud-account-settings-form__inner
      .c-section-cloud-account-settings-form__navigate
        nuxt-link(
          to="/cloud/account/workspaces/"
          class="c-section-cloud-account-settings-form__navigate-link u-medium"
        )
          image-navigate-arrow(
            class="c-section-cloud-account-settings-form__navigate-icon"
          )

          | Back to my workspaces

      .c-section-cloud-account-settings-form__fields
        form-labelled-field(
          name="account_email"
          label="Your email address"
          class="c-section-cloud-account-settings-form__field"
        )
          .c-section-cloud-account-settings-form__field-sider
            form-field(
              v-model="form.email"
              name="account_email"
              type="email"
              align="left"
              tint="light"
              size="mid-large"
              placeholder="Enter an email…"
            )

            base-button(
              tint="link"
            )
              | Edit Email

        form-labelled-field(
          name="account_password"
          label="Change your password"
          class="c-section-cloud-account-settings-form__field"
        )
          .c-section-cloud-account-settings-form__field-sider
            form-field(
              v-model="form.password"
              name="account_password"
              type="password"
              align="left"
              tint="light"
              size="mid-large"
              placeholder="Enter a new password…"
            )

            base-button(
              tint="link"
            )
              | Edit Password

        form-labelled-field(
          name="billing_card"
          label="Edit your payment method"
          class="c-section-cloud-account-settings-form__field"
        )
          .c-section-cloud-account-settings-form__field-card
            .c-section-cloud-account-settings-form__field-card-badge
              base-payment-preview(
                :provider="card.brand"
                class="c-section-cloud-account-settings-form__field-card-badge-preview"
              )

            .c-section-cloud-account-settings-form__field-card-preview
              p.c-section-cloud-account-settings-form__field-card-number.u-ellipsis.u-medium
                | {{ card.numberPreview }}

              p.c-section-cloud-account-settings-form__field-card-identity
                span.u-ellipsis
                  | {{ card.nameOnCard }}

                span.u-ellipsis
                  | Exp. {{ card.expireMonthYear }}

            .c-section-cloud-account-settings-form__field-card-action
              base-button(
                tint="link"
              )
                | Edit Card
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageNavigateArrow from "@/assets/images/components/section/cloud/SectionCloudAccountSettingsForm/navigate-arrow.svg?component";

export default {
  name: "SectionCloudAccountSettingsForm",

  components: { ImageNavigateArrow },

  data() {
    return {
      // --> STATE <----

      // TODO: those are fixtures
      card: {
        brand: "mastercard",
        numberPreview: "5355 XXXX XXXX XXXX",
        nameOnCard: "Valerian Saliou",
        expireMonthYear: "05/28"
      },

      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-account-settings-form";

#{$c} {
  #{$c}__inner {
    max-width: 540px;
    margin: 0 auto;
  }

  #{$c}__navigate {
    margin-top: -20px;

    #{$c}__navigate-link {
      color: $color-base-black-mid;
      font-size: 15px;
      letter-spacing: 0.1px;
      line-height: 22px;
      display: inline-flex;
      align-items: center;

      #{$c}__navigate-icon {
        height: 11px;
        margin-right: 7px;
        margin-bottom: -1px;
        flex: 0 0 auto;
        transition: transform 100ms linear;
      }

      &:hover {
        #{$c}__navigate-icon {
          transform: translateX(-2px);
        }
      }

      &:active {
        #{$c}__navigate-icon {
          transform: translateX(1px);
        }
      }
    }
  }

  #{$c}__fields {
    margin-top: 50px;

    > * {
      margin-bottom: 34px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    #{$c}__field {
      #{$c}__field-sider,
      #{$c}__field-card {
        display: flex;
        align-items: center;
      }

      #{$c}__field-sider {
        column-gap: 14px;

        > * {
          &:nth-child(1) {
            flex: 1;
          }

          &:nth-child(2) {
            min-width: 136px;
            flex: 0 1 auto;
          }
        }
      }

      #{$c}__field-card {
        border: 1px solid $color-border-secondary;
        padding: 18px 16px;
        border-radius: $form-field-border-radius;

        #{$c}__field-card-badge {
          margin-right: 22px;
          flex: 0 0 auto;
        }

        #{$c}__field-card-preview {
          flex: 1;
          overflow: hidden;
        }

        #{$c}__field-card-number {
          color: $color-base-black-mid;
          font-size: 18px;
        }

        #{$c}__field-card-identity {
          color: $color-base-grey-dark;
          font-size: 15.5px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          column-gap: 14px;
        }

        #{$c}__field-card-action {
          margin-left: 14px;
          flex: 0 1 auto;
        }
      }
    }
  }
}
</style>
