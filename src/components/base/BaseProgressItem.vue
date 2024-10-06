<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-progress-item",
    {
      "c-base-progress-item--ongoing": ongoing,
      "c-base-progress-item--elapsed": elapsed,
      "c-base-progress-item--finished": finished
    }
  ]`
)
  span.c-base-progress-item__icon(
    v-if="iconHtml"
    v-html="iconHtml"
  )

  span.c-base-progress-item__label.u-medium.u-ellipsis(
    v-if="label"
  )
    | {{ label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconProgress from "@/assets/images/components/base/BaseProgressItem/icon-progress.svg?raw";
import ImageIconAccount from "@/assets/images/components/base/BaseProgressItem/icon-account.svg?raw";
import ImageIconActivate from "@/assets/images/components/base/BaseProgressItem/icon-activate.svg?raw";
import ImageIconFinished from "@/assets/images/components/base/BaseProgressItem/icon-finished.svg?raw";
import ImageIconDone from "@/assets/images/components/base/BaseProgressItem/icon-done.svg?raw";

export default {
  name: "BaseProgressItem",

  props: {
    label: {
      type: String,
      default: null
    },

    icon: {
      type: String,
      default: null
    },

    ongoing: {
      type: Boolean,
      default: false
    },

    elapsed: {
      type: Boolean,
      default: false
    },

    finished: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iconHtml() {
      if (this.elapsed === true) {
        return ImageIconDone;
      }

      switch (this.icon) {
        case "progress": {
          return ImageIconProgress;
        }

        case "account": {
          return ImageIconAccount;
        }

        case "activate": {
          return ImageIconActivate;
        }

        case "finished": {
          return ImageIconFinished;
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
$c: ".c-base-progress-item";

// VARIABLES
$icon-size: 20px;

#{$c} {
  background-color: $color-background-secondary;
  border: 1px solid $color-border-secondary;
  color: $color-base-black-mid;
  font-size: 13.5px;
  line-height: 18px;
  height: 38px;
  padding: 0 16px 1px;
  display: flex;
  align-items: center;
  column-gap: 11px;
  border-radius: 14px;

  #{$c}__icon {
    fill: $color-base-black-mid;
    width: $icon-size;
    height: $icon-size;
    margin-inline: -2px;
  }

  // --> BOOLEANS <--

  &--ongoing {
    background-image: linear-gradient(180deg, #264397 0%, #1a1c72 100%);
    color: $color-white;

    #{$c}__icon {
      fill: $color-white;
    }
  }

  &--elapsed,
  &--finished {
    #{$c}__icon {
      fill: $color-base-green-mid;
    }
  }
}
</style>
