<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
span.c-base-space(
  v-html="spacesHtml"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseSpace",

  props: {
    repeat: {
      type: Number,
      default: 1
    }
  },

  computed: {
    spacesHtml() {
      return Array(this.repeat).fill("&nbsp;").join("");
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-space";
</style>
