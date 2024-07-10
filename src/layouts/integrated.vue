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
  class="l-integrated"
)
  page-header

  page-content(
    class="l-integrated__content"
    showcase
  )
    slot

  page-entice(
    :options="false"
  )

  page-footer
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".l-integrated";

#{$c} {
  #{$c}__content {
    margin-top: -($page-header-bar-height / 2);
  }
}
</style>
