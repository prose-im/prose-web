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
      level="normal"
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
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-simulate";

#{$c} {
  /* TODO */
}
</style>
