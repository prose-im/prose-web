<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-downloads
    section-downloads-main(
      class="p-downloads__main"
    )

    section-downloads-platforms(
      class="p-downloads__platforms"
    )

    section-downloads-archive(
      class="p-downloads__archive"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "DownloadsPage",

  head: {
    title: "Download Prose apps"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-downloads";

#{$c}__platforms {
  margin-top: 90px;
}

#{$c}__archive {
  margin-top: 64px;
}
</style>
