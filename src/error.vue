<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
nuxt-layout(
  name="simple"
)
  .p-error
    page-main-title
      template(
        v-slot:title
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
        v-slot:description
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

      template(
        v-slot:action
      )
        nuxt-link(
          to="/"
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

<script setup>
// Define props
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

// Set page title
useHead({
  title:
    props.error.statusCode === 404
      ? "Page not found"
      : `${props.error.statusCode} Error`
});
</script>
