<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-tab",
    {
      "c-base-tab--active": isActive
    }
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTab",

  inject: ["setActiveTab", "tabsComponent"],

  props: {
    tab: {
      type: Object,
      required: true
    }
  },

  emits: ["updateTabs"],

  computed: {
    isActive() {
      return this.$parent.activeTab === this.tab.title;
    }
  },

  mounted() {
    this.$emit("updateTabs");
  }
};
</script>

<style lang="scss" scoped>
$c: ".c-base-tab";

.c-base-tab {
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 0;
  position: absolute;

  // --> BOOLEANS <--

  &--active {
    opacity: 1;
    z-index: 1;
  }
}
</style>
