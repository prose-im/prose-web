<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-disclaimer
  .c-base-disclaimer__raster(
    v-if="raster"
  )
    base-raster(
      :name="raster"
      :scale="rasterScale"
      class="c-base-disclaimer__raster-image"
    )

  .c-base-disclaimer__text
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDisclaimer",

  props: {
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
$c: ".c-base-disclaimer";

.c-base-disclaimer {
  background: $color-background-secondary;
  border: 1px solid $color-border-secondary;
  padding: 25px 56px 28px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  #{$c}__raster {
    margin-right: 34px;
    flex: 0 0 auto;

    #{$c}__raster-image {
      margin-bottom: -4px;
    }
  }

  #{$c}__text {
    font-size: 14.5px;
    letter-spacing: -0.14px;
    line-height: 22px;
    text-align: left;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  .c-base-disclaimer {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-base-disclaimer {
    padding-left: 28px;
    padding-right: 28px;
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-base-disclaimer {
    padding-left: 18px;
    padding-right: 18px;
    flex-direction: column;

    #{$c}__raster {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>
