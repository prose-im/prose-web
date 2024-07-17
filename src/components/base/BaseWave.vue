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
  v-html="imageHtml"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageVariant1 from "@/assets/images/components/base/BaseWave/variant-1.svg?raw";
import ImageVariant2 from "@/assets/images/components/base/BaseWave/variant-2.svg?raw";
import ImageVariant3 from "@/assets/images/components/base/BaseWave/variant-3.svg?raw";
import ImageVariant4 from "@/assets/images/components/base/BaseWave/variant-4.svg?raw";
import ImageVariant5 from "@/assets/images/components/base/BaseWave/variant-5.svg?raw";
import ImageVariant6 from "@/assets/images/components/base/BaseWave/variant-6.svg?raw";
import ImageVariant7 from "@/assets/images/components/base/BaseWave/variant-7.svg?raw";
import ImageVariant8 from "@/assets/images/components/base/BaseWave/variant-8.svg?raw";

// CONSTANTS
const VARIANTS = [
  ImageVariant1,
  ImageVariant2,
  ImageVariant3,
  ImageVariant4,
  ImageVariant5,
  ImageVariant6,
  ImageVariant7,
  ImageVariant8
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
    }
  },

  computed: {
    imageHtml() {
      return VARIANTS[this.variant - 1] || null;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-wave";

#{$c} {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  pointer-events: none;
  width: 100%;
  opacity: 0.7;
  overflow: hidden;
}
</style>
