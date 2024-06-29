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
    v-slot:title
  )
    | Download Prose

  template(
    v-slot:description
  )
    p
      | Get the Prose app for your platform.

    p.u-medium
      | Install it and start messaging your team in seconds.

  template(
    v-slot:action
  )
    base-button(
      @click="onActionClick"
      :class=`[
        "c-section-downloads-main__action",
        {
          "c-section-downloads-main__action--disabled": !platformName
        }
      ]`
      size="large"
      tint="gradient"
      right-icon="arrow-down"
      bolder
    )
      | Download the Prose App

      template(
        v-if="platformName"
      )
        base-space

        | for {{ platformName }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const PLATFORM_NAMES = {
  macOS: "Mac",
  Windows: "Win",
  Linux: "X11"
};

export default {
  name: "SectionDownloadsMain",

  emits: ["download"],

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
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when action is clicked
     * @public
     * @return {undefined}
     */
    onActionClick() {
      if (this.platformName !== null) {
        this.$emit("download", this.platformName.toLowerCase());
      }
    }
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
    &--disabled {
      pointer-events: none;
      opacity: 0.35;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: 740px) {
  .c-section-downloads-main {
    #{$c}__rasters {
      display: none;
    }
  }
}
</style>
