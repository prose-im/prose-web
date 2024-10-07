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

// Set page title
useHead({
  title: "Sign up to Prose Cloud"
});
</script>

<script>
export default {
  name: "CloudSignupPage",

  data() {
    return {
      // --> STATE <--

      stage: 1
    };
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
    margin-top: 60px;
    flex: 1;
  }

  #{$c}__progress {
    height: 80px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
