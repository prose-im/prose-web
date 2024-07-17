<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-container(
  class="l-default"
)
  page-header

  page-content
    slot

  page-entice
  page-footer
</template>
