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
      .c-section-home-main__illustration
        .c-section-home-main__illustration-screen
        .c-section-home-main__illustration-profile-right
        .c-section-home-main__illustration-rating
        .c-section-home-main__illustration-user-left
        .c-section-home-main__illustration-profile-top
        .c-section-home-main__illustration-user-right
        .c-section-home-main__illustration-message

  page-wrapper(
    class="c-section-home-main__wave-wrapper"
  )
    base-wave(
      class="c-section-home-main__wave"
      variant="5"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeMain",

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
  padding-bottom: 300px;

  #{$c}__inner {
    padding-top: ($page-header-height + $inner-padding-top-base);
  }

  #{$c}__illustration {
    position: relative;

    > div {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
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

  #{$c}__illustration-screen {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/app-screenshot.svg");
    margin-top: 64px;
    aspect-ratio: 1200 / 720.76;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    backdrop-filter: blur(16px);
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
  }

  #{$c}__illustration-profile-right {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/profile-right.svg");

    aspect-ratio: 253.87 / 329.57;
    width: 33%;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    right: -15%;
    bottom: -25%;
  }

  #{$c}__illustration-rating {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/bottom-rating.svg");
    aspect-ratio: 208.72 / 98;
    width: 30%;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    left: 20%;
    bottom: -15%;
  }

  #{$c}__illustration-user-left {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/user-left.svg");
    aspect-ratio: 270.51 / 62.79;
    width: 70%;
    transform: rotate(-12deg);
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    left: -28%;
    bottom: -7%;
  }

  #{$c}__illustration-profile-top {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/profile-top.svg");
    aspect-ratio: 208.72 / 196;
    width: 30%;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    left: -8%;
    top: -15%;
  }

  #{$c}__illustration-profile-top {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/profile-top.svg");
    aspect-ratio: 208.72 / 196;
    width: 30%;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    left: -8%;
    top: -15%;
  }

  #{$c}__illustration-user-right {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/user-right.svg");
    aspect-ratio: 270.51 / 62.79;
    width: 70%;
    transform: rotate(17deg);
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    right: -20%;
    top: -5%;
  }

  #{$c}__illustration-message {
    background-image: url("~/assets/images/components/section/home/SectionHomeMain/message.svg");
    aspect-ratio: 325.07 / 146;
    width: 50%;
    filter: drop-shadow(
      0px 27.2555px 72.6814px rgba(161, 157, 182, 0.21)
    ); /* TODO: commonize palette */
    position: absolute;
    left: -20%;
    top: 50%;
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
