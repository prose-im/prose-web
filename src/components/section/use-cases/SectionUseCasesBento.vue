<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-use-cases-bento
  page-wrapper(
    class="c-section-use-cases-bento__wrapper"
  )
    base-wave(
      :variant="7"
      class="c-section-use-cases-bento__wave"
    )

    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      span(
        v-html="useCase.sectionTwoTitle"
      )

    .c-section-use-cases-bento__grid
      template(
        v-for="feature, index in useCase.features"
        :key="index"
      )
        base-icon-card(
          :icon="feature.icon"
          :tint="feature.tint"
          :image="(index === 0) ? imageSrc : ''"
          class="c-section-use-cases-bento__card"
        )
          template(
            v-slot:title
          )
            | {{ feature.title }}

          template(
            v-slot:description
          )
            | {{ feature.description }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionUseCasesBento",

  props: {
    useCase: {
      type: Object,
      required: true
    }
  },

  computed: {
    imageSrc() {
      return this.useCase.features[0].imageSrc;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-use-cases-bento";

#{$c} {
  padding: 250px 0 150px;
  position: relative;

  #{$c}__wrapper {
    position: relative;
  }

  #{$c}__grid {
    display: grid;
    max-width: 800px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 64px;
  }

  #{$c}__card {
    &:nth-child(1) {
      grid-column: 1 / 3;
    }
  }

  #{$c}__wave {
    height: 550px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__wave {
      display: none;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    padding: 150px 0 0;

    #{$c}__grid {
      grid-template-columns: repeat(1, 1fr);
    }

    #{$c}__card {
      &:nth-child(1) {
        grid-column: 1 / 1;
      }
    }
  }
}
</style>
