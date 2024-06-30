<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-page-error
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
  name: "PageError",

  props: {
    error: {
      type: Object,
      required: true
    }
  }
};
</script>
