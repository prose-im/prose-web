<!--
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span.c-base-social-icon(
  v-html="iconHtml"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageX from "@/assets/images/components/base/BaseSocialIcon/x.svg?raw";
import ImageMastodon from "@/assets/images/components/base/BaseSocialIcon/mastodon.svg?raw";
import ImageGitHub from "@/assets/images/components/base/BaseSocialIcon/github.svg?raw";
import ImageYouTube from "@/assets/images/components/base/BaseSocialIcon/youtube.svg?raw";
import ImageXMPP from "@/assets/images/components/base/BaseSocialIcon/xmpp.svg?raw";

export default {
  name: "BaseSocialIcon",

  props: {
    platform: {
      type: String,
      default: null,

      validator(x) {
        return ["x", "mastodon", "github", "youtube", "xmpp"].includes(x);
      }
    }
  },

  computed: {
    iconHtml() {
      switch (this.platform) {
        case "x": {
          return ImageX;
        }

        case "mastodon": {
          return ImageMastodon;
        }

        case "github": {
          return ImageGitHub;
        }

        case "youtube": {
          return ImageYouTube;
        }

        case "xmpp": {
          return ImageXMPP;
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
$c: ".c-base-social-icon";

// VARIABLES
$icon-size-default: 24px;

#{$c} {
  height: $icon-size-default;
  width: $icon-size-default;
  display: inline-block;

  svg {
    fill: inherit;
    height: 100%;
    width: 100%;
  }
}
</style>
