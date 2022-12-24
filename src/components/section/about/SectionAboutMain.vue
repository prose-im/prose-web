<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-main-title(
  class="c-section-about-main"
)
  template(
    slot="title"
  )
    | We are a small team with a big passion

  template(
    slot="description"
  )
    .c-section-about-main__illustration-center
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionAboutMain"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-about-main";

.c-section-about-main {
  #{$c}__illustration-center {
    /* TODO: fix image path */
    background-image: url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
    margin-top: 64px;
    overflow: hidden;
    border-radius: 32px;
  }
}
</style>
