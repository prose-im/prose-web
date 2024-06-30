<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-index
  section-home-main
  section-home-advantages
  section-home-features
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "landing"
});

// Set page title
useHead({
  title: "Prose – All of your workplace communication lives here"
});
</script>

<script>
export default {
  name: "IndexPage"
};
</script>
