<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-changelog
    section-changelog-main(
      class="p-changelog__main"
    )

    section-changelog-versions(
      class="p-changelog__versions"
    )

    section-changelog-background(
      class="p-changelog__background"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ChangelogPage",
  layout: "simple",

  head: {
    title: "Prose version history"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-changelog";

.p-changelog {
  #{$c}__main,
  #{$c}__versions {
    z-index: 1;
    position: relative;
  }

  #{$c}__versions {
    margin-top: 36px;
  }

  #{$c}__background {
    pointer-events: none;
  }
}
</style>
