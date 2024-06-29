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
  .c-section-blog-articles__title.u-medium
    | Read more about Prose

  ul.c-section-blog-articles__grid
    li(
      v-for="article in articles"
      :key="article.slug"
    )
      nuxt-link(
        :to="`/blog/${article.slug}/`"
        class="c-section-blog-articles__article"
      )
        base-card(
          :media="article.cover.src"
          class="c-section-blog-articles__article-card"
        )
          template(
            v-slot:title
          )
            h2
              | {{ article.title }}

          template(
            v-slot:description
          )
            time(
              :datetime="article.date"
            )
              | {{ $filters.formatDate(article.date) }}
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

#{$c} {
  padding: 150px 0;

  #{$c}__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }

  #{$c}__title {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 24px;
    color: $color-base-blue-dark;
  }

  #{$c}__article {
    #{$c}__article-card {
      transition: all ease 0.2s;
      height: 100%;

      &:hover {
        box-shadow: 0px 28px 36px 0px #2b255d15;
        transform: translateY(-5px);
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: 1200px) {
  #{$c} {
    #{$c}__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
