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
    )
      .c-section-home-advantages__stack(
        :key="index"
      )
        .c-section-home-advantages__column-1
          .c-section-home-advantages__illustration
            .c-section-home-advantages__illustration-inner(
              :style="{ 'background-image': 'url(' + item.image + ')'}"
            )

        .c-section-home-advantages__column-2
          .c-section-home-advantages__content
            base-title(
              tint="gradient"
            )
              span.gradient {{ item.highlight }}

              br

              | {{ item.title }}

            a(
              href="/use-cases/startup"
              class="c-section-home-advantages__action"
            )
              base-button(
                class="c-section-home-advantages__action-button"
                right-icon="arrow-right"
              )
                | Learn More

    .c-section-home-advantages__background
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
import Safe from "@/assets/images/components/section/home/SectionHomeAdvantages/safe.svg";
import Transparent from "@/assets/images/components/section/home/SectionHomeAdvantages/transparent.svg";
import Fast from "@/assets/images/components/section/home/SectionHomeAdvantages/fast.svg";

export default {
  name: "SectionHomeAdvantages",
  data() {
    return {
      advantages: [
        {
          highlight: "Speak freely",
          title: "with world-class encryption",
          image: Safe
        },
        {
          highlight: "Most performant",
          title: "experience on the market",
          image: Fast
        },
        {
          highlight: "Open source",
          title: "code accessible to everyone",
          image: Transparent
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

.c-section-home-advantages {
  padding-bottom: 200px;
  position: relative;

  #{$c}__inner {
    position: relative;
  }

  #{$c}__title {
    margin-bottom: 40px;
  }

  #{$c}__background {
    background-image: url("@/assets/images/components/base/BaseWave/prose-wave-0.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    pointer-events: none;
    width: 100%;
    height: 1040px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.5;
  }

  .gradient {
    background: radial-gradient(
      38.99% 300.85% at 0.55% 3.29%,
      #f67086 0%,
      #ea94c7 73.39%,
      #c97ebd 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

      #{$c}__illustration-inner {
        transform-origin: right;
        left: 2%;
      }
    }

    &:nth-child(odd) {
      #{$c}__illustration-inner {
        right: 2%;
        transform-origin: left;
      }
    }

    &:nth-child(2) {
      #{$c}__illustration-inner {
        top: 55%;
      }
    }

    &:nth-child(4) {
      #{$c}__illustration-inner {
        left: -7%;
      }
    }
  }

  #{$c}__column-1 {
    flex-basis: 50%;

    #{$c}__illustration {
      background: rgba(246, 247, 251, 0.9); /* TODO: commonize palette */
      border: 1px solid rgba(129, 137, 155, 0.2); /* TODO: commonize palette */
      backdrop-filter: blur(4px);
      border-radius: 36px;
      width: 100%;
      height: 500px;
      position: relative;

      &-inner {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 60%;
        transform: translateY(-50%) scale(1.2);
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
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  .c-section-home-advantages {
    #{$c}__column-1 {
      #{$c}__illustration {
        height: 400px;
        aspect-ratio: 1 / 1;
        width: auto;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-home-advantages {
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
      max-width: 600px;
    }

    #{$c}__background {
      display: none;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-section-home-advantages {
    padding-bottom: 100px;

    #{$c}__stack {
      padding: 0 0 80px 0;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-section-home-advantages {
    #{$c}__column-1 {
      #{$c}__illustration {
        height: 400px;
        aspect-ratio: auto;
        width: 100%;
      }
    }
  }
}
</style>
