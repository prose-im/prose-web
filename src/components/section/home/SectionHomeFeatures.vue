<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-features
    page-wrapper
      base-title(
        level="small"
        align="center"
        class="c-section-home-features__title"
        stroke
      )
        .c-section-home-features__title-background
          base-raster(
            :scale="0.85"
            name="flag"
            class="c-section-home-features__title-raster"
          )

        span.c-section-home-features__title-text
          | Every little thing, that makes your

          br

          | workspace more fun & productive.

      base-feature-grid(
        :style="gridStyle"
        class="c-section-home-features__grid"
      )
        template(
          v-for="featureGroup, index in featureGroups"
          :slot="'line-' + (index + 1)"
        )
          base-feature(
            v-for="feature in featureGroup"
            :key="'feature_' + feature.icon"
            :icon="feature.icon"
            :title="feature.title"
            :label="feature.label"
          )

      .c-section-home-features__actions
        a.c-section-home-features__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            size="large"
            class="c-section-home-features__action-button"
            bolder
          )
            | Start with Prose today
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeFeatures",

  props: {
    gridPaddingSides: {
      type: String,
      default: "0px"
    }
  },

  data() {
    return {
      // --> DATA <--

      featureGroups: [
        [
          {
            icon: "lock",
            title: "Encrypt everything!",
            label:
              "All messages are end-to-end encrypted, even the chat history stored on the server."
          },

          {
            icon: "share",
            title: "Share image & files",
            label:
              "Send images to your co-workers. Transfer large files without limits."
          },

          {
            icon: "storage",
            title: "Unlimited chat history",
            label:
              "Go back in time. Your past chats are stored on your Prose server, and encrypted at rest."
          }
        ],

        [
          {
            icon: "plug",
            title: "Connect integrations",
            label:
              "Want to plug your other apps to Prose? Install community-made integrations."
          },

          {
            icon: "search",
            title: "Powerful search",
            label:
              "Quickly find anything you said, any file you sent, or anyone in your team."
          },

          {
            icon: "camera",
            title: "Audio & Video calls",
            label:
              "Organize one-to-one or large team-wide video calls, with screen-sharing."
          }
        ]
      ],

      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  },

  computed: {
    gridStyle() {
      return {
        paddingLeft: this.gridPaddingSides,
        paddingRight: this.gridPaddingSides
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-features";

.c-section-home-features {
  background-color: $color-background-secondary;
  padding-top: 72px;
  padding-bottom: 50px;

  #{$c}__title {
    position: relative;

    // Notice: this trick helps ensure that the spacing below the title does \
    //   not get too large on mobile devices, as more than 2 lines will be \
    //   occupied by the title. This is in part due to the flag raster beneath.
    max-height: 88px;

    #{$c}__title-background {
      line-height: 0;
      display: flex;
      justify-content: center;
      position: absolute;
      top: -35px;
      left: 0;
      right: 0;
      z-index: 0;
    }

    #{$c}__title-raster {
      transform: rotate(15deg);
    }

    #{$c}__title-text {
      position: relative;
      z-index: 1;
    }
  }

  #{$c}__grid {
    margin-top: 120px;
  }

  #{$c}__actions {
    text-align: center;
    margin-top: 74px;
  }
}
</style>
