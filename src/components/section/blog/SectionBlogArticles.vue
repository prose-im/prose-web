<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
  TEMPLATE
  ********************************************************************** -->

<template lang="pug">
.c-section-blog-articles
  .c-section-blog-articles_title
    | Read more about Prose
  ul.c-section-blog-articles_grid
    li(
      v-for="article in articles"
      :key="article.slug"
    )
      nuxt-link(
        :to="`/blog/${article.slug}/`",
        class="c-section-blog-articles__article"
      )
        base-card(
          :media="article.cover.src"
          class="c-section-blog-articles__article-card"
        )

          template(
            slot="title"
          )
            h2 {{ article.title }}

          template(
            slot="description"
          )
            time(:datetime="article.createdAt") {{ $filters.formatDate(article.createdAt) }}

</template>

<!-- **********************************************************************
SCRIPT
********************************************************************** -->

<script>
export default {
  name: "SectionBlogArticles",

  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<!-- **********************************************************************
STYLE
********************************************************************** -->

<style lang="scss">
$c: ".c-section-blog-articles";

.c-section-blog-articles {
  padding: 150px 0;

  #{$c}_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  #{$c}_title {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 24px;
    font-weight: $font-weight-medium;
    color: $color-base-blue-dark;
  }

  #{$c}__article-card {
    transition: all ease 0.2s;
    height: 100%;

    &:hover {
      box-shadow: 0px 28px 36px 0px #2b255d15;
      transform: translateY(-5px);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: 1200px) {
  .c-section-blog-articles {
    #{$c}_grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-section-blog-articles {
    #{$c}_grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
