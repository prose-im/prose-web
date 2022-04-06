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
      "c-base-raster",
      "c-base-raster--" + name
    ]`
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseRaster",

  props: {
    name: {
      type: String,
      required: true,

      validator(x) {
        return [
          "bell",
          "bubble",
          "buoy",
          "clock",
          "coin",
          "cup",
          "earth",
          "flag",
          "folder",
          "globe",
          "laptop",
          "lock",
          "magnifier",
          "piggy",
          "plane",
          "shield",
          "stickies",
          "target"
        ].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-raster";

// VARIABLES
$rasters: (
  "bell": 284 280,
  "bubble": 150 150,
  "buoy": 99 98,
  "clock": 120 139,
  "coin": 261 324,
  "cup": 203 234,
  "earth": 99 98,
  "flag": 138 231,
  "folder": 256 312,
  "globe": 318 418,
  "laptop": 442 253,
  "lock": 57 86,
  "magnifier": 239 212,
  "piggy": 82 80,
  "plane": 262 154,
  "shield": 200 224,
  "stickies": 120 127,
  "target": 98 98
);

// MIXINS
@mixin raster-rules($name, $width, $height) {
  background-image: url("~/assets/images/components/base/BaseRaster/#{$name}.webp");
  width: ($width + px);
  height: ($height + px);
}

.c-base-raster {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;

  // --> NAMES <--

  @each $name, $sizes in $rasters {
    &--#{$name} {
      @include raster-rules($name, nth($sizes, 1), nth($sizes, 2));
    }
  }
}
</style>
