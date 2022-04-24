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
    page-main-title
      template(
        slot="title"
      )
        template(
          v-if="error.statusCode === 404"
        )
          | Page Not Found

        template(
          v-else
        )
          | An Error Occurred

      template(
        slot="description"
      )
        template(
          v-if="error.statusCode === 404"
        )
          p.u-medium
            | This page could not be found.

          p
            | Please go back to the homepage and start from there.

        template(
          v-else
        )
          p(
            v-if="error.message"
          )
            | {{ error.message }}.

          p(
            v-else
          )
            | An unexpected error occurred. Can you try again?

          p.u-medium
            | Error code: {{ error.statusCode }}

      nuxt-link(
        to="/"
        slot="action"
      )
        base-button(
          right-icon="arrow-right"
          size="large"
          bolder
        )
          | Go to the home page
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ErrorLayout",

  layout: "simple",

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title:
        this.error.statusCode === 404
          ? "Page not found"
          : `${this.error.statusCode} Error`
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
