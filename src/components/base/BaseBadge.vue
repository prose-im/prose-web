<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span(
  :class=`[
    "c-base-badge",
    "u-medium",
    "c-base-badge--" + color
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseBadge",

  props: {
    color: {
      type: String,
      default: "black",

      validator(x) {
        return ["black", "green"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-badge";

#{$c} {
  color: $color-white;
  font-size: 13px;
  letter-spacing: 0.14px;
  line-height: 15px;
  text-align: center;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 7px;

  // --> COLORS <--

  &--black {
    background-color: $color-base-black-mid;
  }

  &--green {
    background-color: $color-base-green-mid;
  }
}
</style>
