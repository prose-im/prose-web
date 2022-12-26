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
  page-main-title(
    class="c-section-home-main__inner"
  )
    template(
      slot="title"
    )
      | Communicate without insecurity

    template(
      slot="description"
    )
      .c-section-home-main__showcase
        .c-section-home-main__application
          .c-section-home-main__application-contents

          image-application-layout(
            class="c-section-home-main__application-layout"
          )

        span(
          v-for="(illustration, index) in illustrations"
          :key="'illustration_' + index"
          :class=`[
            "c-section-home-main__illustration",
            "c-section-home-main__illustration--" + illustration
          ]`
        )

  page-wrapper(
    class="c-section-home-main__wave-wrapper"
  )
    base-wave(
      :variant="5"
      class="c-section-home-main__wave"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageApplicationLayout from "~/assets/images/components/section/home/SectionHomeMain/application-layout.svg?inline";

export default {
  name: "SectionHomeMain",

  components: {
    ImageApplicationLayout
  },

  data() {
    return {
      illustrations: [
        "profile-right",
        "rating",
        "user-left",
        "profile-top",
        "user-right",
        "message"
      ]
    };
  },

  computed: {
    hasAnnouncement() {
      return this.$config.modifiers.announcement === true;
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
$inner-padding-top-base: 74px;

.c-section-home-main {
  padding-bottom: 260px;

  #{$c}__inner {
    padding-top: ($page-header-height + $inner-padding-top-base);
  }

  #{$c}__showcase {
    position: relative;
    margin-top: 64px;
  }

  #{$c}__application,
  #{$c}__illustration {
    display: block;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba($color-base-purple-light, 0.21)
    );
  }

  #{$c}__application #{$c}__application-contents,
  #{$c}__application #{$c}__application-layout,
  #{$c}__illustration {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #{$c}__application {
    background-color: rgba($color-white, 0.85);
    aspect-ratio: 1200 / 720;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    backdrop-filter: blur(16px);

    #{$c}__application-contents {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/application-contents.webp");
      position: absolute;
      top: 1.9%;
      bottom: 1.15%;
      left: 0.85%;
      right: 0;
    }

    #{$c}__application-layout {
      width: 100%;
      height: auto;
    }
  }

  #{$c}__illustration {
    &--profile-right {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-profile-right.svg");

      aspect-ratio: 253.87 / 329.57;
      width: 33%;
      position: absolute;
      right: -15%;
      bottom: -25%;
    }

    &--rating {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-bottom-rating.svg");
      aspect-ratio: 208.72 / 98;
      width: 30%;
      position: absolute;
      left: 20%;
      bottom: -15%;
    }

    &--user-left {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-user-left.svg");
      aspect-ratio: 270.51 / 62.79;
      width: 70%;
      transform: rotate(-12deg);
      position: absolute;
      left: -28%;
      bottom: -7%;
    }

    &--profile-top {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-profile-top.svg");
      aspect-ratio: 208.72 / 196;
      width: 30%;
      position: absolute;
      left: -8%;
      top: -15%;
    }

    &--profile-top {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-profile-top.svg");
      aspect-ratio: 208.72 / 196;
      width: 30%;
      position: absolute;
      left: -8%;
      top: -15%;
    }

    &--user-right {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-user-right.svg");
      aspect-ratio: 270.51 / 62.79;
      width: 70%;
      transform: rotate(17deg);
      position: absolute;
      right: -20%;
      top: -5%;
    }

    &--message {
      background-image: url("~/assets/images/components/section/home/SectionHomeMain/illustration-message.svg");
      aspect-ratio: 325.07 / 146;
      width: 50%;
      position: absolute;
      left: -20%;
      top: 50%;
    }
  }

  #{$c}__wave-wrapper {
    position: relative;

    #{$c}__wave {
      height: 1040px;
      position: absolute;
      bottom: -2%;
      left: 0;
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

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-section-home-main {
    padding-bottom: 100px;
  }
}
</style>
