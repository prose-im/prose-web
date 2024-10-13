<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-account-content
  .c-section-cloud-account-content__title
    page-wrapper
      base-title(
        level="medium"
        align="center"
        tint="gradient"
      )
        | {{ title }}

        span.c-section-cloud-account-content__title-emoji(
          v-if="titleEmoji"
        )
          base-space(
            :repeat="2"
          )

          | {{ titleEmoji }}

  .c-section-cloud-account-content__form
    page-wrapper
      slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudAccountContent",

  props: {
    title: {
      type: String,
      required: true
    },

    titleEmoji: {
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
$c: ".c-section-cloud-account-content";

#{$c} {
  display: flex;
  flex-direction: column;

  #{$c}__title {
    flex: 0 0 auto;

    #{$c}__title-emoji {
      user-select: none;

      /* Hack: disable inherited text fill color so that emoji shows up. */
      @include text-fill-color(currentcolor);
    }
  }

  #{$c}__form {
    background-color: rgba($color-background-secondary, 0.5);
    border-top: 1px solid $color-border-tertiary;
    margin-top: $section-form-margin-top;
    flex: 1;
  }
}
</style>
