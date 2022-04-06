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
      bolder
    )
      | Download the Prose App for macOS

    .c-section-downloads-main__rasters(
      slot="rasters"
    )
      base-raster(
        name="magnifier"
        class="c-section-downloads-main__raster c-section-downloads-main__raster--magnifier"
      )

      base-raster(
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
  #{$c}__rasters {
    #{$c}__raster {
      position: absolute;

      &--magnifier {
        left: -48px;
        top: 28px;
        transform: scale(0.75);
        transform-origin: 0 0;
      }

      &--bell {
        right: -20px;
        top: -24px;
        transform: scale(0.65);
        transform-origin: 100% 0;
      }
    }
  }
}
</style>
