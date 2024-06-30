<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
button.c-base-disclosure-button(
  @click="toggle"
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDisclosureButton",

  inject: ["toggle"]
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-disclosure-button";

#{$c} {
  outline: none;
  border: none;
  background: none;
  padding: 0;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
}
</style>
