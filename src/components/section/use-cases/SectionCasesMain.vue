<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div
  page-main-title(
    class="c-section-cases-main"
    align="left"
  )

    template(
      slot="overline"
    ) 
      | {{ useCase.overline }}

    template(
      slot="title"
    )
      span(v-html="useCase.h1")

    template(
      slot="action"
    )
      a(
        href="#"
        class=""
        slot="default"
      )
        base-button(
          right-icon="arrow-right"
          tint="fancy"
          size="large"
          class="c-app-download__action-button"
          @click.prevent="onActionButtonClick"
        )
          | Get early access
  
  page-wrapper(
    class="c-page-main-title__wrapper"
  )
    base-background(:type="useCase.coverBg", class="c-section-cases-main__illustration")
      .c-section-cases-main__illustration-center(:style="`--mobile-image: url(${mobileImage}); --desktop-image: url(${desktopImage})`")
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
import BaseButton from "../../base/BaseButton.vue";

export default {
  name: "SectionCasesMain",

  components: {
    BaseButton
  },

  props: {
    useCase: {
      type: Object,
      required: true
    }
  },

  computed: {
    mobileImage() {
      return require(`~/assets/images/components/section/use-cases${this.useCase.mobileImage}`);
    },
    desktopImage() {
      return require(`~/assets/images/components/section/use-cases${this.useCase.desktopImage}`);
    },
  },

  methods: {
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
$c: ".c-section-cases-main";

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

@media (max-width: $screen-small-width-breakpoint) {
  #{$c}__illustration-center  {
    background-image: var(--mobile-image);
    left: 2.5%;
  }
}
</style>
