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
      :scale="0.35"
      class="c-base-direction__raster-image"
    )

  .c-base-direction__text
    h4.c-base-direction__title.u-title.u-medium
      | {{ title }}

    p.c-base-direction__description
      | {{ description }}

  nuxt-link(
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
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    actionLabel: {
      type: String,
      required: true
    },

    actionTarget: {
      type: String,
      required: true
    },

    raster: {
      type: String,
      default: null
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
      margin-bottom: -6px;
    }
  }

  #{$c}__text {
    #{$c}__title {
      color: $color-base-blue-dark;
      font-size: 17px;
      letter-spacing: -0.15px;
      line-height: 28px;
    }

    #{$c}__description {
      font-size: 14.5px;
      letter-spacing: -0.14px;
      line-height: 22px;
      margin-top: 3px;
    }
  }

  #{$c}__action {
    margin-left: 38px;
  }
}
</style>
