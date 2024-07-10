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
          span(
            v-for="bubble in decorationBubbles"
            :class=`[
              "c-section-pricing-main__decorations-bubble",
              "c-section-pricing-main__decorations-bubble--" + bubble
            ]`
          )

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
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionPricingMain",

  data() {
    return {
      // --> DATA <--

      decorationBubbles: ["blue", "pink"]
    };
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
$wrapper-border-radius: 50px;

#{$c} {
  #{$c}__wrapper {
    border: 1px solid rgba($color-base-blue-dark, 0.09);
    padding: $wrapper-padding;
    border-radius: $wrapper-border-radius;
  }

  #{$c}__box {
    background-color: rgba(#f0f1f8, 0.25);
    padding-top: 110px;
    padding-bottom: 160px;
    position: relative;
    overflow: hidden;
    border-radius: ($wrapper-border-radius - $wrapper-padding);
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
      backdrop-filter: blur(50px);
      z-index: 1;
    }

    #{$c}__decorations-bubble {
      position: absolute;
      z-index: 0;
      border-radius: 100%;

      &--blue {
        background-color: $color-base-blue-light;
        aspect-ratio: 1.2;
        width: 50%;
        left: 0;
        bottom: 0;
        opacity: 0.3;
        transform: translate(-33%, 40%);
      }

      &--pink {
        background-color: $color-base-pink-light;
        aspect-ratio: 1.15;
        width: 100%;
        right: 0;
        bottom: 0;
        opacity: 0.25;
        transform: translate(72%, 75%);
      }
    }
  }

  #{$c}__inner {
    position: relative;
    z-index: 1;
  }
}
</style>
