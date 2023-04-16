<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
  TEMPLATE
********************************************************************** -->

<template lang="pug">
.p-article-index
  page-wrapper
    article
      header.article-header
        time(:datetime="page.createdAt").article-date {{ $formatDate(page.createdAt) }}
        h1.article-h1 {{ page.title }}
        .article-description {{ page.description }}
        .article-cover
          img(:src="page.cover.src", :alt="page.cover.alt")
      nuxt-content(:document="page")
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
        error({ statusCode: 404, message: "Page not found" });
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
          content: `https://prose.org${this.page.cover.src}`
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
          content: `https://prose.org${this.page.cover.src}`
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
$c: ".p-article-index";

.p-article-index {
  padding-bottom: 74px;

  ::selection {
    background: #518eea20;
    color: $color-base-blue-mid;
  }

  #{$c}__text {
    margin-top: 34px;
  }

  .article-header {
    text-align: center;
  }

  .article-date {
    color: $color-base-grey-dark;
  }

  .article-h1 {
    margin-top: 24px;
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -0.03em;
    font-weight: $font-weight-medium;
    background-image: linear-gradient(
      -6deg,
      #06005e 19%,
      #3458ad 86%,
      #518eea 116%
    );
    background-clip: text;
    padding-bottom: 0.2em;

    @include text-fill-color(transparent);
  }

  .article-description {
    margin-top: 16px;
    font-size: 24px;
    line-height: 32px;
    color: $color-base-grey-dark;
  }

  .article-cover {
    margin: 40px auto;
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

  .nuxt-content {
    max-width: 65ch;
    margin: 0 auto;

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
      list-style-type: disc;
    }

    ol li {
      list-style-type: decimal;
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

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
      text-shadow: none;
      background: #518eea50;
      color: inherit;
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      text-shadow: none;
      background: #518eea50;
      color: inherit;
    }

    @media print {
      code[class*="language-"],
      pre[class*="language-"] {
        text-shadow: none;
      }
    }

    /* Code blocks */
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
  #{$c} .article-h1 {
    font-size: 56px;
    line-height: 56px;
  }

  #{$c} .article-description {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} .article-h1 {
    font-size: 40px;
    line-height: 40px;
  }
}
</style>
