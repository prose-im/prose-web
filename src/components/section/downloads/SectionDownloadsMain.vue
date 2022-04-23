<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  page-main-title(
    class="c-section-downloads-main"
  )
    template(
      slot="title"
    )
      | Download Prose Apps

    template(
      slot="description"
    )
      p
        | Get the Prose app for your platform.

      p.u-medium
        | Install it and start messaging your team in seconds.

    base-button(
      slot="action"
      size="large"
      right-icon="arrow-down"
      class="c-section-downloads-main__action"
      bolder
    )
      | Download the Prose App

    .c-section-downloads-main__rasters(
      slot="rasters"
    )
      base-raster(
        :scale="0.75"
        name="magnifier"
        class="c-section-downloads-main__raster c-section-downloads-main__raster--magnifier"
      )

      base-raster(
        :scale="0.65"
        name="bell"
        class="c-section-downloads-main__raster c-section-downloads-main__raster--bell"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionDownloadsMain"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-downloads-main";

.c-section-downloads-main {
  #{$c}__action {
    pointer-events: none;
    opacity: 0.35;
  }

  #{$c}__rasters {
    #{$c}__raster {
      position: absolute;

      &--magnifier {
        left: -48px;
        top: 28px;
      }

      &--bell {
        right: -20px;
        top: -24px;
      }
    }
  }
}
</style>
