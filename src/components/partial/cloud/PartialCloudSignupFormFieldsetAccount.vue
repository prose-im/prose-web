<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-partial-cloud-signup-form-fieldset-account
  | TODO: form

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-account__part",
      "c-partial-cloud-signup-form-fieldset-account__part--action",
      partClass
    ]`
  )
    base-button(
      @click="onContinueClick"
      size="enormous"
      tint="link"
      right-icon="arrow-right"
    )
      | Continue to Server Activation
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PartialCloudSignupFormFieldsetAccount",

  props: {
    partClass: {
      type: String,
      required: true
    }
  },

  emits: ["submit"],

  data() {
    return {
      // --> STATE <--

      form: {
        /* TODO */
      }
    };
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Handles continue click
     * @public
     * @return {undefined}
     */
    onContinueClick() {
      this.$emit("submit", this.form);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-partial-cloud-signup-form-fieldset-account";

#{$c} {
  #{$c}__part {
    &--action {
      text-align: center;
    }
  }
}
</style>
