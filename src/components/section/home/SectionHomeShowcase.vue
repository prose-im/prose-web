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

      .c-section-home-showcase__direction-wrap
        .c-section-home-showcase__direction
          .c-section-home-showcase__direction-text
            //- TODO: from computed prop
            p.c-section-home-showcase__direction-line.u-medium
              | Message other team members in private conversations, or groups.

            p.c-section-home-showcase__direction-line
              | Powered by the

              base-space

              image-direction-logo-xmpp(
                class="c-section-home-showcase__direction-logo"
              )

              base-space

              a.c-section-home-showcase__direction-link.u-medium(
                :href="directionLinkTarget"
                target="_blank"
              )
                | XMPP protocol

              base-space

              | standard.

          .c-section-home-showcase__direction-action
            //- TODO: button action
            base-button(
              right-icon="arrow-right"
              tint="light"
              class="c-section-home-showcase__direction-button"
              reverse
            )
              //- TODO: from computed prop
              | Read more on Messaging

      .c-section-home-showcase__application
        .c-section-home-showcase__application-window
          .c-section-home-showcase__application-window-contents

          image-application-window(
            class="c-section-home-showcase__application-window-structure"
          )

        .c-section-home-showcase__application-focus-label-wrap
          .c-section-home-showcase__application-focus-label.u-bold
            //- TODO: based on what is currently focused
            | Typing indicator

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

import ImageDirectionLogoXmpp from "~/assets/images/components/section/home/SectionHomeShowcase/direction-logo-xmpp.svg?inline";
import ImageApplicationWindow from "~/assets/images/components/section/home/SectionHomeShowcase/application-window.svg?inline";

export default {
  name: "SectionHomeShowcase",

  components: { ImageDirectionLogoXmpp, ImageApplicationWindow },

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
      ],

      directionLinkTarget: `${this.$config.url.xmpp_web}/`
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

  #{$c}__navigator-wrap,
  #{$c}__direction-wrap {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }

  #{$c}__direction {
    align-items: center;
    display: flex;

    #{$c}__direction-text {
      color: $color-white;
      text-align: right;
      font-size: 14.5px;
      line-height: 18px;
      letter-spacing: -0.11px;
    }

    #{$c}__direction-action {
      margin-left: 46px;
    }

    #{$c}__direction-line {
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    #{$c}__direction-link {
      color: $color-white;
      text-decoration: underline;
      text-decoration-color: rgba($color-white, 0.15);
      text-decoration-thickness: 1.5px;
      transition: text-decoration 100ms linear;

      &:hover {
        text-decoration-color: rgba($color-white, 0.4);
      }
    }

    #{$c}__direction-logo {
      fill: rgba($color-white, 0.5);
      vertical-align: middle;
      width: auto;
      height: 13px;
      margin-top: -2px;
      margin-right: -1px;
    }
  }

  #{$c}__application {
    margin-top: 54px;
    padding-bottom: 18px;

    #{$c}__application-window {
      line-height: 0;
      overflow: hidden;
      position: relative;
      z-index: 1;
      border-radius: 10px;
      box-shadow: 0 36px 100px 0 rgba($color-black, 0.4),
        0 0 3px 0 rgba($color-black, 0.55);

      #{$c}__application-window-contents {
        background-image: url("~/assets/images/components/section/home/SectionHomeShowcase/application-contents.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: 1.9%;
        bottom: 1.15%;
        left: 0.85%;
        right: 0;
      }

      #{$c}__application-window-structure {
        width: 100%;
        height: auto;
        margin: -1px 0;
      }
    }

    #{$c}__application-focus-label-wrap {
      padding-top: 22px;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 2;

      #{$c}__application-focus-label {
        background-color: $color-white;
        color: $color-base-blue-dark;
        font-size: 13.5px;
        letter-spacing: -0.1px;
        line-height: 25px;
        text-align: center;
        user-select: none;
        padding: 2px 16px 4px;
        border-radius: 32px;
      }
    }
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
      backdrop-filter: blur(50px) saturate(120%);
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
