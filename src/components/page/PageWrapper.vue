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
.c-page-wrapper {
  width: calc(100% - (2 * $page-wrapper-default-padding-sides));

  max-width: calc(
    $page-wrapper-max-width - (2 * $page-wrapper-default-padding-sides)
  );

  margin: 0 auto;
  padding: 0 $page-wrapper-default-padding-sides;
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  .c-page-wrapper {
    max-width: auto;
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  .c-page-wrapper {
    width: calc(100% - (2 * $page-wrapper-medium-padding-sides));
    padding: 0 $page-wrapper-medium-padding-sides;
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  .c-page-wrapper {
    width: calc(100% - (2 * $page-wrapper-small-padding-sides));
    padding: 0 $page-wrapper-small-padding-sides;
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-wrapper {
    width: calc(100% - (2 * $page-wrapper-tiny-padding-sides));
    padding: 0 $page-wrapper-tiny-padding-sides;
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-wrapper {
    width: calc(100% - (2 * $page-wrapper-lilliput-padding-sides));
    padding: 0 $page-wrapper-lilliput-padding-sides;
  }
}
</style>
