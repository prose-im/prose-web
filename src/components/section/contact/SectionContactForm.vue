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
      iframe(
        v-if="formUrl"
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
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-contact-form";

.c-section-contact-form {
  #{$c}__frame {
    width: 100%;
    min-height: 680px;
  }

  #{$c}__empty {
    color: $color-base-grey-dark;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
