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
    "c-base-sine",
    "c-base-sine--" + color
  ]`
)
  .c-base-sine__content(
    v-html="sineHtml"
  )

  slot
</template>

<!-- **********************************************************************
             SCRIPT
             ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageColorBlue from "~/assets/images/components/base/BaseSine/color-blue.svg?raw";
import ImageColorPurple from "~/assets/images/components/base/BaseSine/color-purple.svg?raw";
import ImageColorPink from "~/assets/images/components/base/BaseSine/color-pink.svg?raw";
import ImageColorNavy from "~/assets/images/components/base/BaseSine/color-navy.svg?raw";

export default {
  name: "BaseSine",

  props: {
    color: {
      type: String,
      default: "blue",

      validator(x) {
        return ["blue", "pink", "purple", "navy"].includes(x);
      }
    }
  },

  computed: {
    sineHtml() {
      switch (this.color) {
        case "blue": {
          return ImageColorBlue;
        }

        case "purple": {
          return ImageColorPurple;
        }

        case "pink": {
          return ImageColorPink;
        }

        case "navy": {
          return ImageColorNavy;
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
             STYLE
             ********************************************************************** -->

<style lang="scss">
$c: ".c-base-sine";

#{$c} {
  position: relative;

  #{$c}__content {
    position: relative;
    width: 100%;
    aspect-ratio: 2.5 / 1;
    overflow: hidden;
    border-radius: 32px;

    svg {
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;

      path {
        stroke-dasharray: 2400;
        stroke-dashoffset: 2400;
        pointer-events: none;
        animation: revealSine 1.5s ease-out forwards;
      }
    }
  }

  // --> COLORS <--

  &--pink {
    #{$c}__content {
      background-color: $color-base-pink-light;
    }
  }

  &--blue {
    #{$c}__content {
      background-color: $color-base-blue-mid;
    }
  }

  &--purple {
    #{$c}__content {
      background-color: $color-base-purple-mid;
    }
  }

  &--navy {
    #{$c}__content {
      background-color: $color-base-blue-dark;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__content {
      border-radius: 16px;
      aspect-ratio: 1.1 / 1;

      svg {
        position: absolute;
        z-index: 0;
        bottom: 0;
        top: auto;
        right: 0;
      }
    }
  }
}

// --> KEYFRAMES <--

@keyframes revealSine {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
