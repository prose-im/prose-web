<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-use-cases-tabs
  page-wrapper
    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      span(
        v-html="useCase.sectionThreeTitle"
      )

    base-tabs
      base-tab(
        v-for="tab, index in useCase.tabs",
        :tab="tab",
        :key="index",
        class="c-section-use-cases-tabs__media"
      )
        img(
          :src="getAssetUrl(tab.media)"
          alt=""
          class="c-section-use-cases-tabs__media-img"
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionUseCasesTabs",

  props: {
    useCase: {
      type: Object,
      required: true
    }
  },

  methods: {
    // --> HELPERS <--

    /**
     * Gets asset URL
     * @public
     * @param  {string} url
     * @return {string} Asset URL
     */
    getAssetUrl(url) {
      return require(`@/assets/images/components/section/use-cases${url}`);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-use-cases-tabs";

.c-section-use-cases-tabs {
  padding: 150px 0;
  position: relative;

  #{$c}__media {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #{$c}__media-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-use-cases-tabs {
    padding: 150px 0 50px;

    #{$c}__media-stack {
      height: 400px;
    }
  }
}
</style>
