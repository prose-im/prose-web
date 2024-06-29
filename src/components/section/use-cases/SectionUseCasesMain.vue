<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-use-cases-main
  page-main-title(
    align="left"
  )
    template(
      v-slot:overline
    )
      | {{ useCase.overline }}

    template(
      v-slot:title
    )
      span(
        v-html="useCase.sectionOneTitle"
      )

    template(
      v-slot:action
    )
      a(
        :href="$config.url.prose_app"
      )
        base-button(
          right-icon="arrow-right"
          tint="fancy"
          size="large"
          class="c-app-download__action-button"
        )
          | Access Prose Web App

  page-wrapper
    base-sine(
      :color="useCase.sineColor"
      class="c-section-use-cases-main__illustration"
    )
      .c-section-use-cases-main__illustration-center(
        :style="`--mobile-image: url(${mobileImage}); --desktop-image: url(${desktopImage})`"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionUseCasesMain",

  props: {
    useCase: {
      type: Object,
      required: true
    }
  },

  computed: {
    mobileImage() {
      return require(`~/assets/images/components/section/` +
        `usecases${this.useCase.mobileImage}`);
    },

    desktopImage() {
      return require(`~/assets/images/components/section/` +
        `usecases${this.useCase.desktopImage}`);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-use-cases-main";

#{$c} {
  #{$c}__illustration {
    margin-top: -24px;
    padding-top: 120px;
  }

  #{$c}__illustration-center {
    background-image: var(--desktop-image);
    position: absolute;
    background-position: bottom;
    background-size: contain;
    top: 0;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__illustration-center {
      background-image: var(--mobile-image);
      left: 2.5%;
    }
  }
}
</style>
