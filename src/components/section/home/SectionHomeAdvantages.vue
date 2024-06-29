<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-home-advantages
  page-wrapper(class="c-section-home-advantages__inner")
    base-title(
      class="c-section-home-advantages__title"
      tint="gradient"
      align="center"
      level="large"
    )
      | Safe. Fast.

      br

      | Transparent.

    template(
      v-for="(item, index) in advantages"
      :key="'advantage_' + index"
    )
      .c-section-home-advantages__stack
        .c-section-home-advantages__column-1
          .c-section-home-advantages__illustration
            .c-section-home-advantages__illustration-inner(
              :style="{ 'background-image': 'url(' + item.image + ')'}"
            )

        .c-section-home-advantages__column-2
          .c-section-home-advantages__content
            .c-section-home-advantages__overline.u-medium
              | {{ item.overline }}

            base-title(
              tint="gradient"
            )
              span.c-section-home-advantages__gradient
                | {{ item.highlight }}

              br

              span {{ item.title }}

    base-wave(
      :variant="1"
      class="c-section-home-advantages__wave"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIllustrationSafe from "@/assets/images/components/section/home/SectionHomeAdvantages/illustration-safe.webp";
import ImageIllustrationTransparent from "@/assets/images/components/section/home/SectionHomeAdvantages/illustration-transparent.webp";
import ImageIllustrationFast from "@/assets/images/components/section/home/SectionHomeAdvantages/illustration-fast.webp";

export default {
  name: "SectionHomeAdvantages",

  data() {
    return {
      advantages: [
        {
          overline: "Secure",
          highlight: "Speak freely",
          title: "with world-class encryption",
          image: ImageIllustrationSafe
        },

        {
          overline: "Native",
          highlight: "Most performant",
          title: "experience on the market",
          image: ImageIllustrationFast
        },

        {
          overline: "Open source",
          highlight: "Inspect, audit",
          title: "and contribute to the codebase",
          image: ImageIllustrationTransparent
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
$c: ".c-section-home-advantages";

#{$c} {
  padding-bottom: 150px;
  position: relative;

  #{$c}__inner {
    position: relative;
  }

  #{$c}__title {
    margin-bottom: 40px;
  }

  #{$c}__wave {
    height: 1040px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #{$c}__gradient {
    background-image: linear-gradient(72.67deg, #f67086 21.85%, #ea94c7 91.96%);
    background-clip: text;
    padding-right: 1px;

    @include text-fill-color(transparent);
  }

  #{$c}__stack {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 128px;
    padding: 64px 0;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  #{$c}__column-1 {
    flex-basis: 50%;

    #{$c}__illustration {
      background: $color-background-tertiary;
      border: 1px solid $color-border-secondary;
      backdrop-filter: blur(10px);
      border-radius: 36px;
      height: 500px;
      aspect-ratio: 1 / 1;
      position: relative;

      #{$c}__illustration-inner {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  #{$c}__column-2 {
    flex-basis: 50%;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  #{$c}__content {
    display: flex;
    gap: 24px;
    flex-direction: column;
    width: fit-content;
    align-items: flex-start;
  }

  #{$c}__overline {
    line-height: 22px;
    border-radius: 20px;
    padding: 6px 12px;
    background-color: $color-base-grey-light;
    color: $color-base-grey-dark;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  #{$c} {
    #{$c}__column-1 {
      #{$c}__illustration {
        height: 400px;
        aspect-ratio: 1 / 1;
      }
    }

    #{$c}__column-2 {
      justify-content: flex-start;
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__stack {
      flex-direction: column;
      gap: 40px;

      &:nth-child(even) {
        flex-direction: column;
      }
    }

    #{$c}__column-1 {
      flex-basis: 100%;
      width: 100%;

      #{$c}__illustration {
        aspect-ratio: auto;
      }
    }

    #{$c}__overline {
      display: none;
    }

    #{$c}__wave {
      display: none;
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__column-1 {
      #{$c}__illustration {
        height: 400px;
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    padding-bottom: 100px;

    #{$c}__stack {
      padding: 0 0 80px 0;
    }

    #{$c}__column-1 {
      #{$c}__illustration {
        height: auto;
        aspect-ratio: 1/1;
      }
    }
  }
}
</style>
