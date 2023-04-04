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
      slot="overline"
    )
      | {{ useCase.overline }}

    template(
      slot="title"
    )
      span(
        v-html="useCase.h1"
      )

    template(
      slot="action"
    )
      a(
        href="#"
        class=""
        slot="default"
      )
        base-button(
          @click.prevent="onActionButtonClick"
          right-icon="arrow-right"
          tint="fancy"
          size="large"
          class="c-app-download__action-button"
        )
          | Get early access

  page-wrapper
    base-sine(
      :color="useCase.coverBg"
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
        `use-cases${this.useCase.mobileImage}`);
    },

    desktopImage() {
      return require(`~/assets/images/components/section/` +
        `use-cases${this.useCase.desktopImage}`);
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when action button is clicked
     * @public
     * @return {undefined}
     */
    onActionButtonClick() {
      const _pageEnticeBoxElement = document.querySelector(
        ".js-page-entice-box"
      );

      if (_pageEnticeBoxElement) {
        // Scroll to entice box element
        _pageEnticeBoxElement.scrollIntoView();

        // Focus email field
        const _subscribeEmailFieldElement = document.querySelector(
          `input[name="subscribe_email"]`
        );

        if (_subscribeEmailFieldElement) {
          _subscribeEmailFieldElement.focus();
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-use-cases-main";

.c-section-use-cases-main {
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
  .c-section-use-cases-main {
    #{$c}__illustration-center {
      background-image: var(--mobile-image);
      left: 2.5%;
    }
  }
}
</style>
