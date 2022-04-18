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
        align="center"
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

      base-bulletpoint-grid(
        :style="gridStyle"
        class="c-section-home-bulletpoints__grid"
      )
        template(
          slot="line-1"
        )
          base-bulletpoint(
            raster="laptop"
            class="c-section-home-bulletpoints__box c-section-home-bulletpoints__box--native-app"
            illustration-class="c-section-home-bulletpoints__box-illustration"
            raster-class="c-section-home-bulletpoints__box-raster"
            text-class="c-section-home-bulletpoints__box-text"
          )
            h1.c-section-home-bulletpoints__box-title.u-title.u-bold
              | Gorgeously-native app.

            h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
              | Easy on the battery. And your eyes.

          base-bulletpoint(
            raster="shield"
            class="c-section-home-bulletpoints__box c-section-home-bulletpoints__box--security"
            illustration-class="c-section-home-bulletpoints__box-illustration"
            raster-class="c-section-home-bulletpoints__box-raster"
            text-class="c-section-home-bulletpoints__box-text"
          )
            h1.c-section-home-bulletpoints__box-title.u-title.u-bold
              | Paranoid secrecy.

            h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
              | All messages

              br

              | are end-to-end

              br

              | encrypted.

        template(
          slot="line-2"
        )
          base-bulletpoint(
            raster="folder"
            class="c-section-home-bulletpoints__box c-section-home-bulletpoints__box--open-source"
            illustration-class="c-section-home-bulletpoints__box-illustration"
            raster-class="c-section-home-bulletpoints__box-raster"
            text-class="c-section-home-bulletpoints__box-text"
          )
            h1.c-section-home-bulletpoints__box-title.u-title.u-bold
              | Open-source

              br

              | at its heart.

            h2.c-section-home-bulletpoints__box-subtitle.u-title.u-bold
              | Prose is built in public.

              br

              | Its code is fully auditable.

          base-bulletpoint(
            raster="globe"
            class="c-section-home-bulletpoints__box c-section-home-bulletpoints__box--decentralized"
            illustration-class="c-section-home-bulletpoints__box-illustration"
            raster-class="c-section-home-bulletpoints__box-raster"
            text-class="c-section-home-bulletpoints__box-text"
          )
            h1.c-section-home-bulletpoints__box-title.u-title.u-bold
              | Decentralized.

            h2.c-section-home-bulletpoints__box-subtitle.u-title.u-medium
              | Powered by the

              br

              | XMPP protocol.

      .c-section-home-bulletpoints__actions
        a.c-section-home-bulletpoints__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            tint="light"
            size="large"
            class="c-section-home-bulletpoints__action-button"
          )
            | Read more about what makes Prose different
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeBulletpoints",

  props: {
    gridPaddingSides: {
      type: String,
      default: "0px"
    }
  },

  data() {
    return {
      // --> DATA <--

      // TODO: bind proper page
      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  },

  computed: {
    gridStyle() {
      return {
        paddingLeft: this.gridPaddingSides,
        paddingRight: this.gridPaddingSides
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-bulletpoints";

.c-section-home-bulletpoints {
  padding-top: 62px;
  padding-bottom: 70px;

  #{$c}__grid {
    margin-top: 82px;
  }

  #{$c}__box {
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
        filter: drop-shadow(0 34px 30px rgba(#1a92ba, 0.6));
      }

      #{$c}__box-illustration {
        text-align: left;
        margin-left: 28px;
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
        top: -14px;
        right: 0;
        filter: drop-shadow(0 34px 40px rgba(#9d4256, 0.4));

        // Notice: this fixes a weird rendering issue of the 'drop-shadow' \
        //   filter in Safari, where adding bottom empty spacing prevents \
        //   Safari from cutting the overflowing shadow that is generated.
        background-position: top;
        padding-bottom: 20px;
      }

      #{$c}__box-illustration {
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
