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
      .c-app-download__badge.u-semibold(
        v-if="hasNoTarget && ready"
      )
        | planned

      h6.c-app-download__name.u-title.u-semibold(
        v-if="platformName"
      )
        | {{ platformName }}

        base-spinner(
          v-if="hasNoTarget && !ready"
          color="grey"
          size="8px"
          border-width="1px"
          class="c-app-download__spinner"
        )

      .c-app-download__actions
        a(
          v-for="(target, index) in filteredTargets"
          :key="'action_' + index"
          :href="target?.url"
          :class=`[
            "c-app-download__action",
            {
              "c-app-download__action--locked": (target === null),
              ["js-app-download js-app-download--" + platform]: (target !== null && index === 0)
            }
          ]`
        )
          base-button(
            :right-icon="(index === 0) ? actionRightIcon : null"
            :tint="(target !== null && index === 0) ? 'fancy' : 'light'"
            class="c-app-download__action-button"
          )
            | {{ actionLabel }}

            template(
              v-if="target?.name"
            )
              base-space(
                :repeat="2"
              )

              | ({{ target.name }})
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImagePlatformIconWindows from "@/assets/images/components/base/BaseAppDownload/platform-icon-windows.svg?raw";
import ImagePlatformIconAndroid from "@/assets/images/components/base/BaseAppDownload/platform-icon-android.svg?raw";
import ImagePlatformIconIOS from "@/assets/images/components/base/BaseAppDownload/platform-icon-ios.svg?raw";
import ImagePlatformIconLinux from "@/assets/images/components/base/BaseAppDownload/platform-icon-linux.svg?raw";
import ImagePlatformIconMacOS from "@/assets/images/components/base/BaseAppDownload/platform-icon-macos.svg?raw";
import ImagePlatformIconWeb from "@/assets/images/components/base/BaseAppDownload/platform-icon-web.svg?raw";

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

    targets: {
      type: Array,

      default() {
        return [];
      }
    },

    action: {
      type: String,
      default: "download",

      validator(x) {
        return ["load", "download", "get"].includes(x);
      }
    },

    ready: {
      type: Boolean,
      default: true
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
    },

    hasNoTarget() {
      return this.filteredTargets[0] === null;
    },

    filteredTargets() {
      // Pick non-empty targets only
      const _targets = this.targets.filter(target => {
        return target !== null;
      });

      // Guarantee at least 1 empty target if empty
      // Notice: this allows showing a disabled button
      if (_targets.length === 0) {
        _targets.push(null);
      }

      return _targets;
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
  android: #48d69b,
  ios: #1d1d28,
  linux: #ff7e5b,
  macos: #7e8cb0,
  web: #35a1ef,
  windows: #5488e5
);

#{$c} {
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

  #{$c}__badge {
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
    display: flex;
    align-items: center;

    &:first-child {
      margin-top: 0;
    }

    #{$c}__spinner {
      margin-left: 8px;
      margin-bottom: -3px;
      flex: 0 0 auto;
    }
  }

  #{$c}__actions {
    margin-top: 30px;

    > * {
      margin-top: 12px;

      &:first-child {
        margin-top: 0;
      }
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
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__inner {
      flex-direction: column;
      align-items: center;
    }

    #{$c}__text {
      text-align: center;
      display: block;
    }

    #{$c}__name {
      justify-content: center;
    }
  }
}
</style>
