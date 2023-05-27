<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-wave(
  v-if="imageSource"
)
  img(
    :src="imageSource"
    alt=""
    class="c-base-wave__image"
  )

.c-base-wave(
  v-else
  v-html="imageHtml"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import Base64 from "Base64";

// PROJECT: IMAGES
import ImageVariant1 from "~/assets/images/components/base/BaseWave/variant-1.svg?raw";
import ImageVariant2 from "~/assets/images/components/base/BaseWave/variant-2.svg?raw";
import ImageVariant3 from "~/assets/images/components/base/BaseWave/variant-3.svg?raw";
import ImageVariant4 from "~/assets/images/components/base/BaseWave/variant-4.svg?raw";
import ImageVariant5 from "~/assets/images/components/base/BaseWave/variant-5.svg?raw";
import ImageVariant6 from "~/assets/images/components/base/BaseWave/variant-6.svg?raw";
import ImageVariant7 from "~/assets/images/components/base/BaseWave/variant-7.svg?raw";

// CONSTANTS
const VARIANTS = [
  ImageVariant1,
  ImageVariant2,
  ImageVariant3,
  ImageVariant4,
  ImageVariant5,
  ImageVariant6,
  ImageVariant7
];

export default {
  name: "BaseWave",

  props: {
    variant: {
      type: Number,
      required: true,

      validator(x) {
        return x > 0 && x <= VARIANTS.length;
      }
    },

    image: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    imageHtml() {
      // Return as bare HTML? (ie. raw SVG content)
      if (this.image !== true) {
        return VARIANTS[this.variant - 1] || null;
      }

      return null;
    },

    imageSource() {
      // Encode as image?
      // Notice: this is typically used in environment where the parent crops \
      //   the contained wave image.
      if (this.image === true) {
        const _source = VARIANTS[this.variant - 1] || null;

        if (_source !== null) {
          return `data:image/svg+xml;base64,${Base64.btoa(_source)}`;
        }
      }

      return null;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-wave";

.c-base-wave {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  pointer-events: none;
  width: 100%;
  opacity: 0.7;
  overflow: hidden;

  #{$c}__image {
    width: 100%;
    height: auto;
  }
}
</style>
