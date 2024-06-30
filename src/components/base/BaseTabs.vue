<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-tabs
  ul.c-base-tabs__grid
    li(
      v-for="(tab, index) in tabs"
      :key="index"
    )
      base-icon-card(
        @click="onCardClick(tab)"
        :icon="tab.icon"
        :tint="tab.tint"
        :active="tab.id === activeTabId"
        :image="tab.media"
        class="c-base-tabs__card"
        tab
      )
        template(
          v-slot:title
        )
          | {{ tab.title }}

        template(
          v-slot:description
        )
          | {{ tab.description }}

  .c-base-tabs__media-stack
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTabs",

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  emits: ["pick"],

  data() {
    return {
      // --> STATE <--

      activeTabId: null
    };
  },

  created() {
    // Pick first available tab
    this.changeActiveTab(this.tabs[0]);
  },

  methods: {
    // --> HELPERS <--

    /**
     * Changes active tab
     * @public
     * @param  {object} [tab]
     * @return {undefined}
     */
    changeActiveTab(tab = null) {
      const _tabId = tab?.id || null;

      this.activeTabId = _tabId;

      this.$emit("pick", _tabId);
    },

    // --> EVENT LISTENERS <--

    /**
     * Handles card click
     * @public
     * @param  {object} selectedTab
     * @return {undefined}
     */
    onCardClick(selectedTab) {
      this.changeActiveTab(selectedTab);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-tabs";

#{$c} {
  #{$c}__grid {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin: 64px 0 40px;
  }

  #{$c}__card {
    cursor: pointer;
  }

  #{$c}__media-stack {
    position: relative;
    aspect-ratio: 2/1;
    width: 100%;
    overflow: hidden;
    border-radius: 32px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__grid {
      grid-gap: 16px;
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__media-stack {
      display: none;
    }

    #{$c}__grid {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 32px;
    }
  }
}
</style>
