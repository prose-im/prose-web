<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-use-cases-discover
  page-wrapper(
    class="c-section-use-cases-discover__wrapper"
  )
    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      | Discover more

      br

      | use cases

    .c-section-use-cases-discover__options
      template(
        v-for="useCase, index in otherCases"
      )
        nuxt-link(
          :to="useCase.url",
          :key="index",
          class="c-section-use-cases-discover__option"
        )
          base-card(
            :media="useCase.media"
            class="c-section-use-cases-discover__option-card"
          )
            template(
              slot="title"
            )
              | {{ useCase.title }}

            template(
              slot="description"
            )
              | {{ useCase.description }}

            template(
              slot="link"
            )
              base-button(
                right-icon="arrow-right"
                tint="none"
                size="simple"
              )
                | Learn More
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionUseCasesDiscover",

  props: {
    otherCases: {
      type: Array,
      required: true
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-use-cases-discover";

.c-section-use-cases-discover {
  background-color: $color-background-primary;
  position: relative;

  #{$c}__wrapper {
    padding-top: 120px;
    padding-bottom: 120px;
    z-index: 1;
    position: relative;
  }

  #{$c}__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin: 64px 0 40px;
  }

  #{$c}__option {
    width: 100%;
    display: flex;

    #{$c}__option-card {
      box-shadow: 0px 28px 36px 0px #2b255d15;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-use-cases-discover {
    #{$c}__options {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
