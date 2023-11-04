<!--
 * This file is part of prose-web
 *
 * Copyright 2023, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-blog-article
  page-wrapper
    article
      header.p-blog-article__header
        time(
          :datetime="page.date"
          class="p-blog-article__date u-medium"
        )
          | {{ $filters.formatDate(page.date) }}

        h1.p-blog-article__title.u-medium
          | {{ page.title }}

        .p-blog-article__description
          | {{ page.description }}

        .p-blog-article__cover(
          v-if="page.media === 'text'"
        )
          img(
            :src="page.cover.src"
            :alt="page.cover.alt"
          )

      nuxt-content(
        :document="page"
        :class=`[
          "p-blog-article__content",
          "p-blog-article__content--" + page.media
        ]`
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BlogArticlePage",
  layout: "simple",

  async asyncData({ $content, params, error }) {
    const page = await $content(`blog/${params.article}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Article not found" });
      });

    return {
      page
    };
  },

  head() {
    return {
      title: this.page.title,

      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description
        },

        {
          hid: "og-title",
          property: "og:title",
          content: this.page.title
        },

        {
          hid: "og-description",
          property: "og:description",
          content: this.page.description
        },

        {
          hid: "og-image",
          property: "og:image",
          content: `${this.$config.url.prose_web}${this.page.cover.src}`
        },

        {
          hid: "twitter-title",
          name: "twitter:title",
          content: this.page.title
        },

        {
          hid: "twitter-description",
          name: "twitter:description",
          content: this.page.description
        },

        {
          hid: "twitter-image",
          name: "twitter:image",
          content: `${this.$config.url.prose_web}${this.page.cover.src}`
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-blog-article";

.p-blog-article {
  padding-bottom: 74px;

  ::selection {
    color: $color-base-blue-mid;
  }

  #{$c}__header {
    text-align: center;

    #{$c}__date {
      background-color: $color-base-grey-light;
      color: $color-base-grey-dark;
      line-height: 22px;
      padding: 6px 12px;
      border-radius: 20px;
    }

    #{$c}__title {
      background-image: linear-gradient(
        -6deg,
        #06005e 19%,
        #3458ad 86%,
        #518eea 116%
      );
      background-clip: text;
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -0.03em;
      margin-top: 24px;
      padding-bottom: 0.2em;
      text-wrap: balance;

      @include text-fill-color(transparent);
    }

    #{$c}__description {
      color: $color-base-grey-dark;
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
    }

    #{$c}__cover {
      margin: 40px auto 0;
      aspect-ratio: 1200 / 630;
      display: relative;
      overflow: hidden;
      border-radius: 24px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  #{$c}__content {
    margin: 46px auto 0;

    &--text {
      max-width: 70ch;
    }

    &--video {
      max-width: 100%;
    }

    h2,
    h3,
    h4 {
      color: $color-base-blue-dark;
      font-weight: $font-weight-medium;
    }

    h2 {
      font-size: 40px;
      margin-top: 80px;
    }

    h3 {
      font-size: 28px;
      margin-top: 56px;
    }

    h4 {
      font-size: 24px;
      margin-top: 56px;
    }

    p {
      font-size: 20px;
      line-height: 32px;
      margin-top: 40px;
      color: $color-base-grey-dark;
    }

    a {
      border-bottom: 0.5px solid $color-base-blue-mid;
      color: $color-base-blue-mid;
      text-decoration: none;
      transition: opacity 0.2s ease-in-out;
    }

    blockquote {
      border-left: 4px solid #dedfe4;
      margin: 20px 0;
      padding-left: 20px;

      p {
        color: $color-base-blue-dark;
        font-size: 24px;
      }
    }

    ol,
    ul {
      margin-left: 20px;
      font-size: 20px;
      line-height: 32px;
      margin-top: 40px;
    }

    ul li {
      list-style-type: none;

      &::before {
        content: "•";
        color: $color-base-pink-light;
        display: inline-block;
        width: 1em;
        font-size: 1.5em;
        position: absolute;
        margin-left: -20px;
      }
    }

    ol {
      counter-reset: li;
    }

    ol li {
      list-style-type: none;
      counter-increment: li;

      &::before {
        content: counter(li) ".";
        color: $color-base-pink-light;
        display: inline-block;
        width: 1em;
        position: absolute;
        margin-left: -20px;
      }
    }

    li {
      color: $color-base-grey-dark;
      margin-bottom: 10px;
    }

    strong {
      font-weight: $font-weight-bolder;
      color: $color-base-blue-dark;
    }

    em {
      font-style: italic;
    }

    img {
      border-radius: 8px;
      max-width: 100%;
    }

    hr {
      border: 0;
      border-top: 1px solid #a4a4ae40;
    }

    code[class*="language-"],
    pre[class*="language-"] {
      color: #d6deeb;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      font-size: 16px;
      border-radius: 0.5em;
      text-shadow: none;
      background: $color-black;
      tab-size: 4;
      hyphens: none;
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      text-shadow: none;
      background: #518eea50;
      color: inherit;
    }

    pre[class*="language-"] {
      padding: 1em;
      margin: 1em 0;
      overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    :not(pre) > code {
      color: $color-base-pink-light;
      background: $color-base-grey-light;
      border: 1px solid #a4a4ae40;
    }

    :not(pre) > code[class*="language-"],
    :not(pre) > code {
      padding: 0.1em 0.25em;
      border-radius: 0.3em;
      white-space: normal;
      line-height: 1.5;
      font-size: 16px;
    }

    .token.comment,
    .token.prolog,
    .token.cdata {
      color: $color-base-grey-dark;
      font-style: italic;
    }

    .token.punctuation {
      color: $color-base-grey-dark;
    }

    .namespace {
      color: rgb(178, 204, 214);
    }

    .token.deleted {
      color: rgba(239, 83, 80, 0.56);
      font-style: italic;
    }

    .token.symbol,
    .token.property {
      color: $color-base-purple-alt;
    }

    .token.tag,
    .token.operator,
    .token.keyword {
      color: $color-base-purple-alt;
      background: none;
    }

    .token.boolean {
      color: rgb(255, 88, 116);
    }

    .token.number {
      color: rgb(247, 140, 108);
    }

    .token.constant,
    .token.function,
    .token.builtin,
    .token.char {
      color: $color-base-pink-light;
    }

    .token.selector,
    .token.doctype {
      color: rgb(199, 146, 234);
      font-style: italic;
    }

    .token.attr-name,
    .token.inserted {
      color: $color-base-blue-light;
      font-style: italic;
    }

    .token.string,
    .token.url,
    .token.entity,
    .language-css .token.string,
    .style .token.string {
      color: $color-base-blue-light;
    }

    .token.class-name,
    .token.atrule,
    .token.attr-value {
      color: rgb(255, 203, 139);
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: rgb(214, 222, 235);
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__header {
      #{$c}__title {
        font-size: 56px;
        line-height: 56px;
      }
    }

    #{$c}__description {
      font-size: 20px;
      line-height: 30px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__header {
      #{$c}__title {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
