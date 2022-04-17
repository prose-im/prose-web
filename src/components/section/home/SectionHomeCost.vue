<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-cost
    page-details
      template(
        slot="title"
      )
        | Host a Prose server yourself for free,

        br

        | or let us handle this for you.

      template(
        slot="description"
      )
        p
          | Install a Prose server on your company’s premises for free.

        p
          | If you are not technical, we can provide you with a one-click Prose server, hosted on our platform.

        p.u-medium
          | Easily migrate your data later between one and the other.

      template(
        slot="actions"
      )
        a.c-section-home-cost__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            size="large"
            class="c-section-home-cost__action-button"
          )
            | Read our docs on how to setup a Server

      template(
        slot="illustration"
      )
        .c-section-home-cost__illustration
          base-raster(
            :scale="0.55"
            name="coin"
            class="c-section-home-cost__illustration-coin"
          )

          .c-section-home-cost__illustration-text.u-code
            | $# docker pull prose-im/prose-pod

          .c-section-home-cost__illustration-terminal
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeCost",

  data() {
    return {
      // --> DATA <--

      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-cost";

// VARIABLES
$illustration-coin-offset-bottom: 52px;

.c-section-home-cost {
  padding-top: 75px;
  padding-bottom: 78px;

  #{$c}__illustration {
    line-height: 0;
    display: inline-block;
    position: relative;
    padding-bottom: $illustration-coin-offset-bottom;

    #{$c}__illustration-coin {
      position: absolute;
      left: 48px;
      bottom: 0;
      z-index: 2;
    }

    #{$c}__illustration-text {
      color: $color-white;
      font-size: 14px;
      line-height: 29px;
      text-align: left;
      user-select: none;
      text-shadow: 0 0 8px rgba($color-white, 0.75);
      position: absolute;
      left: 15px;
      right: 0;
      top: 41px;
      z-index: 1;
    }

    #{$c}__illustration-terminal {
      background-color: #1d1b34;
      background-image: url("~/assets/images/components/section/home/SectionHomeCost/terminal.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 475px;
      height: 319px;
      border-radius: 7px;
      box-shadow: 0 24px 32px 0 rgba(#1e1b34, 0.12);
      position: relative;
      z-index: 0;
    }
  }
}
</style>
