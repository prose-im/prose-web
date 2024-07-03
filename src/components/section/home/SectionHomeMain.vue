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
      v-slot:title
    )
      | A New Dawn in Team Messaging

    template(
      v-slot:description
    )
      p.c-section-home-main__description
        | Prose is a distributed, open-source, and native

        br

        | platform for workplace communication.

      p.c-section-home-main__engine
        | Powered by

        base-space

        image-engine-xmpp(
          class="c-section-home-main__engine-icon"
        )

        base-space

        a.u-medium(
          :href="$config.public.url.xmpp_web"
          target="_blank"
        )
          | XMPP

      .c-section-home-main__showcase
        .c-section-home-main__application
          .c-section-home-main__application-contents

          image-application-layout(
            class="c-section-home-main__application-layout"
          )

        base-parallax(
          v-for="{id, speed} in illustrations"
          :key="'illustration_' + id"
          :speed="speed"
          :class=`[
            "c-section-home-main__illustration",
            "c-section-home-main__illustration--" + id
          ]`
        )
          .c-section-home-main__illustration-inner

    template(
      v-slot:waves
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
import ImageEngineXmpp from "@/assets/images/components/section/home/SectionHomeMain/engine-xmpp.svg?component";
import ImageApplicationLayout from "@/assets/images/components/section/home/SectionHomeMain/application-layout.svg?component";

export default {
  name: "SectionHomeMain",

  components: {
    ImageEngineXmpp,
    ImageApplicationLayout
  },

  data() {
    return {
      illustrations: [
        { id: "message", speed: 0.4 },
        { id: "attachment-blue", speed: 0.3 },
        { id: "lewis", speed: -0.6 },
        { id: "attachment-purple", speed: 0.5 },
        { id: "identity", speed: -0.3 },
        { id: "julia", speed: -0.3 },
        { id: "liz", speed: 0.2 }
      ]
    };
  },

  computed: {
    hasAnnouncement() {
      return this.$config.public.modifiers.announcement === true;
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

#{$c} {
  padding-bottom: 260px;

  #{$c}__inner {
    padding-top: ($page-header-height + $inner-padding-top-base);
  }

  #{$c}__description {
    font-size: 20px;
    line-height: 30px;
  }

  #{$c}__engine {
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;

    a {
      color: $color-base-black-mid;

      &:hover {
        color: darken($color-base-blue-mid, 6%);
      }
    }

    #{$c}__engine-icon {
      vertical-align: middle;
      height: 20px;
      margin-top: -4px;
      margin-left: 4px;
      display: inline-block;
    }
  }

  #{$c}__showcase {
    position: relative;
    margin-top: 64px;
  }

  #{$c}__application,
  #{$c}__illustration {
    display: block;
  }

  #{$c}__application #{$c}__application-contents,
  #{$c}__application #{$c}__application-layout,
  #{$c}__illustration {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  #{$c}__application {
    background-color: rgba(#f6f7fb, 0.8);
    outline: 1px solid rgba($color-black, 0.1);
    aspect-ratio: 1200 / 780;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    backdrop-filter: blur(40px);
    box-shadow: 0 4px 12px rgba($color-black, 0.035),
      inset 0px 0.5px 1px #ffffff;

    #{$c}__application-contents {
      background-image: url("@/assets/images/components/section/home/SectionHomeMain/application-contents.webp");
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    #{$c}__application-layout {
      width: 100%;
      height: auto;
    }
  }

  #{$c}__illustration {
    &-inner {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &--identity {
      aspect-ratio: 162 / 170;
      width: 17%;
      position: absolute;
      right: -5%;
      bottom: 13%;
      filter: drop-shadow(0px 20px 8px #81899b29);

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-identity.svg");
        animation: 1s scale 0.7s ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--attachment-blue {
      aspect-ratio: 1 / 1;
      width: 12%;
      position: absolute;
      right: 35%;
      bottom: -5%;
      filter: drop-shadow(0px 20px 12px rgba(81, 142, 234, 0.34));

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-attachment-blue.svg");
        animation: 1s scale 0.6s ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--attachment-purple {
      aspect-ratio: 1 / 1;
      width: 15%;
      position: absolute;
      left: 9%;
      top: -7%;
      filter: drop-shadow(0px 28px 16px rgba(100, 78, 180, 0.34));

      #{$c}__illustration-inner {
        width: 100%;
        height: 100%;
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-attachment-purple.svg");
        animation: 1s scale ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--lewis {
      aspect-ratio: 270.59 / 66;
      width: 23%;
      position: absolute;
      left: -6%;
      bottom: 9%;
      filter: drop-shadow(0px 14px 8px #81899b29);

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-lewis.svg");
        animation: 1s scale 0.9s ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--julia {
      aspect-ratio: 1 / 1;
      width: 7%;
      position: absolute;
      left: 58%;
      top: 46%;
      z-index: 1;
      filter: drop-shadow(0px 14px 10px rgba(246, 112, 134, 0.34));

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-julia.webp");
        animation: 1s scale 0.3s ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--liz {
      aspect-ratio: 1 / 1;
      width: 18%;
      position: absolute;
      left: 58%;
      top: 25%;
      filter: drop-shadow(0px 32px 24px rgba(88, 154, 246, 0.5));

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-liz.webp");
        animation: 1s scale 0.1s ease-in-out forwards;
        transform: scale(0);
      }
    }

    &--message {
      aspect-ratio: 271 / 82.45;
      width: 23%;
      position: absolute;
      left: 69%;
      top: 22%;
      z-index: 1;
      filter: drop-shadow(0px 20px 8px #81899b29);
      transform-origin: bottom left;

      #{$c}__illustration-inner {
        background-image: url("@/assets/images/components/section/home/SectionHomeMain/illustration-message.svg");
        animation: 1s scale 0.5s ease-in-out forwards;
        transform: scale(0);
      }
    }
  }

  #{$c}__wave {
    height: 1040px;
    position: absolute;
    bottom: -2%;
    left: 0;
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

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__description {
      font-size: 16px;
      line-height: 24px;
    }

    #{$c}__engine {
      font-size: 15px;
      line-height: 22px;

      #{$c}__engine-icon {
        height: 18px;
      }
    }

    #{$c}__application {
      border-radius: 4px;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    padding-bottom: 100px;
  }
}

// --> KEYFRAMES <--

@keyframes scale {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
