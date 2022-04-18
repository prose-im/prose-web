<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  span(
    :class=`[
      "c-base-surround",
      "c-base-surround--" + tint,
      "c-base-surround--" + size
    ]`
  )
    span.c-base-surround__image(
      v-if="imageHtml"
      v-html="imageHtml"
      :style="imageStyle"
    )

    span.c-base-surround__inner
      slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageVariant1 from "~/assets/images/components/base/BaseSurround/variant-1.svg?raw";
import ImageVariant2 from "~/assets/images/components/base/BaseSurround/variant-2.svg?raw";

// CONSTANTS
const VARIANTS = [ImageVariant1, ImageVariant2];

export default {
  name: "BaseSurround",

  props: {
    variant: {
      type: Number,
      required: true,

      validator(x) {
        return x > 0 && x <= VARIANTS.length;
      }
    },

    tint: {
      type: String,
      default: "black",

      validator(x) {
        return ["black", "white", "pink"].includes(x);
      }
    },

    size: {
      type: String,
      default: "normal",

      validator(x) {
        return ["small", "normal", "large"].includes(x);
      }
    },

    blend: {
      type: Number,
      default: 1.0,

      validator(x) {
        return x >= 0.0 && x <= 1.0;
      }
    }
  },

  computed: {
    imageHtml() {
      return VARIANTS[this.variant - 1] || null;
    },

    imageStyle() {
      return {
        opacity: this.blend
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-surround";

// VARIABLES
$sizes: (
  small: (
    3px 12px
  ),
  normal: (
    5px 20px
  ),
  large: (
    7px 26px
  )
);

.c-base-surround {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  position: relative;

  #{$c}__image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  #{$c}__inner {
    position: relative;
    z-index: 1;
  }

  // --> TINTS <--

  &--black {
    #{$c}__image {
      fill: $color-black;
    }
  }

  &--white {
    #{$c}__image {
      fill: $color-white;
    }
  }

  &--pink {
    #{$c}__image {
      fill: $color-base-pink-light;
    }
  }

  // --> SIZES <--

  @each $name, $size in $sizes {
    &--#{$name} {
      margin: (-1 * nth($size, 1)) 0;
      padding: nth($size, 1) nth($size, 2);
    }
  }
}
</style>
