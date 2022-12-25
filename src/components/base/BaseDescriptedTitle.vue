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
    :align="align"
    level="large"
    tint="gradient"
    class="c-base-descripted-title__title"
  )
    slot(
      name="title"
    )

  base-description(
    :align="align"
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
  name: "BaseDescriptedTitle",

  props: {
    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-descripted-title";

.c-base-descripted-title {
  #{$c}__title {
    max-width: 700px;
    margin: 0 auto;
  }

  #{$c}__description {
    margin-top: 22px;
  }
}
</style>
