<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-downloads-archives
    page-wrapper
      .c-section-downloads-archives__inner
        base-direction(
          title="Looking for a past version?"
          description="We keep an archive of all past versions of our apps."
          action-label="Go to the Versions archive"
          action-target="/changelog/"
          raster="clock"
          raster-flip="horizontal"
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionDownloadsArchives"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-downloads-archives";

.c-section-downloads-archives {
  #{$c}__inner {
    display: flex;
    justify-content: center;
  }
}
</style>
