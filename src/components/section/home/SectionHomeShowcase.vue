<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-showcase
    page-wrapper(
      class="c-section-home-showcase__inner"
    )
      base-title(
        level="small"
        tint="light"
        align="center"
        class="c-section-home-showcase__title"
      )
        | A single app, where all your

        br

        | workspace

        base-space

        base-surround(
          :variant="2"
          :blend="0.5"
          tint="white"
        )
          | magic

        base-space

        | happens.

      .c-section-home-showcase__navigator-wrap
        base-navigator(
          @toggle="onToggleNavigator"
          :items="navigatorItems"
          :active="activeView"
          class="c-section-home-showcase__navigator"
        )

    .c-section-home-showcase__background
      span.c-section-home-showcase__separator
      span.c-section-home-showcase__color
      span.c-section-home-showcase__blur
      span.c-section-home-showcase__image
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageNavigatorIconMessaging from "~/assets/images/components/section/home/SectionHomeShowcase/navigator-icon-messaging.svg?raw";
import ImageNavigatorIconCalls from "~/assets/images/components/section/home/SectionHomeShowcase/navigator-icon-calls.svg?raw";
import ImageNavigatorIconFiles from "~/assets/images/components/section/home/SectionHomeShowcase/navigator-icon-files.svg?raw";
import ImageNavigatorIconEncryption from "~/assets/images/components/section/home/SectionHomeShowcase/navigator-icon-encryption.svg?raw";
import ImageNavigatorIconPods from "~/assets/images/components/section/home/SectionHomeShowcase/navigator-icon-pods.svg?raw";

export default {
  name: "SectionHomeShowcase",

  data() {
    return {
      // --> STATE <--

      activeView: "messaging",

      // --> DATA <--

      navigatorItems: [
        {
          id: "messaging",
          label: "Messaging",
          iconHtml: ImageNavigatorIconMessaging
        },

        {
          id: "calls",
          label: "Calls",
          iconHtml: ImageNavigatorIconCalls
        },

        {
          id: "files",
          label: "Files",
          iconHtml: ImageNavigatorIconFiles
        },

        {
          id: "encryption",
          label: "Encryption",
          iconHtml: ImageNavigatorIconEncryption
        },

        {
          id: "pods",
          label: "Prose Pods",
          iconHtml: ImageNavigatorIconPods
        }
      ]
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when navigator is toggled
     * @public
     * @param  {string} itemId
     * @return {undefined}
     */
    onToggleNavigator(itemId) {
      this.activeView = itemId;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-showcase";

.c-section-home-showcase {
  padding-top: 60px;
  padding-bottom: 54px;
  position: relative;

  #{$c}__inner {
    position: relative;
    z-index: 3;
  }

  #{$c}__navigator-wrap {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }

  #{$c}__background {
    &,
    #{$c}__separator,
    #{$c}__color,
    #{$c}__blur,
    #{$c}__image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    #{$c}__separator {
      border-top: 1px solid rgba($color-base-blue-dark, 0.18);
    }

    #{$c}__color {
      background: rgba(#9600ff, 0.2);
      z-index: 2;
    }

    #{$c}__blur {
      background: rgba($color-black, 0.5);
      backdrop-filter: blur(50px);
      z-index: 1;
    }

    #{$c}__image {
      background-image: url("~/assets/images/components/section/home/SectionHomeShowcase/background-image.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 0;
    }
  }
}
</style>
