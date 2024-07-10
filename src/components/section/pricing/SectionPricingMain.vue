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
        base-descripted-title(
          level="normal"
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
    border-radius: ($wrapper-border-radius - $wrapper-padding);
  }
}
</style>
