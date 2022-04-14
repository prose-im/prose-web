<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-main
    page-wrapper(
      class="c-section-home-main__inner"
    )
      .c-section-home-main__aside
        .c-section-home-main__app
          base-app-icon(
            :background-blend="0.4"
            size="130px"
            radius="26px"
            class="c-section-home-main__app-icon"
          )
            .c-section-home-main__app-alerts.u-medium
              | 4

          .c-section-home-main__app-screenshot

        .c-section-home-main__text
          h1.c-section-home-main__punchline
            span.c-section-home-main__title-primary.u-title.u-bold
              | Your business secrets

            image-title-secondary-cursive(
              class="c-section-home-main__title-secondary"
            )

          .c-section-home-main__pitch
            p.c-section-home-main__pitch-line
              | Prose is an app for all of your team chats, calls & files.

            p.c-section-home-main__pitch-line.u-bold
              | All of your workplace communication lives here.

          ul.c-section-home-main__points
            base-benefit(
              v-for="benefit, index in benefits"
              :key="'benefit_' + index"
              :icon="benefit.icon"
              :title="benefit.title"
              :label="benefit.label"
              class="c-section-home-main__point"
            )

        .c-section-home-main__background
          .c-section-home-main__nebula
            span.c-section-home-main__bubble
            span.c-section-home-main__bubble

      .c-section-home-main__actions
        //- TODO: scroll down to next section when clicking
        base-button(
          right-icon="arrow-down"
          tint="light"
          size="huge"
          class="c-section-home-main__action"
        )
          | Find out how Prose works
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageTitleSecondaryCursive from "~/assets/images/components/section/home/SectionHomeMain/title-secondary-cursive.svg?inline";

export default {
  name: "SectionHomeMain",

  components: { ImageTitleSecondaryCursive },

  data() {
    return {
      // --> DATA <--

      benefits: [
        {
          icon: "lock",
          title: "End-to-End Encrypted",
          label:
            "Confidently discuss private business with military-grade encryption."
        },

        {
          icon: "cloud",
          title: "Self-Hosted or Cloud",
          label:
            "Host Prose on your premises, or use our cloud service. You choose."
        },

        {
          icon: "arrow",
          title: "Messages, Calls and Files",
          label:
            "A native lightweight app for all your communication. Mobile & Desktop."
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-main";

// VARIABLES
$app-alerts-size: 54px;

.c-section-home-main {
  position: relative;

  #{$c}__inner {
    padding-top: ($page-header-height + 85px);
    padding-bottom: 40px;
  }

  #{$c}__aside {
    display: flex;

    #{$c}__app,
    #{$c}__text {
      width: 50%;
      flex: 1;
      position: relative;
      z-index: 1;
    }

    #{$c}__app {
      // TODO: fix blend mode which is too strong (should be bg white alpha=50%)
      mix-blend-mode: multiply;

      &,
      #{$c}__app-screenshot {
        height: 520px;
      }

      #{$c}__app-icon {
        background-color: $color-white;
        position: absolute;
        right: 80px;
        bottom: -32px;
        z-index: 1;
        box-shadow: 0 2px 6px 0 rgba($color-black, 0.04),
          0 4px 9px 0 rgba($color-black, 0.12);

        #{$c}__app-alerts {
          background-color: rgba(#e12424, 0.9);
          color: $color-white;
          font-size: 28px;
          line-height: ($app-alerts-size - 2px);
          letter-spacing: -0.23px;
          text-align: center;
          user-select: none;
          width: $app-alerts-size;
          height: $app-alerts-size;
          position: absolute;
          top: -8px;
          right: -8px;
          border-radius: 100%;
          box-shadow: 0 0 4px 0 rgba($color-black, 0.6);
        }
      }

      #{$c}__app-screenshot {
        background-color: rgba($color-white, 0.5);
        background-image: url("~/assets/images/components/section/home/SectionHomeMain/app-screenshot.webp");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 868px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 16px 80px 0 rgba($color-black, 0.12),
          0 0 3px 0 rgba($color-black, 0.36);
      }
    }

    #{$c}__text {
      padding-left: 100px;
    }
  }

  #{$c}__punchline {
    user-select: none;
    margin-top: -6px;

    #{$c}__title-primary,
    #{$c}__title-secondary {
      display: block;
    }

    #{$c}__title-primary {
      color: $color-base-blue-dark;
      font-size: 54px;
      line-height: 56px;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }

    #{$c}__title-secondary {
      fill: $color-base-blue-dark;
      fill-opacity: 0.8;
      width: auto;
      height: 118px;
      margin-top: -18px;
    }
  }

  #{$c}__pitch {
    margin-top: 36px;

    #{$c}__pitch-line {
      color: $color-black;
      font-size: 18.5px;
      line-height: 30px;
      letter-spacing: -0.14px;
      text-align: justify;
    }
  }

  #{$c}__points {
    margin-top: 46px;
  }

  #{$c}__point {
    margin-bottom: 23px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }
  }

  #{$c}__actions {
    text-align: center;
    margin-top: 120px;
    position: relative;
    z-index: 1;
  }

  #{$c}__background {
    z-index: 0;
    pointer-events: none;
    overflow: hidden;

    &,
    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &::before {
      content: "";
      background: rgba($color-white, 0.55);
      backdrop-filter: blur(50px);
      z-index: 1;
    }

    #{$c}__nebula {
      opacity: 0.375;

      #{$c}__bubble {
        &:nth-child(1),
        &:nth-child(2) {
          position: absolute;
          border-radius: 100%;
        }

        &:nth-child(1) {
          background-color: $color-base-pink-light;
          width: 90%;
          height: 1120px;
          top: 0;
          right: 0;
          transform: translate(45%, -70%);
        }

        &:nth-child(2) {
          background-color: $color-base-blue-light;
          width: 50%;
          height: 520px;
          bottom: 0;
          left: 0;
          transform: translate(-22%, 28%);
        }
      }
    }
  }
}

// TODO: only enable background effect if blur is supported
/* @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
  .backdrop-blur {
    background-color: rgba(255, 255, 255, .5);
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
} */
</style>
