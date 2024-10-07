<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-partial-cloud-signup-form-fieldset-workspace
  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-workspace__part",
      partClass
    ]`
  )
    base-title(
      level="lilliput"
      tint="black"
    )
      | What’s your company name?

    form-field(
      v-model="form.name"
      name="workspace_name"
      type="text"
      align="left"
      size="mid-large"
      placeholder="Enter name for your workspace…  (eg. Tesla)"
      autofocus
    )

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-workspace__part",
      partClass
    ]`
  )
    base-title(
      level="lilliput"
      tint="black"
    )
      | Do you have a website?

    form-field(
      v-model="form.website"
      :disabled="form.noWebsite"
      name="workspace_website"
      type="url"
      align="left"
      size="mid-large"
      placeholder="Enter your website URL…  (eg. www.tesla.com)"
    )

    form-fieldset-field(
      label="I currently do not have a website"
      for-name="no_workspace_website"
    )
      template(
        v-slot:input-before
      )
        form-toggle(
          v-model="form.noWebsite"
          name="no_workspace_website"
        )

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-workspace__part",
      "c-partial-cloud-signup-form-fieldset-workspace__part--action",
      partClass
    ]`
  )
    base-button(
      @click="onContinueClick"
      size="enormous"
      tint="link"
      right-icon="arrow-right"
    )
      | Continue to Account Creation
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PartialCloudSignupFormFieldsetWorkspace",

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
        name: "",
        website: "",
        noWebsite: false
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
$c: ".c-partial-cloud-signup-form-fieldset-workspace";

#{$c} {
  #{$c}__part {
    &--action {
      text-align: center;
    }
  }
}
</style>
