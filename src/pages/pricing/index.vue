<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-pricing-index
  section-pricing-main(
    class="p-pricing-index__main"
  )

  section-pricing-suite(
    class="p-pricing-index__suite"
  )

  section-pricing-compare(
    class="p-pricing-index__compare"
  )

  section-pricing-questions(
    class="p-pricing-index__questions"
  )

  section-pricing-simulate(
    class="p-pricing-index__simulate"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "integrated"
});

// Set page title
useHead({
  title: "Create your Prose server"
});
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-pricing-index";

#{$c} {
  #{$c}__suite {
    margin-top: 160px;
  }

  #{$c}__compare {
    margin-top: 150px;
  }

  #{$c}__questions {
    margin-top: 170px;
  }

  #{$c}__simulate {
    margin-top: 160px;
  }
}
</style>
