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
      "c-app-download",
      "c-app-download--" + platform
    ]`
  )
    .c-app-download__inner
      .c-app-download__icon(
        v-if="platformIcon"
      )
        span.c-app-download__icon-image(
          v-html="platformIcon"
        )
      .c-app-download__text
        .c-app-download__comingsoon.u-bold(
          v-if="comingSoon"
        )
          | coming soon
        h6.c-app-download__name.u-title.u-bold(
          v-if="platformName"
        )
          | {{ platformName }}

        base-tooltip(
          :bypassed="!!target"
          align="center"
          direction="top"
          class="c-app-download__action-wrap"
        )
          template(
            slot="tooltip"
          )
            | Coming soon!

          a(
            :href="target"
            :class=`[
              "c-app-download__action",
              {
                "c-app-download__action--locked": !target
              }
            ]`
            slot="default"
          )
            base-button(
              :right-icon="actionRightIcon"
              tint="light"
              class="c-app-download__action-button"
            )
              | {{ actionLabel }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImagePlatformIconWindows from "~/assets/images/components/base/BaseAppDownload/platform-icon-windows.svg?raw";
import ImagePlatformIconAndroid from "~/assets/images/components/base/BaseAppDownload/platform-icon-android.svg?raw";
import ImagePlatformIconIOS from "~/assets/images/components/base/BaseAppDownload/platform-icon-ios.svg?raw";
import ImagePlatformIconLinux from "~/assets/images/components/base/BaseAppDownload/platform-icon-linux.svg?raw";
import ImagePlatformIconMacOS from "~/assets/images/components/base/BaseAppDownload/platform-icon-macos.svg?raw";
import ImagePlatformIconWeb from "~/assets/images/components/base/BaseAppDownload/platform-icon-web.svg?raw";

// CONSTANTS
const PLATFORMS = {
  windows: {
    name: "Windows",
    icon: ImagePlatformIconWindows
  },

  android: {
    name: "Android",
    icon: ImagePlatformIconAndroid
  },

  ios: {
    name: "iOS",
    icon: ImagePlatformIconIOS
  },

  linux: {
    name: "Linux",
    icon: ImagePlatformIconLinux
  },

  macos: {
    name: "macOS",
    icon: ImagePlatformIconMacOS
  },

  web: {
    name: "Web",
    icon: ImagePlatformIconWeb
  }
};

export default {
  name: "BaseAppDownload",

  props: {
    platform: {
      type: String,
      required: true,

      validator(x) {
        return Object.keys(PLATFORMS).includes(x);
      }
    },

    target: {
      type: String,
      default: null
    },

    comingSoon: {
      type: Boolean,
      default: true
    },

    action: {
      type: String,
      default: "download",

      validator(x) {
        return ["load", "download", "get"].includes(x);
      }
    }
  },

  computed: {
    platformName() {
      const _platform = PLATFORMS[this.platform];

      return _platform ? _platform.name : null;
    },

    platformIcon() {
      const _platform = PLATFORMS[this.platform];

      return _platform ? _platform.icon : null;
    },

    actionRightIcon() {
      switch (this.action) {
        case "download": {
          return "arrow-down";
        }

        default: {
          return "arrow-right";
        }
      }
    },

    actionLabel() {
      switch (this.action) {
        case "get": {
          return "Get App";
        }

        case "load": {
          return "Load App";
        }

        default: {
          return "Download";
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-app-download";

// VARIABLES
$platforms: (
  android: #67d3a6,
  ios: #1d1d28,
  linux: #ff7e5b,
  macos: #b1bede,
  web: #35a1ef,
  windows: #5488e5
);

.c-app-download {
  background: $color-white;
  overflow: hidden;
  display: flex;
  border-radius: 12px;

  #{$c}__inner {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  #{$c}__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #{$c}__comingsoon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    color: $color-white;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    background: #45b36b;
    border-radius: 4px;
  }

  #{$c}__icon {
    display: block;
    padding: 60px;
    border-radius: 24px;

    #{$c}__icon-image {
      display: inline-block;

      svg {
        width: auto;
        height: 54px;
        fill: white;
      }
    }
  }

  #{$c}__name {
    color: $color-black;
    font-size: 24px;
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }

  #{$c}__action-wrap {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }

  #{$c}__action {
    display: block;

    &--locked {
      cursor: not-allowed;

      #{$c}__action-button {
        pointer-events: none;
        opacity: 0.6;
      }
    }
  }

  // --> PLATFORMS <--

  @each $platform, $tint in $platforms {
    &--#{$platform} {
      #{$c}__icon {
        background-color: $tint;
      }
    }
  }

  // --> MEDIA-QUERIES <--

  @media (max-width: $screen-medium-width-breakpoint) {
    #{$c}__inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
