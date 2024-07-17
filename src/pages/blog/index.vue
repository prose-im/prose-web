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
// CONSTANTS
const CONTENT_ARTICLE_KEYS = ["_path", "title", "description", "date", "cover"],
  CONTENT_ARTICLE_SORT = { date: -1 };

// HELPERS
function mapSlugFromPath(article) {
  article.slug = article._path.split("/").slice(-1)[0];

  return article;
}

definePageMeta({
  layout: "simple"
});

// Fetch articles
const { data: articles } = await useAsyncData("blog:articles", async () => {
  return (
    await queryContent("blog")
      .only(CONTENT_ARTICLE_KEYS)
      .sort(CONTENT_ARTICLE_SORT)
      .skip(1)
      .find()
  ).map(mapSlugFromPath);
});

// Fetch featured article
const { data: featured } = await useAsyncData("blog:featured", async () => {
  const featured = (
    await queryContent("blog")
      .only(CONTENT_ARTICLE_KEYS)
      .sort(CONTENT_ARTICLE_SORT)
      .limit()
      .find()
  ).map(mapSlugFromPath);

  return featured[0] || null;
});

// Set page title
useHead({
  title: "Prose Blog"
});
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
