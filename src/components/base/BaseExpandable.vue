<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
ul.c-base-expandable
  li(
    v-for="(entry, index) in entries"
    :index="'entry_' + index"
    :class=`[
      "c-base-expandable__entry",
      {
        "c-base-expandable__entry--before-expanded": (expandedIndex > -1 && (expandedIndex - 1) === index),
        "c-base-expandable__entry--expanded": (expandedIndex > -1 && expandedIndex === index),
        "c-base-expandable__entry--after-expanded": (expandedIndex > -1 && (expandedIndex + 1) === index)
      }
    ]`
  )
    .c-base-expandable__title(
      @click="onTitleClick(index)"
    )
      p.c-base-expandable__title-text
        | {{ entry.title }}

      span.c-base-expandable__title-icon
        image-title-icon-expand

    .c-base-expandable__content
      | {{ entry.content }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageTitleIconExpand from "@/assets/images/components/base/BaseExpandable/title-icon-expand.svg?component";

export default {
  name: "BaseExpandable",

  components: { ImageTitleIconExpand },

  props: {
    entries: {
      type: Array,
      required: true,

      validator(x) {
        return x.length > 0;
      }
    }
  },

  data() {
    return {
      // --> STATE <--

      expandedIndex: -1
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when title is clicked
     * @public
     * @param  {number} [index]
     * @return {undefined}
     */
    onTitleClick(index = -1) {
      if (index === this.expandedIndex) {
        this.expandedIndex = -1;
      } else {
        this.expandedIndex = index;
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-expandable";

// VARIABLES
$entry-expanded-margin-top-bottom: 10px;
$entry-padding-left: 38px;
$entry-padding-right: 28px;
$entry-border-radius: 8px;

$title-icon-size: 32px;

#{$c} {
  #{$c}__entry {
    background-color: rgba($color-white, 0.9);
    border-width: 1px 1px 0 1px;
    border-style: solid;
    position: relative;
    border-color: $color-border-primary;
    box-shadow: 0 10px 10px -3px rgba($color-black, 0.02);

    &--expanded {
      border-width: 1px;
      margin-top: $entry-expanded-margin-top-bottom;
      margin-bottom: $entry-expanded-margin-top-bottom;
      z-index: 1;
      border-radius: $entry-border-radius;

      #{$c}__title {
        #{$c}__title-icon {
          svg {
            transform: rotate(45deg);
          }
        }
      }

      #{$c}__content {
        display: block;
      }
    }

    &:last-child,
    &--before-expanded {
      border-bottom-left-radius: $entry-border-radius;
      border-bottom-right-radius: $entry-border-radius;
      border-bottom-width: 1px;
    }

    &:first-child,
    &--after-expanded {
      border-top-left-radius: $entry-border-radius;
      border-top-right-radius: $entry-border-radius;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  #{$c}__title {
    min-height: 58px;
    padding: 2px $entry-padding-right 4px $entry-padding-left;
    user-select: none;
    display: flex;
    align-items: center;

    #{$c}__title-text {
      color: $color-base-black-mid;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.15px;
      flex: 1;
    }

    #{$c}__title-icon {
      background-color: rgba($color-background-primary, 0.75);
      border: 1.5px solid $color-border-secondary;
      width: $title-icon-size;
      height: $title-icon-size;
      margin-left: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      border-radius: 10px;

      svg {
        fill: $color-base-grey-dark;
        width: 12px;
        transition: transform linear 150ms;
      }
    }

    &:hover,
    &:active {
      cursor: pointer;

      #{$c}__title-icon {
        border-color: $color-border-primary;

        svg {
          fill: darken($color-base-grey-dark, 14%);
        }
      }
    }

    &:hover {
      #{$c}__title-icon {
        background-color: $color-background-secondary;
      }
    }

    &:active {
      #{$c}__title-icon {
        background-color: darken($color-background-secondary, 1%);
      }
    }
  }

  #{$c}__content {
    color: $color-base-grey-dark;
    font-size: 15px;
    line-height: 21px;
    padding: 0 $entry-padding-right 18px $entry-padding-left;
    display: none;
  }
}
</style>
