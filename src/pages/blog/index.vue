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
    section-blog-main(
    class="p-blog-index__main"
    )

    section-blog-text(
    class="p-blog-index__text"
    )
</template>

<!-- **********************************************************************
             SCRIPT
             ********************************************************************** -->

<script>
export default {
  name: "BlogIndexPage",
  layout: "simple",

  head: {
    title: "Prose | Blog"
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
