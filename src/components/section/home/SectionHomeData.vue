<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-data
    page-details(
      align="right"
    )
      template(
        slot="title"
      )
        | Your chat data. On your own domain.

        br

        | All encrypted. You own it.

      template(
        slot="description"
      )
        p
          | Nowadays, all modern messaging services store all their user messages in a huge database, in the clear.

        p
          | Not only is the data centralized in a single geographic location, but those services are also more prone to wide-scale outages, should something go wrong with the servers.

        p.u-medium
          | With Prose, you host the server, on your terms.

      template(
        slot="actions"
      )
        a.c-section-home-data__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            size="large"
            class="c-section-home-data__action-button"
          )
            | Read how Prose secures your Data

      template(
        slot="illustration"
      )
        .c-section-home-data__illustration
          .c-section-home-data__illustration-orbit
            .c-section-home-data__illustration-satellites
              base-raster(
                v-for="satellite in illustrationSatellites"
                :key="'satellite_' + satellite.name"
                :name="satellite.name"
                :scale="satellite.scale"
                :class=`[
                  "c-section-home-data__illustration-satellite",
                  "c-section-home-data__illustration-satellite--" + satellite.name
                ]`
              )

            .c-section-home-data__illustration-center
              base-raster(
                name="earth"
                class="c-section-home-data__illustration-planet"
              )

              .c-section-home-data__illustration-label-wrap
                span.c-section-home-data__illustration-label.u-bold
                  | Your Prose server
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeData",

  data() {
    return {
      // --> DATA <--

      illustrationSatellites: [
        {
          name: "magnifier",
          scale: 0.325
        },

        {
          name: "bubble",
          scale: 0.4
        },

        {
          name: "bell",
          scale: 0.25
        },

        {
          name: "plane",
          scale: 0.375
        },

        {
          name: "lock",
          scale: 0.8
        }
      ],

      // TODO: bind proper page
      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-data";

// VARIABLE
$center-size: 160px;
$orbit-size: 380px;

.c-section-home-data {
  padding-top: 75px;
  padding-bottom: 45px;

  #{$c}__illustration {
    line-height: 0;
    padding-top: 25px;
    display: inline-block;
    position: relative;

    #{$c}__illustration-center {
      // TODO: color from variable
      background-image: linear-gradient(
        180deg,
        #6edbff 0%,
        rgba(#6edbff, 0) 100%
      );

      width: $center-size;
      height: $center-size;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
    }

    #{$c}__illustration-satellites {
      #{$c}__illustration-satellite {
        position: absolute;

        &--magnifier {
          left: 3%;
          top: 8%;
        }

        &--bubble {
          right: 21%;
          top: -4%;
        }

        &--bell {
          left: 1%;
          bottom: 10%;
        }

        &--plane {
          right: 16%;
          bottom: -2%;
          transform: scaleX(-1);
        }

        &--lock {
          right: -6%;
          top: 41%;
        }
      }
    }

    #{$c}__illustration-planet {
      border-radius: 100%;
      box-shadow: 0 30px 50px 0 rgba(#1a92ba, 0.54);
    }

    #{$c}__illustration-label-wrap {
      text-align: center;
      position: absolute;
      bottom: -16px;
      left: 0;
      right: 0;

      #{$c}__illustration-label {
        // TODO: color from variable
        background-color: #176988;
        font-size: 12.5px;
        color: $color-white;
        letter-spacing: -0.1px;
        line-height: 26px;
        user-select: none;
        padding: 0 15px 2px;
        border-radius: 32px;
        display: inline-block;
      }
    }

    #{$c}__illustration-orbit {
      border: 2px dashed rgba($color-base-grey-mid, 0.2);
      width: $orbit-size;
      height: $orbit-size;
      position: relative;
      border-radius: 100%;
    }
  }
}
</style>
