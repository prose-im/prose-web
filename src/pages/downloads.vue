<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-downloads
    page-main-title(
      class="p-downloads__main"
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
        emphasis
      )
        | Download the Prose App for macOS

      .p-downloads__main-rasters(
        slot="rasters"
      )
        base-raster(
          name="magnifier"
          class="p-downloads__main-raster p-downloads__main-raster--magnifier"
        )

        base-raster(
          name="bell"
          class="p-downloads__main-raster p-downloads__main-raster--bell"
        )

    page-section(
      level="secondary"
      class="p-downloads__platforms"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: COMPONENTS
import PageMainTitle from "~/components/page/PageMainTitle";

export default {
  name: "DownloadsPage",

  components: { PageMainTitle },

  head: {
    title: "Download Prose apps"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-downloads";

#{$c}__main {
  #{$c}__main-rasters {
    #{$c}__main-raster {
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

#{$c}__platforms {
  margin-top: 90px;
}
</style>
