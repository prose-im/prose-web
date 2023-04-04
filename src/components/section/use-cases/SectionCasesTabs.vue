<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cases-tabs
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
        class="c-section-cases-tabs__media"
      )
        img(
          :src="getUrl(tab.media)"
          alt=""
          class="c-section-cases-tabs__media-img"
        )
</template>

<!-- **********************************************************************
        SCRIPT
        ********************************************************************** -->

<script>
export default {
  name: "SectionCasesTabs",

  props: {
    useCase: {
      type: Object,
      required: true
    }
  },

  methods: {
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

.c-section-cases-tabs {
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

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-cases-tabs {
    padding: 150px 0 50px;

    #{$c}__media-stack {
      height: 400px;
    }
  }
}
</style>
