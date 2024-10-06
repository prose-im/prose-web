<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-signup-index
  section-signup-title(
    :stage="stage"
  )

  section-signup-form(
    :stage="stage"
  )

  section-signup-progress(
    :stage="stage"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "embedding"
});

// Set page title
useHead({
  title: "Sign up to Prose"
});
</script>

<script>
export default {
  name: "SignupIndexPage",

  data() {
    return {
      // --> STATE <--

      stage: 1
    };
  }
};
</script>
