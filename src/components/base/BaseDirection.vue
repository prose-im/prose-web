<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-direction
  .c-base-direction__raster(
    v-if="raster"
  )
    base-raster(
      :name="raster"
      :scale="rasterScale"
      class="c-base-direction__raster-image"
    )

  .c-base-direction__text
    h4.c-base-direction__title.u-title.u-medium(
      v-if="title"
    )
      | {{ title }}

    p(
      v-if="label"
      :class=`[
        "c-base-direction__label",
        {
          "u-medium": labelBolder
        }
      ]`
    )
      | {{ label }}

    p(
      :class=`[
        "c-base-direction__description",
        {
          "u-medium": descriptionBolder
        }
      ]`
    )
      | {{ description }}

  nuxt-link(
    v-if="actionLabel && actionTarget"
    :to="actionTarget"
    class="c-base-direction__action"
  )
    base-button(
      right-icon="arrow-right"
      tint="light"
      class="c-base-direction__action-button"
      bolder
    )
      | {{ actionLabel }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDirection",

  props: {
    description: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    },

    label: {
      type: String,
      default: null
    },

    actionLabel: {
      type: String,
      default: null
    },

    actionTarget: {
      type: String,
      default: null
    },

    labelBolder: {
      type: Boolean,
      default: false
    },

    descriptionBolder: {
      type: Boolean,
      default: false
    },

    raster: {
      type: String,
      default: null
    },

    rasterScale: {
      type: Number,
      default: 0.35
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-direction";

.c-base-direction {
  display: flex;
  align-items: center;

  #{$c}__raster,
  #{$c}__action {
    flex: 0 0 auto;
  }

  #{$c}__raster {
    margin-right: 22px;
    transform: scaleX(-1);

    #{$c}__raster-image {
      margin-bottom: -4px;
    }
  }

  #{$c}__text {
    #{$c}__label,
    #{$c}__description {
      font-size: 14.5px;
      letter-spacing: -0.14px;
      line-height: 22px;
    }

    #{$c}__title {
      color: $color-base-blue-dark;
      font-size: 17px;
      letter-spacing: -0.15px;
      line-height: 28px;
    }

    #{$c}__description {
      margin-top: 3px;
    }
  }

  #{$c}__action {
    margin-left: 38px;
  }
}
</style>
