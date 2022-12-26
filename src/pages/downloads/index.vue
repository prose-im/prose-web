<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-downloads-index
  section-downloads-main(
    class="p-downloads-index__main"
  )

  section-downloads-platforms(
    class="p-downloads-index__platforms"
  )

  section-downloads-archive(
    class="p-downloads-index__archive"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "DownloadsIndexPage",

  head: {
    title: "Download Prose apps"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-downloads-index";

#{$c}__platforms {
  margin-top: 90px;
}

#{$c}__archive {
  margin-top: 64px;
}
</style>
