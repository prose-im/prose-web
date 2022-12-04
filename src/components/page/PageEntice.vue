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
    .c-page-entice__bg-illustration
    page-wrapper(class="c-page-entice__wrapper")
      base-title(level="large", tint="gradient", align="center")
        | Up and running
        br 
        | in 2 minutes
      .c-page-entice__options
        .c-page-entice__option.c-page-entice__option-hosted
          .c-page-entice__option-title
            base-title(level="mini")
              | We host it for you 
            p We provide a one-click server hosted on our platform.
          .c-page-entice__option-illustration
        .c-page-entice__option.c-page-entice__option-free
          .c-page-entice__option-title
            base-title(level="mini")
              | You host it for free
            p Install a Prose server on your company’s premises for free.
          .c-page-entice__option-illustration
      
      .c-page-entice__box
        .c-page-entice__content
          .c-page-entice__content-inner
            base-title(level="large", tint="light")
              | Join the waitlist

            .c-page-entice__text
              p
                | Available soon on all major devices.

            .c-page-entice__actions
              .c-page-entice__subscribe
                input(type="email", class="c-page-entice__action-input")
                a(
                  :href="actionTargets.start"
                  class="c-page-entice__action"
                )
                  base-button(
                    class="c-page-entice__action-button"
                    size="large"
                    right-icon="arrow-right"
                    bolder
                    darker
                    tint="gradient"
                  )
                    | Submit

              nuxt-link(
                v-if="false"
                class="c-page-entice__action c-page-entice__action--link u-medium"
                to="/downloads/"
              )
                image-content-actions-download-icon(
                  class="c-page-entice__action-icon"
                )

                | Download Prose Apps
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageContentActionsDownloadIcon from "~/assets/images/components/page/PageEntice/content-actions-download-icon.svg?inline";

export default {
  name: "PageEntice",

  components: { ImageContentActionsDownloadIcon },

  data() {
    return {
      // --> DATA <--

      actionTargets: {
        start: `${this.$config.url.prose_docs}/guides/start/`
      }
    };
  },

  computed: {
    hasActionDownload() {
      // Hide download link on downloads page
      return this.$route.name !== "downloads";
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-entice";

.c-page-entice {
  background-color: $color-background-primary;
  padding-top: 20px;
  padding-bottom: 120px;
  position: relative;

  #{$c}__wrapper {
    z-index: 1;
    position: relative;
  }

  #{$c}__bg-illustration {
    background-image: url("@/assets/images/components/base/BaseWave/prose-wave-3.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    position: absolute;
    opacity: 0.5;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 1800px;
  }

  #{$c}__options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 64px 0 40px;

    #{$c}__option {
      background: rgba(246, 247, 251, 0.9);
      backdrop-filter: blur(16px);
      border: 1px solid #81899b33;
      overflow: hidden;
      border-radius: 32px;

      &-title {
        padding: 48px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
          color: $color-base-blue-mid;
        }
      }

      #{$c}__option-illustration {
        height: 280px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top left;
      }

      &-hosted {
        #{$c}__option-illustration {
          background-image: url("~/assets/images/components/page/PageEntice/hosted-by-prose.svg");
        }
      }

      &-free {
        #{$c}__option-illustration {
          background-image: url("~/assets/images/components/page/PageEntice/free-hosting.svg");
        }
      }
    }
  }

  #{$c}__box {
    background-color: #181a1b;
    background-image: radial-gradient(
        circle at 0% 0%,
        rgba(#528feb, 0.475) 0%,
        rgba(#528feb, 0.2) 35%,
        rgba(#528feb, 0) 60%
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba(#9a6bbe, 0.475) 0%,
        rgba(#9a6bbe, 0.2) 35%,
        rgba(#9a6bbe, 0) 60%
      );

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

    #{$c}__content-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-white;
      padding: 80px 0;
    }

    #{$c}__title {
      font-size: 30px;
      letter-spacing: -0.25px;
      line-height: 42px;
    }

    #{$c}__text {
      font-size: 22px;
      line-height: 22px;
      margin-top: 20px;
      color: $color-base-blue-mid;
    }

    #{$c}__actions {
      margin-top: 44px;
      min-width: 400px;

      #{$c}__action {
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

      #{$c}__subscribe {
        display: flex;
        padding: 4px 4px 4px 20px;
        border: 1px solid #81899b;
        border-radius: 32px;
      }

      #{$c}__action-input {
        background-color: transparent;
        color: $color-white;
        border: none;
        flex-grow: 1;

        &:focus,
        &:active {
          outline: none;
        }
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      #{$c}__title {
        font-size: 26px;
      }

      #{$c}__text {
        font-size: 14.5px;
      }
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      #{$c}__content-inner {
        flex: 1;
      }

      #{$c}__content-inner,
      #{$c}__text {
        text-align: center;
      }
    }

    #{$c}__illustration {
      display: none;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      padding: 0 28px;

      #{$c}__content-inner {
        padding-top: 36px;
        padding-bottom: 46px;
      }

      #{$c}__title {
        font-size: 22px;
        line-height: 36px;
      }

      #{$c}__text {
        p {
          margin-bottom: 5px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      #{$c}__actions {
        #{$c}__action {
          margin-right: 0;

          &:nth-child(n + 2) {
            display: none;
          }
        }
      }
    }
  }
}
</style>
