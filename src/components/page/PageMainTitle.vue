<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-main-title
    base-title(
      class="c-page-main-title__title"
    )
      slot(
        name="title"
      )

    base-description(
      class="c-page-main-title__description"
    )
      slot(
        name="description"
      )

    .c-page-main-title__action(
      v-if="$slots.action"
    )
      slot(
        name="action"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageMainTitle"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-main-title";

.c-page-main-title {
  text-align: center;

  #{$c}__description {
    margin-top: 24px;
  }

  #{$c}__action {
    margin-top: 40px;
  }
}
</style>
