<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-about-manifesto
  page-wrapper(
    class="c-section-about-manifesto__inner"
  )
    .c-section-about-manifesto__background

    base-title(
      class="c-section-about-manifesto__title"
      tint="gradient"
    )
      | Stories from Prose Foundation

    .c-section-about-manifesto__columns
      .c-section-about-manifesto__column-1
        .c-section-about-manifesto__column-1-illustration

      .c-section-about-manifesto__column-2
        base-title(
          tint="gradient"
          align="left"
        )

        .c-section-about-manifesto__description
          base-title(
            class="c-section-about-manifesto__description-title"
            tint="dark"
            level="small"
          )
            | Manifesto

          p
            | We are a team of passionate developers who are creating a workspace communication app that is simple, fun, and easy to use.

          p
            | Our app allows users to communicate with each other in a variety of ways, including text, audio, and video. We are committed to creating an app that is accessible to everyone, regardless of their location or device.

          p
            | We believe that communication should be easy and convenient, which is why we are constantly improving our app to make it the best it can be. Our goal is to make sure that our app is the go-to choice for anyone who wants to chat with their friends, family, or colleagues. Thank you for considering our app!

          .c-section-about-manifesto__description-illustration
    </template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionAboutManifesto"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-about-manifesto";

.c-section-about-manifesto {
  position: relative;
  padding: 80px 0;

  #{$c}__background {
    background-image: url("@/assets/images/components/base/BaseWave/prose-wave-1.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    pointer-events: none;
    width: 100%;
    height: 880px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }

  #{$c}__inner {
    position: relative;
    z-index: 1;
  }

  #{$c}__columns {
    display: flex;
    margin-top: 48px;

    #{$c}__column-1 {
      flex-basis: 40%;
      display: flex;
      align-items: center;
    }

    #{$c}__column-2 {
      flex-basis: 60%;
    }
  }

  #{$c}__description {
    font-size: 22px;
    line-height: 28px;
    color: $color-base-blue-mid;
  }

  #{$c}__description p {
    margin: 24px 0;
  }

  #{$c}__column-1-illustration {
    /* TODO: move this to local URL */
    background-image: url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80");

    margin-top: 64px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 256px;
    width: 256px;
    overflow: hidden;
    border-radius: 16px;
  }

  #{$c}__description-illustration {
    /* TODO: move this to local URL */
    background-image: url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80");

    margin-top: 64px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-about-manifesto {
    #{$c}__columns {
      #{$c}__column-1 {
        display: none;
      }

      #{$c}__column-2 {
        flex-basis: 100%;
      }
    }
  }
}
</style>