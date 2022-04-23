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

      h6.c-app-download__name.u-title.u-bold(
        v-if="platformName"
      )
        | {{ platformName }}

      base-tooltip(
        align="center"
        direction="top"
        class="c-app-download__action-wrap"
      )
        template(
          v-if="!target"
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
  android: #90c92a,
  ios: #1d1d28,
  linux: #dd6e0e,
  macos: #224cc4,
  web: #35a1ef,
  windows: #18c3e2
);

.c-app-download {
  background: $color-white;
  border: 1.5px solid rgba($color-base-blue-dark, 0.1);
  text-align: center;
  padding: 22px 18px 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  #{$c}__icon {
    display: block;

    #{$c}__icon-image {
      display: inline-block;

      svg {
        width: auto;
        height: 54px;
      }
    }
  }

  #{$c}__name {
    color: $color-black;
    font-size: 15px;
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
        #{$c}__icon-image {
          fill: $tint;
        }
      }
    }
  }
}
</style>
