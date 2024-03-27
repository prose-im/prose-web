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
        :targets="nestItem.targets"
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

  props: {
    version: {
      type: String,
      default: null
    },

    matrix: {
      type: Object,

      default() {
        return {};
      }
    }
  },

  computed: {
    platforms() {
      const _architectures = this.$config.downloads.app.architectures;

      return {
        desktop: {
          title: "Desktop Apps",

          apps: [
            {
              platform: "web",
              action: "load",
              targets: [{ url: this.$config.url.prose_app }],
              spaced: true
            },

            {
              platform: "macos",
              action: "download",

              targets: [
                this.generateDesktopTarget(
                  "macos",
                  "dmg",
                  _architectures.apple,
                  "darwin"
                ),

                this.generateDesktopTarget(
                  "macos",
                  "dmg",
                  _architectures.intel,
                  "darwin"
                )
              ]
            },

            {
              platform: "windows",
              action: "download",

              targets: [
                this.generateDesktopTarget(
                  "windows",
                  "msi",
                  _architectures.intel
                )
              ]
            },

            {
              platform: "linux",
              action: "download",

              targets: [
                this.generateDesktopTarget(
                  "linux",
                  "AppImage",
                  _architectures.intel
                )
              ]
            }
          ]
        },

        mobile: {
          title: "Mobile Apps",

          apps: [
            {
              platform: "ios",
              action: "get",
              targets: [this.generateMobileTarget("ios")]
            },

            {
              platform: "android",
              action: "get",
              targets: [this.generateMobileTarget("android")]
            }
          ]
        }
      };
    }
  },

  methods: {
    // --> EXTERNALS <--

    /**
     * Request a download for target platform (from parent)
     * @public
     * @param  {string} platform
     * @return {undefined}
     */
    downloadFromParent(platform) {
      const platformDownloadElement =
        this.$el.querySelector(
          `.js-app-download.js-app-download--${platform}`
        ) || null;

      // Trigger click on platform download button? (if any)
      if (platformDownloadElement !== null) {
        platformDownloadElement.click();
      } else {
        alert(
          "Could not download Prose. Is it available yet for your platform?"
        );
      }
    },

    // --> HELPERS <--

    /**
     * Generates target URL for platform (desktop)
     * @public
     * @param  {string} platform
     * @param  {string} packageExtension
     * @param  {object} architecture
     * @param  {string} [matrixPlatform]
     * @return {string} Target URL (or none)
     */
    generateDesktopTarget(
      platform,
      packageExtension,
      architecture,
      matrixPlatform = null
    ) {
      // Default to platform if no matrix platform given
      matrixPlatform = matrixPlatform || platform;

      // Generate platform slug
      const platformSlug = `${matrixPlatform}-${architecture.full}`;

      // Check if a version is available on matrix? (for platform)
      if (platformSlug in this.matrix) {
        return this.$filters.formatDownloadUrl(
          this.version,
          platform,
          packageExtension,
          architecture
        );
      }

      // No target URL for platform
      return null;
    },

    /**
     * Generates target URL for platform (mobile)
     * @public
     * @param  {string} platform
     * @return {string} Target URL (or none)
     */
    generateMobileTarget() {
      // No mobile target available at the moment
      return null;
    }
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

@media (max-width: 1140px) {
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
