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
          :active="activeView.id"
          class="c-section-home-showcase__navigator"
        )

      .c-section-home-showcase__direction-wrap
        .c-section-home-showcase__direction
          .c-section-home-showcase__direction-text
            template(
              v-if="activeView.id === 'messaging'"
            )
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

            template(
              v-else-if="activeView.id === 'calls'"
            )
              p.c-section-home-showcase__direction-line.u-medium
                | Call your team members, one-to-one or large groups.

              p.c-section-home-showcase__direction-line
                | Audio, video and screen sharing.

                base-space

                span.u-medium
                  | All encrypted.

            template(
              v-else-if="activeView.id === 'files'"
            )
              p.c-section-home-showcase__direction-line.u-medium
                | Share images and large files in private conversations and groups.

              p.c-section-home-showcase__direction-line
                | Files are stored on your Prose server, and

                base-space

                span.u-medium
                  | kept securely in your history.

            template(
              v-else-if="activeView.id === 'encryption'"
            )
              p.c-section-home-showcase__direction-line.u-medium
                | Everything is encrypted. Unbreakable end-to-end encryption between your team members.

              p.c-section-home-showcase__direction-line
                | End-to-end encryption means that even the server administrator

                base-space

                span.u-medium
                  | cannot read messages

                | .

            template(
              v-else-if="activeView.id === 'pods'"
            )
              p.c-section-home-showcase__direction-line.u-medium
                | Host a Prose server anywhere. Invite an unlimited number of team members.

              p.c-section-home-showcase__direction-line
                | You run the server and you own the data.

                base-space

                span.u-medium
                  | We make it painless for you

                | .

          .c-section-home-showcase__direction-action
            //- TODO: click event to start animation
            base-button(
              right-icon="arrow-right"
              tint="light"
              class="c-section-home-showcase__direction-button"
              reverse
            )
              | {{ directionActionLabel }}

      .c-section-home-showcase__application
        //- TODO: screenshot based on active section
        .c-section-home-showcase__application-window
          .c-section-home-showcase__application-window-contents

          image-application-layout(
            class="c-section-home-showcase__application-window-layout"
          )

        .c-section-home-showcase__application-focus-label-wrap
          .c-section-home-showcase__application-focus-label.u-bold(
            v-if="applicationFocusLabel"
          )
            | {{ applicationFocusLabel }}

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
import ImageApplicationLayout from "~/assets/images/components/section/home/SectionHomeShowcase/application-layout.svg?inline";

export default {
  name: "SectionHomeShowcase",

  components: { ImageDirectionLogoXmpp, ImageApplicationLayout },

  data() {
    return {
      // --> STATE <--

      activeView: {
        id: "messaging",
        index: 0
      },

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

  computed: {
    directionActionLabel() {
      const _label =
        (this.navigatorItems[this.activeView.index] || {}).label || "(?)";

      return `See more on ${_label}`;
    },

    applicationFocusLabel() {
      switch (this.activeView.id) {
        case "messaging": {
          return "Message your team with Prose";
        }

        case "calls": {
          return "Call anyone in your team";
        }

        case "files": {
          return "Share large files with your team";
        }

        case "encryption": {
          return "End-to-end encrypted by default";
        }

        case "pods": {
          return "Setup your Prose Pod server in minutes";
        }

        default: {
          return null;
        }
      }
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when navigator is toggled
     * @public
     * @param  {string} itemId
     * @param  {number} index
     * @return {undefined}
     */
    onToggleNavigator(itemId, index) {
      this.activeView.id = itemId;
      this.activeView.index = index;
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
      flex: 1;
    }

    #{$c}__direction-action {
      margin-left: 46px;

      // TODO: disabled for now
      cursor: not-allowed;

      #{$c}__direction-button {
        pointer-events: none;
        opacity: 0.8;
      }
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

      #{$c}__application-window-contents,
      #{$c}__application-window-layout {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }

      #{$c}__application-window-contents {
        background-image: url("~/assets/images/components/section/home/SectionHomeShowcase/application-contents.webp");
        position: absolute;
        top: 1.9%;
        bottom: 1.15%;
        left: 0.85%;
        right: 0;
      }

      #{$c}__application-window-layout {
        background-color: $color-white;
        background-image: url("~/assets/images/components/section/home/SectionHomeShowcase/application-window.webp");
        width: 100%;
        height: auto;
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
      background: rgba(#9600ff, 0.275);
      z-index: 2;
    }

    #{$c}__blur {
      background: rgba($color-black, 0.6);
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

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-home-showcase {
    #{$c}__application {
      #{$c}__application-window {
        border-radius: 8px;
      }
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  .c-section-home-showcase {
    #{$c}__direction {
      #{$c}__direction-action {
        margin-left: 28px;
      }
    }

    #{$c}__application {
      #{$c}__application-window {
        border-radius: 6px;
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-section-home-showcase {
    #{$c}__direction {
      flex-direction: column;

      #{$c}__direction-text {
        text-align: center;
      }

      #{$c}__direction-action {
        margin-left: 0;
        margin-top: 26px;
      }
    }

    #{$c}__application {
      #{$c}__application-window {
        border-radius: 4px;
      }
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-section-home-showcase {
    #{$c}__application {
      #{$c}__application-window {
        border-radius: 3px;
      }
    }
  }
}
</style>
