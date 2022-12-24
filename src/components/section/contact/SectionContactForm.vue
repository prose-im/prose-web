<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-contact-form
  page-wrapper
    .c-section-contact-form__frame-wrap(
      v-if="formUrl"
    )
      .c-section-contact-form__loader(
        v-if="frameLoading"
      )
        base-spinner(
          size="18px"
          border-width="3px"
          class="c-section-contact-form__spinner"
        )

      iframe(
        @load="onFrameLoad"
        :src="formUrl"
        title="Contact Form"
        referrerpolicy="origin"
        frameborder="0"
        sandbox="allow-forms allow-popups allow-scripts"
        ref="frame"
        class="c-section-contact-form__frame"
      )

    p.c-section-contact-form__empty.u-bold(
      v-else
    )
      | No contact form available!
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionContactForm",

  data() {
    return {
      // --> STATES <--

      frameLoading: true
    };
  },

  computed: {
    formUrl() {
      if (this.$config.tokens.crisp_website_id) {
        return (
          `${this.$config.url.crisp_plugins}/urn:crisp.im:contact-form:0/` +
          `contact/${this.$config.tokens.crisp_website_id}`
        );
      }

      return null;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when frame loads
     * @public
     * @return {undefined}
     */
    onFrameLoad() {
      this.frameLoading = false;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-contact-form";

.c-section-contact-form {
  #{$c}__frame-wrap {
    position: relative;

    &,
    #{$c}__frame {
      min-height: 680px;
    }

    #{$c}__loader {
      background-color: rgba($color-white, 0.7);
      display: flex;
      justify-content: center;
      padding-top: 28px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    #{$c}__frame {
      width: 100%;
    }
  }

  #{$c}__empty {
    color: $color-base-grey-dark;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
