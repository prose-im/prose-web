<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-container
  page-header(
    embedded
  )

  page-content(
    showcase
  )
    slot

  page-entice
  page-footer
</template>
