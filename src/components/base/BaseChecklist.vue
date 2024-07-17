<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
ul.c-base-checklist
  li.c-base-checklist__item(
    v-for="(item, index) in itemsWithIcons"
    :key="index"
  )
    span(
      v-if="item.icon"
      v-html="item.icon"
      class="c-base-checklist__item-icon"
    )

    | {{ item.label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconIncluded from "@/assets/images/components/base/BaseChecklist/icon-included.svg?raw";
import ImageIconInformation from "@/assets/images/components/base/BaseChecklist/icon-information.svg?raw";

export default {
  name: "BaseChecklist",

  props: {
    items: {
      type: Array,
      required: true,

      validator(x) {
        return x.length > 0;
      }
    }
  },

  computed: {
    itemsWithIcons() {
      return this.items.map(item => {
        return {
          icon: this.iconFromStatus(item.status),
          label: item.label
        };
      });
    }
  },

  methods: {
    // --> HELPERS <--

    /**
     * Acquires icon from status
     * @public
     * @param  {string} status
     * @return {string} Icon (if any)
     */
    iconFromStatus(status) {
      switch (status) {
        case "included": {
          return ImageIconIncluded;
        }

        case "information": {
          return ImageIconInformation;
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
$c: ".c-base-checklist";

// VARIABLES
$item-icon-size: 18px;

#{$c} {
  text-align: left;

  #{$c}__item {
    color: $color-black;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }

    #{$c}__item-icon {
      width: $item-icon-size;
      height: $item-icon-size;
      margin-right: 8px;
      flex: 0 0 auto;
    }
  }
}
</style>
