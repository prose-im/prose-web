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
    span.c-base-dropdown__inner
      template(
        v-for="item in items"
        :key="'dropdown_' + item.id"
      )
        nuxt-link(
          v-if="item.target.startsWith('/')"
          :to="item.target"
          class="c-base-dropdown__item"
        )
          base-dropdown-item(
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
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-dropdown";

#{$c} {
  padding-top: 12px;

  #{$c}__box {
    background: $color-white;
    display: block;
    border-radius: 9px;
    box-shadow: 0 8px 24px 0 rgba(#19162c, 0.14);
  }

  #{$c}__inner {
    padding: 18px 14px 18px 24px;
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
  #{$c} {
    #{$c}__inner {
      padding-left: 22px;
      padding-right: 18px;
    }
  }
}
</style>
