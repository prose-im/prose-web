<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
li.c-base-benefit
  span.c-base-benefit__icon(
    v-if="iconHtml"
    v-html="iconHtml"
  )

  span.c-base-benefit__text
    span.c-base-benefit__title.u-medium
      | {{ title }}

    span.c-base-benefit__label
      | {{ label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconArrow from "~/assets/images/components/base/BaseBenefit/icon-arrow.svg?raw";
import ImageIconCloud from "~/assets/images/components/base/BaseBenefit/icon-cloud.svg?raw";
import ImageIconLock from "~/assets/images/components/base/BaseBenefit/icon-lock.svg?raw";

export default {
  name: "BaseBenefit",

  props: {
    title: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      default: null,

      validator(x) {
        return ["lock", "cloud", "arrow"].includes(x);
      }
    }
  },

  computed: {
    iconHtml() {
      switch (this.icon) {
        case "arrow": {
          return ImageIconArrow;
        }

        case "cloud": {
          return ImageIconCloud;
        }

        case "lock": {
          return ImageIconLock;
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
$c: ".c-base-benefit";

.c-base-benefit {
  display: flex;
  align-items: center;

  #{$c}__icon {
    fill: $color-base-green-mid;
    line-height: 0;
    margin-right: 10px;
    flex: 0 0 auto;

    svg {
      width: auto;
      height: 28px;

      path {
        stroke: $color-base-green-mid;
      }
    }
  }

  #{$c}__text {
    flex: 1;
  }

  #{$c}__title,
  #{$c}__label {
    line-height: 16px;
    display: block;
  }

  #{$c}__title {
    color: $color-base-green-mid;
    font-size: 15px;
  }

  #{$c}__label {
    color: darken($color-base-grey-dark, 15%);
    font-size: 13.5px;
    margin-top: 6px;
  }
}
</style>
