<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-entice
    page-wrapper
      .c-page-entice__box
        .c-page-entice__content
          .c-page-entice__content-inner
            h1.c-page-entice__title.u-title.u-bold
              | Get started with Prose for free

            .c-page-entice__text
              p
                | Join a growing decentralized messaging network of 100M+ users.

              p.u-bold
                | Create your server in a few clicks. Invite your team in no more.

            .c-page-entice__actions
              base-button(
                class="c-page-entice__action"
                size="large"
                right-icon="arrow"
                emphasis
              )
                | Start with Prose

              nuxt-link(
                class="c-page-entice__action c-page-entice__action--link u-medium"
                to="/downloads/"
              )
                image-content-actions-download-icon(
                  class="c-page-entice__action-icon"
                )

                | Download Prose Apps

        .c-page-entice__illustration
          .c-page-entice__logo
            image-illustration-logo-icon(
              class="c-page-entice__logo-icon"
            )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageContentActionsDownloadIcon from "~/assets/images/components/page/PageEntice/content-actions-download-icon.svg?inline";
import ImageIllustrationLogoIcon from "~/assets/images/components/page/PageEntice/illustration-logo-icon.svg?inline";

export default {
  name: "PageEntice",

  components: { ImageContentActionsDownloadIcon, ImageIllustrationLogoIcon }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-entice";

// VARIABLES
$logo-size: 420px;

.c-page-entice {
  background-color: $color-background-primary;
  padding-top: 20px;
  padding-bottom: 120px;

  #{$c}__box {
    background-image: radial-gradient(
        circle at 45% 0%,
        rgba(#b3358b, 0.475) 0%,
        rgba(#bf4598, 0.4) 35%,
        rgba($color-white, 0) 100%
      ),
      linear-gradient(
        -55deg,
        rgba($color-white, 0) 0%,
        rgba(#294f94, 0.75) 75%,
        rgba(#051d46, 0.9) 100%
      ),
      linear-gradient(133deg, #3e4d80 0%, #415587 44%, #6edafd 100%);

    min-height: 320px;
    display: flex;
    position: relative;
    overflow: hidden;

    &,
    &::before {
      border-radius: 22px;
    }

    &::before {
      content: "";
      border: 1px solid rgba($color-base-blue-dark, 0.06);
      pointer-events: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }

  #{$c}__content {
    padding: 0 60px;
    flex: 1;
    display: flex;
    align-items: center;

    #{$c}__content-inner {
      color: $color-white;
      padding-top: 42px;
      padding-bottom: 56px;
    }

    #{$c}__title {
      font-size: 30px;
      letter-spacing: -0.25px;
      line-height: 42px;
    }

    #{$c}__text {
      font-size: 15.5px;
      letter-spacing: -0.15px;
      line-height: 26px;
      text-align: justify;
      margin-top: 20px;
    }

    #{$c}__actions {
      margin-top: 44px;

      #{$c}__action {
        margin-right: 36px;

        &:last-child {
          margin-right: 0;
        }

        #{$c}__action-icon {
          vertical-align: middle;
          width: auto;
          height: 14px;
          margin-top: -2px;
          margin-right: 5px;
        }

        &--link {
          color: $color-white;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  #{$c}__illustration {
    width: 35%;
    flex: 0 0 auto;
    position: relative;

    #{$c}__logo {
      background-image: url("~/assets/images/components/page/PageEntice/illustration-logo-background.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-color: $color-background-secondary;
      width: $logo-size;
      height: $logo-size;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -38px;
      right: 10px;
      border-radius: 80px;
      box-shadow: 0 2px 6px 0 rgba($color-black, 0.25),
        0 4px 9px 0 rgba($color-black, 0.09);
      transform: rotate(-25deg);

      #{$c}__logo-icon {
        width: 72%;
        height: auto;
        margin-right: -2%;
        margin-bottom: -5%;
      }
    }
  }
}
</style>