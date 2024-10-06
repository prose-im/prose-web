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

  #{$c}__inner {
    flex: 1;
  }

  #{$c}__aside {
    background-color: rgba($color-background-secondary, 0.5);
    border-left: 1px solid $color-border-tertiary;
    min-width: 320px;
    width: 40%;
    flex: 0 1 auto;
  }
}
</style>
