<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
    TEMPLATE
    ********************************************************************** -->

<template lang="pug">
.p-use-case
    section-cases-main(
      class="p-cases-index__main"
    )

    section-cases-bento(
      class="p-cases-index__bento"
    )

    section-cases-tabs(
      class="p-cases-index__bento"
    )

</template>

<!-- **********************************************************************
    SCRIPT
    ********************************************************************** -->

<script>
export default {
  name: "UseCases",
  layout: "useCase",

  head: {
    title: "Prose for developers"
  },
};
</script>

<!-- **********************************************************************
    STYLE
    ********************************************************************** -->

<style lang="scss">
$c: ".p-use-case";
</style>
