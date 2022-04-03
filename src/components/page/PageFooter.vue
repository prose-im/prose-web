<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-footer
    page-wrapper
      .c-page-footer__main

      .c-page-footer__copyright
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageFooter"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-footer";

.c-page-footer {
  border-top: 1px solid $color-border-secondary;
  padding: 48px 0 24px;
}
</style>
