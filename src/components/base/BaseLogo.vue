<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-logo(
  v-html="logoImagesHtml[tint][size]"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageLogoNormalSmall from "~/assets/images/components/base/BaseLogo/logo-normal-small.svg?raw";
import ImageLogoNormalLarge from "~/assets/images/components/base/BaseLogo/logo-normal-large.svg?raw";

import ImageLogoBlackOnLightSmall from "~/assets/images/components/base/BaseLogo/logo-black_on_light-small.svg?raw";
import ImageLogoBlackOnLightLarge from "~/assets/images/components/base/BaseLogo/logo-black_on_light-large.svg?raw";

import ImageLogoWhiteOnDarkSmall from "~/assets/images/components/base/BaseLogo/logo-white_on_dark-small.svg?raw";
import ImageLogoWhiteOnDarkLarge from "~/assets/images/components/base/BaseLogo/logo-white_on_dark-large.svg?raw";

export default {
  name: "BaseLogo",

  props: {
    tint: {
      type: String,
      default: "normal",

      validator(x) {
        return ["normal", "black", "white"].includes(x);
      }
    },

    size: {
      type: String,
      default: "large",

      validator(x) {
        return ["small", "large"].includes(x);
      }
    }
  },

  data() {
    return {
      // --> DATA <--

      logoImagesHtml: {
        normal: {
          small: ImageLogoNormalSmall,
          large: ImageLogoNormalLarge
        },

        black: {
          small: ImageLogoBlackOnLightSmall,
          large: ImageLogoBlackOnLightLarge
        },

        white: {
          small: ImageLogoWhiteOnDarkSmall,
          large: ImageLogoWhiteOnDarkLarge
        }
      }
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-logo";

.c-base-logo {
  height: 48px;

  svg {
    height: 100%;
    width: auto;
  }
}
</style>
