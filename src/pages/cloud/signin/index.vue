<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-cloud-signin-index
  section-cloud-signin-authenticate
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "embedding"
});

// Disable indexing of page
defineRouteRules({
  robots: false
});

// Set page title
useHead({
  title: "Sign in to Prose Cloud"
});
</script>

<script>
export default {
  name: "CloudSigninIndexPage"
};
</script>
