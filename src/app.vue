<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
nuxt-layout(
  layout="default"
)
  nuxt-loading-indicator(
    :throttle="250"
    :duration="3000"
    :height="3"
    :color="$config.public.modifiers.announcement ? '#0f2a5b' : '#ff88a3'"
    error-color="#db0031"
  )

  nuxt-page
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
// Set page title (default title if none set)
useHead({
  title: "Prose"
});
</script>
