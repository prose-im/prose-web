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
    template(
      v-slot:default
    )
      section-cloud-account-workspaces-picker(
        class="p-cloud-account-workspaces__picker"
      )

    template(
      v-slot:outer
    )
      section-cloud-account-workspaces-navigator(
        class="p-cloud-account-workspaces__navigator"
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

  #{$c}__picker {
    /* TODO */
  }

  #{$c}__navigator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 28px;
  }
}
</style>
