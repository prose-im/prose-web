<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-compare
  page-wrapper
    base-descripted-title(
      level="normal"
      align="center"
    )
      template(
        v-slot:title
      )
        | Compare our plans

      template(
        v-slot:description
      )
        p
          | See what you get, in details, whether you opt for a free or paid Prose setup.
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-compare";

#{$c} {
  /* TODO */
}
</style>
