<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-cloud-signup
  template(
    v-if="isFinal"
  )
    section-cloud-signup-final(
      @finish="onFormFinish"
      class="p-cloud-signup__final"
    )

  template(
    v-else
  )
    section-cloud-signup-title(
      :stage="stage"
      class="p-cloud-signup__title"
    )

    section-cloud-signup-form(
      @continue="onFormContinue"
      :stage="stage"
      class="p-cloud-signup__form"
    )

  section-cloud-signup-progress(
    :stage="stage"
    class="p-cloud-signup__progress"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "embedding"
});

// Disable indexing of page
defineRouteRules({
  robots: false
});

// Set page title
useHead({
  title: "Sign up to Prose Cloud"
});
</script>

<script>
// CONSTANTS
const FINAL_STAGE = 4;

export default {
  name: "CloudSignupPage",

  data() {
    return {
      // --> STATE <--

      stage: 1
    };
  },

  computed: {
    isFinal() {
      return this.stage === FINAL_STAGE;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Handles form continue
     * @public
     * @return {undefined}
     */
    onFormContinue() {
      // Go to next stage
      this.stage++;
    },

    /**
     * Handles form finish
     * @public
     * @return {undefined}
     */
    onFormFinish() {
      // Navigate to created Prose Pod dashboard
      // TODO: change URL to created Prose Pod dashboard URL
      navigateTo(this.$config.public.url.prose_app, { external: true });
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-cloud-signup";

#{$c} {
  display: flex;
  flex-direction: column;

  #{$c}__form,
  #{$c}__progress {
    border-top: 1px solid $color-border-tertiary;
  }

  #{$c}__title {
    flex: 0 0 auto;
  }

  #{$c}__form {
    margin-top: $section-form-margin-top;
    flex: 1;
  }

  #{$c}__final {
    flex: 1;
  }

  #{$c}__progress {
    height: 80px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__progress {
      display: none;
    }
  }
}
</style>
