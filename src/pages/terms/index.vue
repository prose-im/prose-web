<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-terms-index
  section-terms-main(
    class="p-terms-index__main"
  )

  section-terms-text(
    class="p-terms-index__text"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "simple"
});
</script>

<script>
export default {
  name: "TermsIndexPage",

  head: {
    title: "Prose Terms of Use and Privacy Policy"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-terms-index";

#{$c} {
  padding-bottom: 74px;

  #{$c}__text {
    margin-top: 34px;
  }
}
</style>
