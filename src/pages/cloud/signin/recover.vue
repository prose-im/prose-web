<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-cloud-signin-recover
  section-cloud-signin-authenticate(
    mode="recover"
  )
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
  title: "Reset your Prose account password"
});
</script>

<script>
export default {
  name: "CloudSigninRecoverPage"
};
</script>
