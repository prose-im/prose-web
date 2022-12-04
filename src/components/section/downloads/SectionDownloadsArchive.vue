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
        .c-section-downloads-archives__col-1
          .c-section-downloads-archives__illustration
        .c-section-downloads-archives__col-2
          .c-section-downloads-archives__content
            base-title(tint="gradient")
              | Looking for a past version ?
            a(
              href="/changelog/"
              class="c-page-header__action"
            )
              base-button(
                class="c-page-header__action-button"
                right-icon="arrow-right"
              )
                | Get to the version archive
        
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
  position: relative;
  overflow: visible;
  
  #{$c}__inner {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  #{$c}__col-1 {
    flex-basis: 50%;

    #{$c}__illustration {
      background-image: url("@/assets/images/components/section/download/version-archive.svg");
      background-size: contain;
      background-repeat: no-repeat;
      left: 0;
      left: 0;
      width: 600px;
      height: 600px;
    }
  }

  #{$c}__content {
    flex-basis: 50%;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }
}
</style>
