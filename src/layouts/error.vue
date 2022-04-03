<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  page-container
    page-header

    page-error(
      :error="error"
    )

    page-footer
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
