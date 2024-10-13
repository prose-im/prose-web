<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-cloud-account-workspaces
  section-cloud-account-content(
    title="Welcome back, Valerian"
    title-emoji="👋"
    class="p-cloud-account-workspaces__content"
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
  title: "Your Prose workspaces"
});
</script>

<script>
export default {
  name: "CloudAccountWorkspacesPage"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-cloud-account-workspaces";

#{$c} {
  display: flex;
  flex-direction: column;

  #{$c}__content {
    flex: 1;
  }
}
</style>
