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

      template(
        v-if="platformName"
      )
        base-space

        | for {{ platformName }}

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
// CONSTANTS
const PLATFORM_NAMES = {
  macOS: "Mac",
  Windows: "Win",
  Linux: "Linux"
};

export default {
  name: "SectionDownloadsMain",

  data() {
    return {
      // --> DATA <--

      navigatorAppVersion: null
    };
  },

  computed: {
    platformName() {
      // Find the best matching platform name (if found)
      if (this.navigatorAppVersion) {
        for (const _platformName in PLATFORM_NAMES) {
          if (
            this.navigatorAppVersion.includes(PLATFORM_NAMES[_platformName])
          ) {
            return _platformName;
          }
        }
      }

      return null;
    }
  },

  mounted() {
    this.navigatorAppVersion = window.navigator.appVersion || null;
  }
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
