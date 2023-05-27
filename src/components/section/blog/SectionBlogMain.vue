<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-blog-main
  nuxt-link(
    :to="`/blog/${featured.slug}/`"
    class="c-section-blog-main__featured"
  )
    .c-section-blog-main__featured-image
      img(
        :src="featured.cover.src"
        :alt="featured.cover.alt"
        class="c-section-blog-main__featured-image-inner"
      )

    .c-section-blog-main__featured-content
      .c-section-blog-main__featured-badge.u-bold
        | NEW

      time(
        :datetime="featured.createdAt"
        class="c-section-blog-main__featured-overline"
      )
        | {{ $filters.formatDate(featured.createdAt) }}

      h2.c-section-blog-main__featured-title.u-medium
        | {{ featured.title }}

      p.c-section-blog-main__featured-description
        | {{ featured.description }}
</template>

<!-- **********************************************************************
             SCRIPT
             ********************************************************************** -->

<script>
export default {
  name: "SectionBlogMain",

  props: {
    featured: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<!-- **********************************************************************
             STYLE
             ********************************************************************** -->

<style lang="scss">
$c: ".c-section-blog-main";

.c-section-blog-main {
  #{$c}__featured {
    display: flex;
    gap: 64px;
    align-items: center;
  }

  #{$c}__featured-image {
    aspect-ratio: 16/9;
    flex-shrink: 1;
    min-height: 325px;
    overflow: hidden;
    border-radius: 32px;

    #{$c}__featured-image-inner {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  #{$c}__featured-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  #{$c}__featured-badge {
    background-color: $color-base-pink-light;
    color: $color-white;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 99rem;
  }

  #{$c}__featured-overline {
    color: $color-base-grey-dark;
  }

  #{$c}__featured-title {
    color: $color-base-blue-dark;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.015em;
  }

  #{$c}__featured-description {
    color: $color-base-grey-dark;
    font-size: 20px;
    line-height: 32px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-blog-main {
    #{$c}__featured {
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
    }

    #{$c}__featured-image {
      aspect-ratio: 16/9;
      width: 100%;
      min-height: auto;
      height: auto;
    }

    #{$c}__featured-title {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.015em;
      color: $color-base-blue-dark;
    }
  }
}
</style>
