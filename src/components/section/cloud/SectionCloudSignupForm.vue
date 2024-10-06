<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signup-form
  .c-section-cloud-signup-form__inner
    .c-section-cloud-signup-form__fieldset

  .c-section-cloud-signup-form__aside
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSignupForm"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signup-form";

#{$c} {
  display: flex;
  flex-direction: row;
  overflow: hidden;

  #{$c}__inner {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    overflow: auto;
  }

  #{$c}__aside {
    background-color: rgba($color-background-secondary, 0.5);
    border-left: 1px solid $color-border-tertiary;
    min-width: 320px;
    width: 40%;
    flex: 0 1 auto;
  }

  #{$c}__fieldset {
    padding: 70px 12px 40px;
    width: 100%;
    max-width: 700px;
    box-sizing: border-box;
  }
}
</style>
