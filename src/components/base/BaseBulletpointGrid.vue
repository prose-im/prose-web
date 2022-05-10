<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-bulletpoint-grid
  .c-base-bulletpoint-grid__line(
    v-if="$slots['line-1']"
  )
    slot(
      name="line-1"
    )

  .c-base-bulletpoint-grid__line(
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
  name: "BaseBulletpointGrid"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-bulletpoint-grid";

// VARIABLES
$grid-spacing: 28px;

.c-base-bulletpoint-grid {
  #{$c}__line {
    margin-bottom: $grid-spacing;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    & > * {
      margin-right: $grid-spacing;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  .c-base-bulletpoint-grid {
    #{$c}__line {
      margin-bottom: 0;
      display: block;

      & > * {
        margin-right: 0;
        margin-bottom: $grid-spacing;
      }
    }
  }
}
</style>
