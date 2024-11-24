<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-cloud-account-settings
  section-cloud-account-content(
    title="Your account settings"
    class="p-cloud-account-settings__content"
  )
    section-cloud-account-settings-form(
      class="p-cloud-account-settings__form"
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
  title: "Your Prose account settings"
});
</script>

<script>
export default {
  name: "CloudAccountSettingsPage"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-cloud-account-settings";

#{$c} {
  display: flex;
  flex-direction: column;

  #{$c}__content {
    flex: 1;
  }
}
</style>
