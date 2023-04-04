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
import ImageMastodon from "~/assets/images/components/base/BaseSocialIcon/mastodon.svg?raw";
import ImageTwitter from "~/assets/images/components/base/BaseSocialIcon/twitter.svg?raw";
import ImageGitHub from "~/assets/images/components/base/BaseSocialIcon/github.svg?raw";

export default {
  name: "BaseSocialIcon",

  props: {
    platform: {
      type: String,
      default: null,

      validator(x) {
        return ["mastodon", "twitter", "github"].includes(x);
      }
    }
  },

  computed: {
    iconHtml() {
      switch (this.platform) {
        case "mastodon": {
          return ImageMastodon;
        }

        case "twitter": {
          return ImageTwitter;
        }

        case "github": {
          return ImageGitHub;
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

.c-base-social-icon {
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
