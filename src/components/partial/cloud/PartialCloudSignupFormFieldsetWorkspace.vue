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
    :class="noticeClass"
  )
    | This section is coming soon! Please check back later.

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

  form-titled-field(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-workspace__part",
      partClass
    ]`
    title="What’s your company name?"
  )
    form-field(
      v-model="form.name"
      @submit="onFieldSubmit"
      :loading="pending"
      name="workspace_name"
      type="text"
      align="left"
      size="mid-large"
      placeholder="Enter name for your workspace…  (eg. Acme)"
      autofocus
      submittable
      disabled
    )

  form-titled-field(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-workspace__part",
      partClass
    ]`
    title="Do you have a website?"
  )
    form-field(
      v-model="form.website"
      @submit="onFieldSubmit"
      :disabled="form.noWebsite"
      :loading="pending"
      name="workspace_website"
      type="url"
      align="left"
      size="mid-large"
      placeholder="Enter your website URL…  (eg. www.acme.com)"
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
          :loading="pending"
          name="no_workspace_website"
          disabled
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
      :loading="pending"
      size="enormous"
      tint="link"
      right-icon="arrow-right"
      disabled
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
    pending: {
      type: Boolean,
      required: true
    },

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
        noWebsite: true
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
