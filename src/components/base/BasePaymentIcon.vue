<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span(
  :style="iconStyle"
  :class=`[
    "c-base-payment-icon",
    "c-base-payment-icon--" + provider
  ]`
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const SIZE_RATIO = 1.56;
const BORDER_RADIUS_RATIO = 0.15;

export default {
  name: "BasePaymentIcon",

  props: {
    provider: {
      type: String,
      default: null
    },

    height: {
      type: String,
      default: "18px",

      validator(x) {
        return x.endsWith("px");
      }
    }
  },

  computed: {
    heightNumber() {
      return parseInt(this.height.replace("px", ""));
    },

    widthNumber() {
      return Math.round(this.heightNumber * SIZE_RATIO);
    },

    borderRadiusNumber() {
      return Math.round(this.heightNumber * BORDER_RADIUS_RATIO);
    },

    width() {
      return `${this.widthNumber}px`;
    },

    borderRadius() {
      return `${this.borderRadiusNumber}px`;
    },

    iconStyle() {
      return {
        height: this.height,
        width: this.width,
        borderRadius: this.borderRadius
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-payment-icon";

// VARIABLES
$providers: (
  "american-express",
  "diners-club",
  "discover",
  "elo",
  "hiper",
  "hipercard",
  "jcb",
  "maestro",
  "mastercard",
  "mir",
  "unionpay",
  "visa"
);

#{$c} {
  background-color: $color-base-grey-light;
  background-image: url("@/assets/images/components/base/BasePaymentIcon/generic.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  display: inline-block;

  // --> PROVIDERS <--

  @each $provider in $providers {
    &--#{$provider} {
      background-image: url("@/assets/images/components/base/BasePaymentIcon/#{$provider}.svg");
    }
  }
}
</style>
