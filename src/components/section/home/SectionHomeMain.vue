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
      "c-section-home-main",
      {
        "c-section-home-main--announcement": hasAnnouncement
      }
    ]`
  )
    page-wrapper(
      class="c-section-home-main__inner"
    )
      .c-section-home-main__aside
        .c-section-home-main__app
          base-app-icon(
            :background-blend="0.35"
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
        base-button(
          @click="onNextClick"
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
  },

  computed: {
    hasAnnouncement() {
      return this.$config.modifiers.announcement === true;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when next button is clicked
     * @public
     * @return {undefined}
     */
    onNextClick() {
      this.$emit("action", "next");
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-main";

// VARIABLES
$inner-padding-top-base: 85px;

$app-alerts-size: 54px;
$app-icon-bounce-duration: 750ms;
$app-icon-bounce-iterations: 1;
$app-screenshot-appear-before-duration: 150ms;

.c-section-home-main {
  position: relative;

  #{$c}__inner {
    padding-top: ($page-header-height + $inner-padding-top-base);
    padding-bottom: 40px;
  }

  #{$c}__aside {
    display: flex;

    #{$c}__app,
    #{$c}__text {
      flex: 0.5;
      position: relative;
      z-index: 1;
    }

    #{$c}__app {
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
        animation-name: bounce;
        animation-duration: $app-icon-bounce-duration;
        animation-iteration-count: $app-icon-bounce-iterations;
        animation-timing-function: ease;
        animation-fill-mode: forwards;

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
          animation-name: fadeIn;
          animation-duration: 50ms;
          animation-fill-mode: both;

          animation-delay: (
            ($app-icon-bounce-iterations * $app-icon-bounce-duration) -
              $app-screenshot-appear-before-duration
          );
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
        animation-name: zoomIn;
        animation-duration: 400ms;
        animation-fill-mode: both;

        animation-delay: (
          ($app-icon-bounce-iterations * $app-icon-bounce-duration) -
            $app-screenshot-appear-before-duration
        );
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
      margin-top: -20px;
    }
  }

  #{$c}__pitch {
    margin-top: 38px;

    #{$c}__pitch-line {
      color: $color-black;
      font-size: 18.5px;
      line-height: 30px;
      letter-spacing: -0.14px;
      text-align: justify;
    }
  }

  #{$c}__points {
    margin-top: 48px;
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
    margin-top: 114px;
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
      background: rgba($color-white, 0.6);
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

  // --> BOOLEANS <--

  &--announcement {
    #{$c}__inner {
      padding-top: (
        $page-header-height + $page-header-announcement-height +
          $inner-padding-top-base
      );
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: 1060px) {
  .c-section-home-main {
    #{$c}__aside {
      #{$c}__text {
        padding-left: 70px;
      }
    }
  }
}

@media (max-width: 1020px) {
  .c-section-home-main {
    #{$c}__aside {
      #{$c}__text {
        padding-left: 60px;
      }
    }

    #{$c}__punchline {
      #{$c}__title-primary {
        font-size: 48px;
        line-height: 52px;
        letter-spacing: -0.4px;
      }

      #{$c}__title-secondary {
        height: 106px;
      }
    }

    #{$c}__pitch {
      #{$c}__pitch-line {
        font-size: 17px;
        line-height: 27px;
      }
    }
  }
}

@media (max-width: 920px) {
  .c-section-home-main {
    #{$c}__aside {
      #{$c}__app {
        flex: 0.4;
      }

      #{$c}__text {
        flex: 0.6;
      }
    }
  }
}

@media (max-width: 840px) {
  .c-section-home-main {
    #{$c}__aside {
      #{$c}__app {
        flex: 0.3;
      }

      #{$c}__text {
        flex: 0.7;
      }
    }
  }
}

@media (max-width: 760px) {
  .c-section-home-main {
    #{$c}__aside {
      #{$c}__app {
        display: none;
      }

      #{$c}__text {
        padding-left: 0;
        flex: 1;
      }
    }

    #{$c}__punchline {
      text-align: center;

      #{$c}__title-primary {
        margin-top: -20px;
        padding-left: 20px;
        padding-right: 20px;
      }

      #{$c}__title-secondary {
        margin-top: -15px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    #{$c}__pitch {
      margin-top: 30px;

      #{$c}__pitch-line {
        text-align: center;
      }
    }

    #{$c}__points {
      margin-top: 76px;
      display: flex;

      #{$c}__point {
        margin-bottom: 0;
        margin-right: 24px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    #{$c}__actions {
      margin-top: 86px;
    }
  }
}

@media (max-width: 520px) {
  .c-section-home-main {
    #{$c}__punchline {
      #{$c}__title-primary {
        font-size: 40px;
        line-height: 44px;
        letter-spacing: -0.3px;
        margin-top: -40px;
        padding-left: 0;
        padding-right: 0;
      }

      #{$c}__title-secondary {
        height: 94px;
        margin-top: -14px;
      }
    }

    #{$c}__pitch {
      #{$c}__pitch-line {
        font-size: 16px;
        line-height: 25px;
      }
    }

    #{$c}__points {
      margin-top: 54px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;

      #{$c}__point {
        margin-right: 0;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    #{$c}__actions {
      margin-top: 60px;
    }
  }
}

@media (max-width: 420px) {
  .c-section-home-main {
    #{$c}__points {
      padding: 0 12px;
    }
  }
}

@media (max-width: 400px) {
  .c-section-home-main {
    #{$c}__points {
      padding: 0 6px;
    }
  }
}

// --> SUPPORTS <--

@supports not (backdrop-filter: blur(1px)) {
  .c-section-home-main {
    #{$c}__background {
      // Notice: disable background if no support for 'backdrop-filter', \
      //   otherwise its quite ugly.
      display: none;
    }
  }
}

@supports (-moz-appearance: none) {
  .c-section-home-main {
    #{$c}__background {
      // Hack: disable 'backdrop-filter' on background if Firefox, as Firefox \
      //   currently does not support this property, even if it announces that \
      //   it '@supports' it (is that a bug?). This is as of Firefox 99, and \
      //   might get fixed in future versions.
      display: none;
    }
  }
}

// --> KEYFRAMES <--

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  65% {
    transform: translateY(-15%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale3d(0.8, 0.8, 0.8);
  }

  50%,
  100% {
    opacity: 1;
  }
}
</style>
