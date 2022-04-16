<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-feature-grid
  .c-base-feature-grid__line(
    v-if="$slots['line-1']"
  )
    slot(
      name="line-1"
    )

  .c-base-feature-grid__line(
    v-if="$slots['line-2']"
  )
    slot(
      name="line-2"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseFeatureGrid"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-feature-grid";

.c-base-feature-grid {
  #{$c}__line {
    margin-bottom: 52px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    & > * {
      margin-right: 48px;
      flex: 1;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
