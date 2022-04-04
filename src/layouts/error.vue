<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  //- Notice: as the 'error' layout behaves as a page as per Nuxt rules, we \
  //-   therefore treat it as a page here (inheriting the 'default' layout).
  .p-error
    h1(
      v-if="error.statusCode === 404"
    )
      | Page Not Found

    h1(
      v-else
    )
      | Error {{ error.statusCode }}

    nuxt-link(
      to="/"
    )
      | Go to the home page
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ErrorLayout",

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: `Error ${this.error.statusCode}`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-error";
</style>
