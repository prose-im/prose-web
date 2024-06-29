<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-main-title(
  class="c-section-about-main"
)
  template(
    v-slot:title
  )
    | We are a small team with a big passion

  template(
    v-slot:description
  )
    .c-section-about-main__illustration-center
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionAboutMain"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-about-main";

#{$c} {
  #{$c}__illustration-center {
    background-color: $color-base-grey-light;
    background-image: url("~/assets/images/components/section/about/SectionAboutMain/illustration-wide.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
    margin-top: 64px;
    overflow: hidden;
    border-radius: 32px;
  }
}
</style>
