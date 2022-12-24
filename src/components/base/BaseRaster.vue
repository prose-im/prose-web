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
  :style="'width: ' + width + 'px; height: ' + height + 'px'"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const RASTERS = {
  bell: [284, 280],
  bubble: [150, 150],
  buoy: [99, 98],
  clock: [120, 139],
  coin: [261, 324],
  cup: [203, 234],
  earth: [99, 98],
  flag: [138, 231],
  folder: [256, 312],
  globe: [318, 418],
  laptop: [442, 253],
  lock: [57, 86],
  magnifier: [239, 212],
  piggy: [82, 80],
  plane: [262, 154],
  shield: [200, 224],
  stickies: [120, 127],
  target: [98, 98]
};

export default {
  name: "BaseRaster",

  props: {
    name: {
      type: String,
      required: true,

      validator(x) {
        return Object.keys(RASTERS).includes(x);
      }
    },

    scale: {
      type: Number,
      default: 1.0,

      validator(x) {
        return x > 0.0;
      }
    }
  },

  computed: {
    scaledSize() {
      const _baseSize = RASTERS[this.name] || [];

      // Generate base scaled size
      // Important: copy values
      const _scaledSize = [_baseSize[0] || 0, _baseSize[1] || 0];

      // Apply scale factor? (if any)
      // Notice: round up to the lowest, as we want to avoid any sub-pixel \
      //   floats in our CSS.
      if (this.scale !== 1.0) {
        _scaledSize[0] = Math.floor(_scaledSize[0] * this.scale);
        _scaledSize[1] = Math.floor(_scaledSize[1] * this.scale);
      }

      return _scaledSize;
    },

    width() {
      return this.scaledSize[0];
    },

    height() {
      return this.scaledSize[1];
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
  bell,
  bubble,
  buoy,
  clock,
  coin,
  cup,
  earth,
  flag,
  folder,
  globe,
  laptop,
  lock,
  magnifier,
  piggy,
  plane,
  shield,
  stickies,
  target
);

.c-base-raster {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;

  // --> NAMES <--

  @each $name, $sizes in $rasters {
    &--#{$name} {
      background-image: url("~/assets/images/components/base/BaseRaster/#{$name}.webp");
    }
  }
}
</style>
