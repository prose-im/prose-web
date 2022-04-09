<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-terms
    section-terms-main(
      class="p-terms__main"
    )

    section-terms-text(
      class="p-terms__text"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "TermsPage",
  layout: "simple",

  head: {
    title: "Prose Terms of Use and Privacy Policy"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-terms";

.p-terms {
  padding-bottom: 74px;

  #{$c}__text {
    margin-top: 34px;
  }
}
</style>
