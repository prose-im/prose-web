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
      v-for="(item, index) in tabs"
    )
      base-icon-card(
        @click="selectTab(item.tab)"
        :key="index"
        :icon="item.tab.icon"
        :tint="item.tab.tint"
        :active="item.tab.title === activeTab"
        :image="getAssetUrl(item.tab.media)"
        class="c-base-tabs__card"
        tab
      )
        template(
          slot="title"
        )
          | {{ item.tab.title }}

        template(
          slot="description"
        )
          | {{ item.tab.description }}

  .c-base-tabs__media-stack
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTabs",

  provide() {
    return {
      setActiveTab: this.selectTab,
      tabsComponent: this
    };
  },

  props: {
    mediaUrlPrefix: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      // --> STATE <--

      activeTab: "",
      tabs: []
    };
  },

  mounted() {
    this.updateTabs();
  },

  methods: {
    // --> HELPERS <--

    /**
     * Selects tab
     * @public
     * @param  {object} selectedTab
     * @return {undefined}
     */
    selectTab(selectedTab) {
      this.activeTab = selectedTab.title;
    },

    /**
     * Updates tab
     * @public
     * @return {undefined}
     */
    updateTabs() {
      this.tabs = this.$children.filter(
        child => child.$options.name === "BaseTab"
      );

      if (this.tabs.length > 0) {
        this.activeTab = this.tabs[0].tab.title;
      }
    },

    /**
     * Gets asset URL
     * @public
     * @param  {string} url
     * @return {string} Asset URL
     */
    getAssetUrl(url) {
      return require(`@/assets/images${this.mediaUrlPrefix}${url}`);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-tabs";

.c-base-tabs {
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
  .c-base-tabs {
    #{$c}__grid {
      grid-gap: 16px;
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  .c-base-tabs {
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
