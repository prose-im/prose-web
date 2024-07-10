<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-suite
  page-wrapper
    base-descripted-title(
      level="normal"
      align="center"
    )
      template(
        v-slot:title
      )
        | Access the complete Prose suite

      template(
        v-slot:description
      )
        p
          | When you create your Prose Cloud server with us, your team gets access to all Prose apps at no extra cost.

        p.u-medium
          | You also get your own admin dashboard, where you can manage your server.
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-suite";

#{$c} {
  /* TODO */
}
</style>
