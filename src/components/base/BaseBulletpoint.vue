<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-bulletpoint
  div(
    v-if="raster"
    :class=`[
      "c-base-bulletpoint__illustration",
      {
        [illustrationClass]: illustrationClass
      }
    ]`
  )
    base-raster(
      :name="raster"
      :class=`[
        "c-base-bulletpoint__raster",
        {
          [rasterClass]: rasterClass
        }
      ]`
    )

  div(
    :class=`[
      "c-base-bulletpoint__text",
      {
        [textClass]: textClass
      }
    ]`
  )
    .c-base-bulletpoint__text-inner
      slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseBulletpoint",

  props: {
    raster: {
      type: String,
      default: null
    },

    illustrationClass: {
      type: String,
      default: null
    },

    rasterClass: {
      type: String,
      default: null
    },

    textClass: {
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
$c: ".c-base-bulletpoint";

.c-base-bulletpoint {
  height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 26px;

  #{$c}__illustration,
  #{$c}__text {
    position: relative;
  }

  #{$c}__illustration {
    z-index: 0;
  }

  #{$c}__text {
    font-size: 28px;
    letter-spacing: -0.2px;
    line-height: 37px;
    padding: 34px;
    padding-top: 0;
    display: flex;
    align-items: flex-end;
    z-index: 1;
  }
}
</style>
