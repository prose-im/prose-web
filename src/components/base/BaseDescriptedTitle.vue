<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-descripted-title",
    "c-base-descripted-title--" + align
  ]`
)
  base-title(
    :level="level"
    :align="align"
    tint="gradient"
    class="c-base-descripted-title__title"
  )
    slot(
      name="title"
    )

  base-description(
    :align="align"
    :tint="tint"
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
    level: {
      type: String,
      default: "large",

      validator(x) {
        return ["normal", "large"].includes(x);
      }
    },

    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "light",

      validator(x) {
        return ["light", "dark"].includes(x);
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

#{$c} {
  #{$c}__description {
    margin-top: 22px;
  }

  // ALIGNS

  &--center {
    #{$c}__title {
      max-width: 700px;
      margin: 0 auto;
    }
  }
}
</style>
