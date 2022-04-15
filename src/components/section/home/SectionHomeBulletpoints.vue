<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-bulletpoints
    page-wrapper
      base-title(
        level="small"
        class="c-section-home-bulletpoints__title"
      )
        | Here are the things that make Prose

        br

        base-surround(
          :variant="1"
          tint="pink"
        )
          | special

        base-space

        | versus others.

      .c-section-home-bulletpoints__grid
        .c-section-home-bulletpoints__line
          //- TODO: make each box a component w/ slots?

          .c-section-home-bulletpoints__box.c-section-home-bulletpoints__box--native-app
            .c-section-home-bulletpoints__box-illustration
              base-raster(
                name="laptop"
                class="c-section-home-bulletpoints__box-raster"
              )

            .c-section-home-bulletpoints__box-text
              .c-section-home-bulletpoints__box-text-inner
                h1.c-section-home-bulletpoints__box-title.u-title.u-bold
                  | Gorgeously-native app.

                h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
                  | Easy on the battery. And your eyes.

          .c-section-home-bulletpoints__box.c-section-home-bulletpoints__box--security
            .c-section-home-bulletpoints__box-illustration
              base-raster(
                name="shield"
                class="c-section-home-bulletpoints__box-raster"
              )

            .c-section-home-bulletpoints__box-text
              .c-section-home-bulletpoints__box-text-inner
                h1.c-section-home-bulletpoints__box-title.u-title.u-bold
                  | Paranoid secrecy.

                h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
                  | All messages

                  br

                  | are end-to-end

                  br

                  | encrypted.

        .c-section-home-bulletpoints__line
          .c-section-home-bulletpoints__box.c-section-home-bulletpoints__box--open-source
            .c-section-home-bulletpoints__box-illustration
              base-raster(
                name="folder"
                class="c-section-home-bulletpoints__box-raster"
              )

            .c-section-home-bulletpoints__box-text
              .c-section-home-bulletpoints__box-text-inner
                h1.c-section-home-bulletpoints__box-title.u-title.u-bold
                  | Open-source

                  br

                  | at its heart.

                h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
                  | Prose is built in public.

                  br

                  | Its code is fully auditable.

          .c-section-home-bulletpoints__box.c-section-home-bulletpoints__box--decentralized
            .c-section-home-bulletpoints__box-illustration
              base-raster(
                name="globe"
                class="c-section-home-bulletpoints__box-raster"
              )

            .c-section-home-bulletpoints__box-text
              .c-section-home-bulletpoints__box-text-inner
                h1.c-section-home-bulletpoints__box-title.u-title.u-bold
                  | Decentralized.

                h2.c-section-home-bulletpoints__box-subtitle.u-title.u-medium
                  | Powered by the

                  br

                  | XMPP protocol.

      .c-section-home-bulletpoints__actions
        //- TODO: target for this button?
        base-button(
          right-icon="arrow-right"
          tint="light"
          size="large"
          class="c-section-home-bulletpoints__action"
        )
          | Read more about what makes Prose different
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeBulletpoints"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-bulletpoints";

// VARIABLES
$grid-spacing: 28px;

.c-section-home-bulletpoints {
  padding-top: 62px;
  padding-bottom: 70px;

  #{$c}__title {
    text-align: center;
  }

  #{$c}__grid {
    margin-top: 82px;
    padding: 0 36px;

    #{$c}__line {
      margin-bottom: $grid-spacing;
      display: flex;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  #{$c}__box {
    height: 420px;
    margin-right: $grid-spacing;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 26px;

    &:last-child {
      margin-right: 0;
    }

    #{$c}__box-text {
      font-size: 28px;
      letter-spacing: -0.2px;
      line-height: 37px;
      padding: 34px;
      padding-top: 0;
      display: flex;
      align-items: flex-end;
    }

    #{$c}__box-subtitle {
      margin-top: 9px;
    }

    &--native-app {
      background-color: $color-base-grey-light;
      flex: 0.6;

      #{$c}__box-raster {
        margin-top: -32px;
      }

      #{$c}__box-illustration {
        text-align: center;
        flex: 0.65;
      }

      #{$c}__box-text {
        text-align: center;
        align-items: center;
        justify-content: center;
        flex: 0.35;
      }

      #{$c}__box-title {
        color: $color-base-blue-dark;
      }

      #{$c}__box-subtitle {
        color: lighten($color-base-blue-mid, 9%);
        margin-top: 5px;
      }
    }

    &--security {
      background-color: $color-base-blue-light;
      flex: 0.4;

      #{$c}__box-illustration,
      #{$c}__box-text {
        flex: 0.5;
      }

      #{$c}__box-raster {
        position: absolute;
        top: -34px;
        left: 0;
        // TODO: clip the shadow to a mask image
        box-shadow: 0 34px 56px 0 rgba(#1a92ba, 0.68);
      }

      #{$c}__box-illustration {
        text-align: left;
        margin-left: 28px;
        position: relative;
      }

      #{$c}__box-text {
        text-align: left;
      }

      #{$c}__box-title {
        color: $color-white;
      }

      #{$c}__box-subtitle {
        color: #27a4cd;
      }
    }

    &--open-source {
      background-color: $color-base-pink-light;
      flex: 1;

      #{$c}__box-illustration,
      #{$c}__box-text {
        flex: 0.5;
      }

      #{$c}__box-raster {
        position: absolute;
        top: -20px;
        right: 0;
        // TODO: clip the shadow to a mask image
        box-shadow: 0 34px 56px 0 rgba(#9d4256, 0.2);
      }

      #{$c}__box-illustration {
        position: relative;
        text-align: right;
        margin-right: 32px;
      }

      #{$c}__box-text {
        text-align: left;
      }

      #{$c}__box-title {
        color: $color-white;
      }

      #{$c}__box-subtitle {
        color: #e85677;
      }
    }

    &--decentralized {
      background-color: $color-base-blue-dark;
      flex: 1;
      align-items: center;
      justify-content: center;

      #{$c}__box-raster {
        margin-bottom: -36px;
      }

      #{$c}__box-illustration {
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      #{$c}__box-text {
        text-align: center;
        padding: 0 12px;
        position: relative;
      }

      #{$c}__box-title {
        color: $color-white;
      }

      #{$c}__box-subtitle {
        color: rgba($color-white, 0.75);
        font-size: 22px;
        letter-spacing: -0.15px;
        line-height: 26px;
        margin-top: 16px;
      }
    }
  }

  #{$c}__actions {
    text-align: center;
    margin-top: 65px;
  }
}
</style>
