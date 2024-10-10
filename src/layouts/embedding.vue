<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-container(
  class="l-embedding"
)
  page-header(
    class="l-embedding__header"
  )

  page-content(
    class="l-embedding__content"
    embedded
  )
    slot
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".l-embedding";

#{$c} {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;

  #{$c}__header {
    flex: 0 0 auto;
  }

  #{$c}__content {
    display: flex;
    overflow: hidden;

    &,
    > * {
      flex: 1;
    }
  }
}
</style>
