<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-partial-cloud-signup-form-fieldset-activate
  base-notice(
    class="c-partial-cloud-signup-form-fieldset-activate__notice"
  )
    | Your server is almost activated! Please

    base-space

    span.u-semibold
      | provide a valid credit card to verify your account

    | . We need this in order to prevent abuse.

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-activate__part",
      partClass
    ]`
  )
    base-title(
      level="lilliput"
      tint="black"
      class="c-partial-cloud-signup-form-fieldset-activate__title"
    )
      | Credit card details

    .c-partial-cloud-signup-form-fieldset-activate__nest.c-partial-cloud-signup-form-fieldset-activate__nest--number
      form-labelled-field(
        name="activate_number"
        label="Card number"
      )
        form-field(
          v-model="form.number"
          @keystroke="onFieldNumberKeystroke"
          name="activate_number"
          type="text"
          align="left"
          size="mid-large"
          placeholder="XXXX XXXX XXXX XXXX"
          inner-class="c-partial-cloud-signup-form-fieldset-activate__input-inner"
          class="c-partial-cloud-signup-form-fieldset-activate__input c-partial-cloud-signup-form-fieldset-activate__input--card"
          autofocus
        )
          span.c-partial-cloud-signup-form-fieldset-activate__input-preview
            base-payment-icon(
              :provider="cardBrand"
              height="21px"
              class="c-partial-cloud-signup-form-fieldset-activate__input-preview-brand"
            )

    .c-partial-cloud-signup-form-fieldset-activate__nest.c-partial-cloud-signup-form-fieldset-activate__nest--name-and-cvv
      form-labelled-field(
        name="activate_name"
        label="Name on card"
      )
        form-field(
          v-model="form.name"
          name="activate_name"
          type="text"
          align="left"
          size="mid-large"
          placeholder="Enter your name…"
        )

      form-labelled-field(
        name="activate_cvv"
        label="Security code"
      )
        form-field(
          v-model="form.cvv"
          name="activate_cvv"
          type="text"
          align="left"
          size="mid-large"
          placeholder="CVV"
          pattern="[0-9]{3,4}"
        )

    .c-partial-cloud-signup-form-fieldset-activate__nest.c-partial-cloud-signup-form-fieldset-activate__nest--zip-and-expire
      form-labelled-field(
        name="activate_zip"
        label="Postal code"
      )
        form-field(
          v-model="form.zip"
          name="activate_zip"
          type="text"
          align="left"
          size="mid-large"
          placeholder="ZIP / Postcode"
        )

      form-labelled-field(
        name="activate_expire"
        label="Expiration date"
      )
        form-field(
          v-model="form.expire"
          name="activate_expire"
          type="text"
          align="left"
          size="mid-large"
          placeholder="MM/YY"
          pattern="((0[1-9])|(1[0-2]))\/([0-9]{2})"
        )

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-activate__part",
      "c-partial-cloud-signup-form-fieldset-activate__part--information",
      partClass
    ]`
  )
    .c-partial-cloud-signup-form-fieldset-activate__information
      .c-partial-cloud-signup-form-fieldset-activate__information-lines
        p.u-medium
          | We will only perform a check. Your card will not be charged.

        p
          | This will activate your 30 days free trial, which you can cancel anytime.

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-activate__part",
      "c-partial-cloud-signup-form-fieldset-activate__part--action",
      partClass
    ]`
  )
    base-button(
      @click="onContinueClick"
      size="enormous"
      tint="link"
      right-icon="arrow-right"
    )
      | Activate my Prose Server Now
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import creditCardType from "credit-card-type";

// CONSTANTS
const CARD_NUMBER_TO_BRAND_LENGTH_MINIMUM = 4;

export default {
  name: "PartialCloudSignupFormFieldsetActivate",

  props: {
    partClass: {
      type: String,
      required: true
    }
  },

  emits: ["submit"],

  data() {
    return {
      // --> STATE <--

      cardBrand: "",

      form: {
        number: "",
        name: "",
        cvv: "",
        zip: "",
        expire: ""
      }
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Handles number field keystroke
     * @public
     * @param  {string} [value]
     * @return {undefined}
     */
    onFieldNumberKeystroke(value = "") {
      if (value.length >= CARD_NUMBER_TO_BRAND_LENGTH_MINIMUM) {
        const _cards = creditCardType(value);

        this.cardBrand = _cards[0]?.type || "";
      } else {
        this.cardBrand = "";
      }
    },

    /**
     * Handles continue click
     * @public
     * @return {undefined}
     */
    onContinueClick() {
      this.$emit("submit", this.form);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-partial-cloud-signup-form-fieldset-activate";

#{$c} {
  #{$c}__notice {
    margin-bottom: 42px;
  }

  #{$c}__part {
    #{$c}__title {
      padding-bottom: 10px;
    }

    #{$c}__nest {
      column-gap: 25px;
      display: flex;

      &--number {
        > * {
          &:nth-child(1) {
            flex: 1;
          }
        }
      }

      &--name-and-cvv {
        > * {
          &:nth-child(1) {
            flex: 0.7;
          }

          &:nth-child(2) {
            flex: 0.3;
          }
        }
      }

      &--zip-and-expire {
        > * {
          &:nth-child(1) {
            flex: 0.55;
          }

          &:nth-child(2) {
            flex: 0.45;
          }
        }
      }
    }

    #{$c}__input {
      &--card {
        position: relative;

        #{$c}__input-inner {
          padding-left: 68px;
        }

        #{$c}__input-preview {
          background: $color-white;
          border: 1px solid $color-border-secondary;
          width: 40px;
          height: 30px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          left: 14px;
          transform: translateY(-50%);
          border-radius: 7px;

          #{$c}__input-preview-brand {
            flex: 0 0 auto;
          }
        }
      }
    }

    #{$c}__information {
      color: $color-base-black-mid;
      font-size: 13.5px;
      line-height: 23px;
      letter-spacing: 0.1px;

      #{$c}__information-lines {
        margin: -10px 0;
      }
    }

    &--information,
    &--action {
      text-align: center;
    }
  }
}
</style>
