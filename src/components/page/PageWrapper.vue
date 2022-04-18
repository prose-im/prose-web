<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-wrapper
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageWrapper"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-wrapper";

// VARIABLES
$padding-sides: 20px;

.c-page-wrapper {
  width: 100%;
  max-width: calc(1200px - (2 * $padding-sides));
  margin: 0 auto;
  padding: 0 $padding-sides;
}
</style>
