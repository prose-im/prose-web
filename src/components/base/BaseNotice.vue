<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-notice
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseNotice"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-notice";

#{$c} {
  background-color: $color-base-yellow-light;
  border: 1px solid $color-base-yellow-mid;
  color: $color-base-black-mid;
  font-size: 13.5px;
  line-height: 21px;
  letter-spacing: 0.1px;
  padding: 9px 22px;
  border-radius: 8px;
}
</style>
