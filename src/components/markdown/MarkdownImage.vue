<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
figure.c-markdown-image
  img(
    :src="src",
    :alt="alt",
    class="c-markdown-image__image"
  )

  figcaption(
    v-if="caption"
    class="c-markdown-image__caption"
  )
    | {{ caption }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "MarkdownImage",

  props: {
    src: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-markdown-image";

.c-markdown-image {
  margin-top: 40px;

  #{$c}__caption {
    color: $color-base-grey-dark;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin-top: 12px;
  }

  #{$c}__image {
    border-radius: 8px;
    max-width: 100%;
  }
}
</style>
