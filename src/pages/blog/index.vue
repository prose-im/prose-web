<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-blog-index
  page-wrapper
    section-blog-main(
      class="p-blog-index__main"
      :featured="featured"
    )
    section-blog-articles(
      class="p-blog-index__articles"
      :articles="articles"
    )
</template>

<!-- **********************************************************************
             SCRIPT
             ********************************************************************** -->

<script>
export default {
  name: "BlogIndexPage",
  layout: "default",

  async asyncData({ $content }) {
    const articles = await $content("blog")
      .only(["title", "description", "date", "cover", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    const featured = articles.at(0)

    return {
      articles,
      featured
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

.p-blog-index {
  padding-bottom: 74px;

  #{$c}__text {
    margin-top: 34px;
  }
}
</style>
