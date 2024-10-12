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
  base-notice(
    v-if="error.code"
    :class="noticeClass"
    :update-time="error.time"
    color="red"
    emphasis
    shaky
  )
    template(
      v-if="error.code === 'incomplete_form'"
    )
      | We are missing some information, could you check?

    template(
      v-else
    )
      | We could not continue with your information. Try again.

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
      @submit="onFieldSubmit"
      name="workspace_name"
      type="text"
      align="left"
      size="mid-large"
      placeholder="Enter name for your workspace…  (eg. Tesla)"
      autofocus
      submittable
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
      @submit="onFieldSubmit"
      :disabled="form.noWebsite"
      name="workspace_website"
      type="url"
      align="left"
      size="mid-large"
      placeholder="Enter your website URL…  (eg. www.tesla.com)"
      submittable
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
    },

    noticeClass: {
      type: String,
      required: true
    }
  },

  emits: ["submit"],

  data() {
    return {
      // --> STATE <--

      error: {
        code: null,
        time: 0
      },

      form: {
        name: "",
        website: "",
        noWebsite: false
      }
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Asserts that form is valid
     * @public
     * @return {boolean} Form validity status
     */
    assertFormValidity() {
      this.error.code =
        !this.form.name || (!this.form.website && this.form.noWebsite !== true)
          ? "incomplete_form"
          : null;

      this.error.time = this.error.code ? Date.now() : 0;

      return this.error.code === null;
    },

    // --> EVENT LISTENERS <--

    /**
     * Handles field submit
     * @public
     * @return {undefined}
     */
    onFieldSubmit() {
      // Trigger a continue event
      this.onContinueClick();
    },

    /**
     * Handles continue click
     * @public
     * @return {undefined}
     */
    onContinueClick() {
      if (this.assertFormValidity() === true) {
        this.$emit("submit", this.form);
      }
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
