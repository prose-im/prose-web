<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-section(
  class="c-section-downloads-platforms"
)
  .c-section-downloads-platforms__nest(
    v-for="nest, nestType in platforms"
    :key="nestType"
  )
    base-title(
      class="c-section-downloads-platforms__title"
      tint="dark"
      level="small"
    )
      | {{ nest.title }}

    base-divider(
      class="c-section-downloads-platforms__divider"
    )

    .c-section-downloads-platforms__apps(
      v-if="nest.apps.length > 0"
    )
      base-app-download(
        v-for="nestItem in nest.apps"
        :key="nestItem.platform"
        :platform="nestItem.platform"
        :target="nestItem.target"
        :action="nestItem.action"
        :class=`[
          "c-section-downloads-platforms__app",
          {
            "c-section-downloads-platforms__app--spaced": nestItem.spaced
          }
        ]`
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionDownloadsPlatforms",

  data() {
    return {
      // --> DATA <--

      platforms: {
        desktop: {
          title: "Desktop Apps",

          apps: [
            {
              platform: "web",
              action: "load",
              target: null,
              spaced: true
            },

            {
              platform: "macos",
              action: "download",
              target: null
            },

            {
              platform: "windows",
              action: "download",
              target: null
            },

            {
              platform: "linux",
              action: "download",
              target: null
            }
          ]
        },

        mobile: {
          title: "Mobile Apps",

          apps: [
            {
              platform: "ios",
              action: "get",
              target: null
            },

            {
              platform: "android",
              action: "get",
              target: null
            }
          ]
        }
      }
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-downloads-platforms";

.c-section-downloads-platforms {
  overflow-y: hidden;

  #{$c}__nest {
    margin-bottom: 80px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  #{$c}__divider {
    margin: 24px 0 48px;
  }

  #{$c}__apps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    margin-top: 22px;

    &::after,
    #{$c}__app {
      flex: 0 0 auto;
    }

    #{$c}__app {
      margin-right: 15px;

      &--spaced {
        margin-right: 50px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &::after {
      content: "";
      width: $page-wrapper-lilliput-padding-sides;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-downloads-platforms {
    #{$c}__apps {
      display: flex;
      justify-content: flex-start;
      overflow-x: auto;
      gap: 24px;
    }
  }
}
</style>
