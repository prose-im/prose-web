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
    figcaption.c-markdown-image__caption(v-if="caption") {{ caption }}

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
.c-markdown-image {
  margin-top: 40px;
}

.c-markdown-image__caption {
    text-align: center;
    font-size: 14px !important;
    line-height: 20px !important;
    color: $color-base-grey-dark;
    margin-top: 12px;
}

.c-markdown-image__image {
  max-width: 100%;
  border-radius: 8px;
}
</style>
