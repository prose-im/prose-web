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
        @click="selectTab(tab)"
        :icon="tab.icon"
        :tint="tab.tint"
        :active="tab.title === activeTab"
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

  provide() {
    return {
      setActiveTab: this.selectTab,
      tabsComponent: this
    };
  },

  props: {
    tabs: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // --> STATE <--

      activeTab: ""
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
      // TODO: migrate
      //       this.tabs = this.$children.filter(
      //         child => child.$options.name === "BaseTab"
      //       );
      //
      //       if (this.tabs.length > 0) {
      //         this.activeTab = this.tabs[0].tab.title;
      //       }
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
