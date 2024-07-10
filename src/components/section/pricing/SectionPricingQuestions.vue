<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-questions
  page-wrapper
    base-descripted-title(
      level="medium"
    )
      template(
        v-slot:title
      )
        | Frequently asked questions

      template(
        v-slot:description
      )
        p
          | Still having questions?

          base-space(
            :repeat="2"
          )

          nuxt-link(
            to="/contact/"
            class="u-medium"
          )
            | Ask us here
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-questions";

#{$c} {
  /* TODO */
}
</style>
