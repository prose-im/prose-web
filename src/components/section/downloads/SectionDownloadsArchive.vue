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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 128px;
  }

  #{$c}__col-1 {
    flex: 1 0 50%;
    width: 100%;
    height: 600px;

    #{$c}__illustration {
      background-image: url("@/assets/images/components/section/download/version-archive.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  #{$c}__content {
    flex-basis: 50%;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  @media (max-width: $screen-medium-width-breakpoint) {
    #{$c}__col-1 {
      flex-basis: 100%;
      height: 500px;
    }

    #{$c}__inner {
      grid-template-columns: repeat(1, 1fr);
      gap: 24px;
    }
  }

  @media (max-width: $screen-lilliput-width-breakpoint) {
    #{$c}__col-1 {
      height: 400px;
      width: 100%;
    }
  }
}
</style>
