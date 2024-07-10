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

#{$c} {
  /* TODO */
}
</style>
