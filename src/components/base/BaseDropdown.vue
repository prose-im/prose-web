<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span.c-base-dropdown
  span.c-base-dropdown__box
    span(
      :class=`[
        "c-base-dropdown__arrow",
        {
          [arrowClass]: arrowClass
        }
      ]`
    )

    span.c-base-dropdown__inner
      template(
        v-for="item in items"
      )
        nuxt-link(
          v-if="item.target.startsWith('/')"
          :to="item.target"
          class="c-base-dropdown__item"
        )
          base-dropdown-item(
            :key="'dropdown_internal_' + item.id"
            :title="item.title"
            :label="item.label"
            :icon="item.icon"
          )

        a(
          v-else
          :href="item.target"
          class="c-base-dropdown__item"
        )
          base-dropdown-item(
            :key="'dropdown_external_' + item.id"
            :title="item.title"
            :label="item.label"
            :icon="item.icon"
          )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDropdown",

  props: {
    items: {
      type: Array,

      default() {
        return [];
      }
    },

    arrowClass: {
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
$c: ".c-base-dropdown";

// VARIABLES
$arrow-size: 8px;

.c-base-dropdown {
  padding-top: ($arrow-size + 12px);

  #{$c}__box {
    background: $color-white;
    border-radius: 6px;
    box-shadow: 0 10px 40px 0 rgba(#19162c, 0.18); /* TODO: commonize palette */
    display: block;
    position: relative;
  }

  #{$c}__arrow {
    width: 0;
    height: 0;
    border-left: $arrow-size solid transparent;
    border-right: $arrow-size solid transparent;
    border-bottom: $arrow-size solid $color-white;
    margin-left: ((-1 * $arrow-size) + 3px);
    position: absolute;
    top: (-1 * $arrow-size);
    left: 50%;
  }

  #{$c}__inner {
    padding: 18px 14px 18px 28px;
    display: block;
  }

  #{$c}__item {
    margin-bottom: 14px;
    display: block;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-base-dropdown {
    #{$c}__inner {
      padding-left: 22px;
      padding-right: 18px;
    }
  }
}
</style>
