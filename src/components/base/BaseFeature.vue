<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-feature
  .c-base-feature__icon-wrap(
    v-if="iconHtml"
  )
    .c-base-feature__icon
      span.c-base-feature__icon-image(
        v-html="iconHtml"
      )

  h6.c-base-feature__title.u-title.u-medium
    | {{ title }}

  p.c-base-feature__label(
    v-if="label"
  )
    | {{ label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconStorage from "~/assets/images/components/base/BaseFeature/icon-storage.svg?raw";
import ImageIconCamera from "~/assets/images/components/base/BaseFeature/icon-camera.svg?raw";
import ImageIconLock from "~/assets/images/components/base/BaseFeature/icon-lock.svg?raw";
import ImageIconPlug from "~/assets/images/components/base/BaseFeature/icon-plug.svg?raw";
import ImageIconSearch from "~/assets/images/components/base/BaseFeature/icon-search.svg?raw";
import ImageIconShare from "~/assets/images/components/base/BaseFeature/icon-share.svg?raw";

// CONSTANTS
const ICONS = {
  storage: ImageIconStorage,
  camera: ImageIconCamera,
  lock: ImageIconLock,
  plug: ImageIconPlug,
  search: ImageIconSearch,
  share: ImageIconShare
};

export default {
  name: "BaseFeature",

  props: {
    title: {
      type: String,
      required: true
    },

    label: {
      type: String,
      default: null
    },

    icon: {
      type: String,
      default: null,

      validator(x) {
        return Object.keys(ICONS).includes(x);
      }
    }
  },

  computed: {
    iconHtml() {
      return (this.icon ? ICONS[this.icon] : null) || null;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-feature";

// VARIABLES
$icon-size: 52px;

.c-base-feature {
  #{$c}__icon-wrap {
    display: flex;
    justify-content: flex-start;
  }

  #{$c}__icon {
    background-color: $color-white;
    border: 1.5px solid rgba($color-base-blue-dark, 0.1);
    width: $icon-size;
    height: $icon-size;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    #{$c}__icon-image {
      fill: $color-base-blue-dark;
      line-height: 0;

      svg {
        width: auto;
        height: 22px;
      }
    }
  }

  #{$c}__title {
    color: $color-base-blue-dark;
    font-size: 18px;
    letter-spacing: -0.16px;
    line-height: 22px;
  }

  #{$c}__label {
    color: $color-black;
    font-size: 15px;
    letter-spacing: -0.13px;
    line-height: 22px;
    margin-top: 14px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-base-feature {
    text-align: center;

    #{$c}__icon-wrap {
      justify-content: center;
    }
  }
}
</style>
