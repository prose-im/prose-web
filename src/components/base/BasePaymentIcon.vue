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
  :key="'card_' + providerName"
  :class=`[
    "c-base-payment-icon",
    "c-base-payment-icon--" + providerName,
    {
      "c-base-payment-icon--animated": animated
    }
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
    },

    animated: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    providerName() {
      return this.provider || "generic";
    },

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

      &#{$c}--animated {
        animation: 0.5s c-base-payment-icon-flip linear both;
      }
    }
  }
}

// --> KEYFRAMES <--

@keyframes c-base-payment-icon-flip {
  from {
    transform: rotateY(180deg);
  }

  to {
    transform: rotateY(0deg);
  }
}
</style>
