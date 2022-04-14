<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-showcase
    page-wrapper(
      class="c-section-home-showcase__inner"
    )
      base-title(
        level="small"
        tint="light"
        class="c-section-home-showcase__title"
      )
        | A single app, where all your

        br

        | workspace magic happens.

    .c-section-home-showcase__background
      span.c-section-home-showcase__separator
      span.c-section-home-showcase__color
      span.c-section-home-showcase__blur
      span.c-section-home-showcase__image
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeShowcase"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-showcase";

.c-section-home-showcase {
  padding-top: 60px;
  padding-bottom: 54px;
  position: relative;

  #{$c}__inner {
    position: relative;
    z-index: 3;
  }

  #{$c}__title {
    text-align: center;
  }

  #{$c}__background {
    &,
    #{$c}__separator,
    #{$c}__color,
    #{$c}__blur,
    #{$c}__image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    #{$c}__separator {
      border-top: 1px solid rgba($color-base-blue-dark, 0.18);
    }

    #{$c}__color {
      background: rgba(#9600ff, 0.2);
      z-index: 2;
    }

    #{$c}__blur {
      background: rgba($color-black, 0.5);
      backdrop-filter: blur(50px);
      z-index: 1;
    }

    #{$c}__image {
      background-image: url("~/assets/images/components/section/home/SectionHomeShowcase/background-image.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 0;
    }
  }
}
</style>
