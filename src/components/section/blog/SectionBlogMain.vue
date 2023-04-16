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
      :to="`/blog/${featured.slug}/`",
      class="c-section-blog-main_featured--link"
    )
      .c-section-blog-main_featured--link-image
        img(
          class="c-section-blog-main_featured--link-image-inner"
          :src="featured.cover.src"
          :alt="featured.cover.alt"
        )
      .c-section-blog-main_featured--link-content
          .c-section-blog-main_featured--link-badge NEW
          time.c-section-blog-main_featured--link-overline {{ $formatDate(featured.createdAt) }}
          h2.c-section-blog-main_featured--link-title {{ featured.title }}
          p.c-section-blog-main_featured--link-description {{ featured.description }}
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
  #{$c}_featured--link {
    display: flex;
    gap: 64px;
    align-items: center;
  }

  #{$c}_featured--link-image {
    aspect-ratio: 16/9;
    flex-shrink: 1;
    min-height: 325px;
    overflow: hidden;
    border-radius: 32px;

    &-inner {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  #{$c}_featured--link-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  #{$c}_featured--link-badge {
    padding: 4px 8px;
    border-radius: 99rem;
    background-color: $color-base-pink-light;
    color: $color-white;
    font-size: 12px;
    line-height: 16px;
    font-weight: $font-weight-bolder;
    letter-spacing: 0.015em;
    text-transform: uppercase;
  }

  #{$c}_featured--link-overline {
    color: $color-base-grey-dark;
  }

  #{$c}_featured--link-title {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.015em;
    font-weight: $font-weight-medium;
    color: $color-base-blue-dark;
  }

  #{$c}_featured--link-description {
    color: $color-base-grey-dark;
    font-size: 20px;
    line-height: 32px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-blog-main {
    #{$c}_featured--link {
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
    }

    #{$c}_featured--link-image {
      aspect-ratio: 16/9;
      width: 100%;
      min-height: auto;
      height: auto;
    }


  #{$c}_featured--link-title {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -0.015em;
    font-weight: $font-weight-medium;
    color: $color-base-blue-dark;
  }
  }
}
</style>
