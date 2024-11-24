<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
label.c-form-label(
  :for="forName"
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "FormLabel",

  props: {
    forName: {
      type: String,
      default: null
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-label";

#{$c} {
  color: $color-base-grey-dark;
  font-size: 16px;
  letter-spacing: -0.4px;
}
</style>
