<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-base-descripted-title
    base-title(
      class="c-base-descripted-title__title"
    )
      slot(
        name="title"
      )

    base-description(
      class="c-base-descripted-title__description"
    )
      slot(
        name="description"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDescriptedTitle"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-descripted-title";

.c-base-descripted-title {
  #{$c}__description {
    margin-top: 22px;
  }
}
</style>
