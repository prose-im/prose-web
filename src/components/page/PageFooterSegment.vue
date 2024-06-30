<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-page-footer-segment
  h6.c-page-footer-segment__title.u-title.u-bold
    | {{ title }}

  ul.c-page-footer-segment__items
    li(
      v-for="segmentItem, index in items"
      :key="'segment_' + id + '_' + index"
      :class=`[
        "c-page-footer-segment__item",
        {
          "u-medium": segmentItem.emphasis
        }
      ]`
    )
      nuxt-link(
        v-if="segmentItem.target.startsWith('/')"
        :to="segmentItem.target"
        class="c-page-footer-segment__link"
      )
        | {{ segmentItem.label }}

      a.c-page-footer-segment__link(
        v-else
        :href="segmentItem.target"
      )
        span.c-page-footer-segment__indicator(
          v-if="segmentItem.indicatorIcon"
          :style="'background-image: url(' + segmentItem.indicatorIcon + ');'"
        )

        | {{ segmentItem.label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageFooterSegment",

  props: {
    id: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    items: {
      type: Array,

      default() {
        return [];
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-footer-segment";

// VARIABLES
$segment-link-padding-left: 10px;

#{$c} {
  color: $color-black;

  &:last-child {
    margin-right: 0;
  }

  #{$c}__title {
    font-size: 20px;
    letter-spacing: -0.015em;
  }

  #{$c}__items {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    #{$c}__item {
      margin-left: (-1 * $segment-link-padding-left);
      margin-block: -2px;
      display: block;
    }

    #{$c}__link {
      background-color: transparent;
      color: inherit;
      font-size: 14px;
      line-height: 18px;
      padding: 5px 6px 6px $segment-link-padding-left;
      display: flex;
      align-items: center;
      border-radius: 8px;
      transition: background-color 100ms linear;

      &:hover {
        background-color: rgba($color-base-black-mid, 0.06);
      }

      &:active {
        background-color: rgba($color-base-black-mid, 0.08);
      }
    }

    #{$c}__indicator {
      background-color: lighten($color-base-grey-mid, 14%);
      width: 9px;
      height: 9px;
      margin-right: 5px;
      margin-bottom: -1px;
      flex: 0 0 auto;
      border-radius: 100%;
    }
  }
}
</style>
