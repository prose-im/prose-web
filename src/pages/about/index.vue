<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
    .p-about-index
        section-about-main(
          class="p-about-index__main"
        )

        section-about-manifesto(
          class="p-about-index__manifesto"
        )

        section-about-team(
          class="p-about-index__team"
        )

</template>

<!-- **********************************************************************
           SCRIPT
           ********************************************************************** -->

<script>
export default {
  name: "AboutIndexPage",

  head: {
    title: "About the Company"
  }
};
</script>

<!-- **********************************************************************
           STYLE
           ********************************************************************** -->

<style lang="scss">
$c: ".p-about-index";

.p-about-index {
  #{$c}__form {
    margin-top: 44px;
  }
}
</style>
