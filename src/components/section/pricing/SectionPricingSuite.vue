<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-suite
  page-wrapper(
    class="c-section-pricing-suite__wrapper"
  )
    base-descripted-title(
      level="medium"
      align="center"
      class="c-section-pricing-suite__title"
    )
      template(
        v-slot:title
      )
        | Access the complete Prose suite

      template(
        v-slot:description
      )
        p
          | When you create your Prose Cloud server with us, your team gets access to all Prose apps at no extra cost.

        p.u-medium
          | You also get your own admin dashboard, where you can manage your server.

    .c-section-pricing-suite__parts
      .c-section-pricing-suite__part(
        v-for="(part, index) in parts"
        :key="'part_' + index"
      )
        .c-section-pricing-suite__part-preview(
          :style=`{
            backgroundImage: ("url(" + part.preview + ")")
          }`
        )

        base-plate(
          :title="part.title"
          :description="part.description"
          :icon="part.icon"
          class="c-section-pricing-suite__part-plate"
        )

    base-wave(
      :variant="8"
      class="c-section-pricing-suite__wave"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImagePlateAppIcon from "@/assets/images/components/section/pricing/SectionPricingSuite/plate-app-icon.svg?raw";
import ImagePlateAdminIcon from "@/assets/images/components/section/pricing/SectionPricingSuite/plate-admin-icon.svg?raw";

import ImagePreviewApp from "@/assets/images/components/section/pricing/SectionPricingSuite/preview-app.webp";
import ImagePreviewAdmin from "@/assets/images/components/section/pricing/SectionPricingSuite/preview-admin.webp";

export default {
  name: "SectionPricingSuite",

  data() {
    return {
      // --> DATA <--

      parts: [
        {
          title: "Prose App",
          description:
            "Let your team download Prose apps for macOS or Windows, or their phone.",
          icon: ImagePlateAppIcon,
          preview: ImagePreviewApp
        },

        {
          title: "Prose Admin Dashboard",
          description:
            "Manage your server, invite members, customize it and monitor things. Available on the Web.",
          icon: ImagePlateAdminIcon,
          preview: ImagePreviewAdmin
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-suite";

// VARIABLES
$part-preview-width-base: 640px;
$part-preview-height-base: 416px;

$part-overlap-vertical: 64px;
$part-overlap-horizontal: 160px;

#{$c} {
  position: relative;

  #{$c}__wrapper {
    position: relative;
  }

  #{$c}__title,
  #{$c}__parts {
    position: relative;
    z-index: 1;
  }

  #{$c}__parts {
    margin-top: 54px;
    display: flex;
    justify-content: center;

    #{$c}__part {
      pointer-events: none;
      position: relative;

      #{$c}__part-preview {
        border: 0.5px solid rgba($color-base-blue-dark, 0.18);
        outline: 3px solid rgba($color-base-blue-dark, 0.02);
        background-color: $color-background-secondary;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: crosshair;
        pointer-events: initial;
        width: $part-preview-width-base;
        aspect-ratio: ($part-preview-width-base / $part-preview-height-base);
        border-radius: 6px;
        box-shadow: 0 2px 10px 0 rgba($color-black, 0.02);
      }

      #{$c}__part-plate {
        margin: 24px auto 0;
      }

      &:nth-child(1) {
        #{$c}__part-plate {
          transform: translateX(-1 * calc($part-overlap-horizontal / 2));
        }
      }

      &:nth-child(2) {
        margin-top: $part-overlap-vertical;
        margin-left: -$part-overlap-horizontal;
      }

      &:hover {
        z-index: 1;
      }
    }
  }

  #{$c}__wave {
    margin-top: 48px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__parts {
      display: block;

      #{$c}__part {
        width: 100%;

        #{$c}__part-preview {
          width: auto;
          max-width: $part-preview-width-base;
          margin: 0 auto;
        }

        &:nth-child(n) {
          margin: 54px auto 0;

          #{$c}__part-plate {
            transform: none;
          }
        }

        &:nth-child(1) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
