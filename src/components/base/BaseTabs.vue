<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div
    ul.c-section-cases-tabs__grid
        li(
            v-for="(item, index) in tabs"
        )
            base-icon-card(
                :key="index"
                class="c-section-cases-tabs__card"
                :icon="item.tab.icon"
                :tint="item.tab.tint"
                :active="item.tab.title === activeTab"
                :image="getUrl(item.tab.media)"
                tab
                @click="() => selectTab(item.tab)"
            )

                template(
                    slot="title"
                )
                    | {{ item.tab.title }}

                template(
                    slot="description"
                )
                    | {{ item.tab.description }}
    .c-section-cases-tabs__media-stack
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

  data() {
    return {
      activeTab: "",
      tabs: []
    };
  },

  mounted() {
    this.updateTabs();
  },

  methods: {
    selectTab(selectedTab) {
      this.activeTab = selectedTab.title;
    },
    updateTabs() {
      this.tabs = this.$children.filter(
        child => child.$options.name === "BaseTab"
      );
      if (this.tabs.length > 0) {
        this.activeTab = this.tabs[0].tab.title;
      }
    },
    getUrl(url) {
      return require(`@/assets/images/components/section/use-cases${url}`);
    }
  }
};
</script>

<!-- **********************************************************************
        STYLE
        ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cases-tabs"; 

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

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c}__grid {
    grid-gap: 16px;
  }
}


@media (max-width: $screen-small-width-breakpoint) {
    #{$c}__media-stack {
      display: none;
    }

    #{$c}__grid {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 32px;
  }
}
</style>
