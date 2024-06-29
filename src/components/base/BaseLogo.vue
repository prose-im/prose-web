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
    "c-base-logo",
    "c-base-logo--" + size,
    "c-base-logo--" + tint
  ]`
  :style="logoStyle"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageLogoPath from "@/assets/images/components/base/BaseLogo/logo-path.svg?url_encode";

export default {
  name: "BaseLogo",

  props: {
    size: {
      type: String,
      default: "medium",

      validator(x) {
        return ["tiny", "small", "medium", "large"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "normal",

      validator(x) {
        return ["normal", "black", "white"].includes(x);
      }
    }
  },

  computed: {
    logoStyle() {
      return {
        "--mask-image": `url("${ImageLogoPath}")`
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-logo";

// VARIABLES
$size-ratio: calc(28 / 104);

$size-widths: (
  "tiny": 80px,
  "small": 88px,
  "medium": 96px,
  "large": 104px
);

#{$c} {
  @include mask-image-raw(var(--mask-image));
  @include mask-repeat(no-repeat);
  @include mask-size(contain);
  @include mask-position(left);

  width: 104px;
  height: 28px;
  display: block;

  // --> SIZE <--

  @each $size, $width in $size-widths {
    &--#{$size} {
      width: $width;
      height: round($width * $size-ratio);
    }
  }

  // --> TINTS <--

  &--normal {
    background-color: $color-base-purple-mid;
    background-image: url("@/assets/images/components/base/BaseLogo/logo-tint-normal.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
  }

  &--black {
    background-color: $color-base-black-mid;
  }

  &--white {
    background-color: $color-white;
  }
}
</style>
