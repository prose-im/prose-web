<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-container
  page-header

  page-content
    slot

  page-entice(
    :options="false"
  )

  page-footer
</template>
