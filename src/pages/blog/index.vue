<!--
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-blog-index
  page-wrapper
    section-blog-main(
      :featured="featured"
      class="p-blog-index__main"
    )

    section-blog-articles(
      :articles="articles"
      class="p-blog-index__articles"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "simple"
});
</script>

<script>
export default {
  name: "BlogIndexPage",

  // TODO: not migrated
  async asyncData({ $content }) {
    const _articles = await $content("blog")
      .only(["title", "description", "date", "cover", "slug"])
      .sortBy("date", "desc")
      .skip(1)
      .fetch();

    const [_featured] = await $content("blog")
      .only(["title", "description", "date", "cover", "slug"])
      .sortBy("date", "desc")
      .limit(1)
      .fetch();

    return {
      articles: _articles,
      featured: _featured
    };
  },

  head: {
    title: "Prose Blog"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-blog-index";

#{$c} {
  padding-bottom: 74px;

  #{$c}__text {
    margin-top: 34px;
  }
}
</style>
