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
  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-account__part",
      partClass
    ]`
  )
    base-title(
      level="lilliput"
      tint="black"
    )
      | What’s your work email?

    form-field(
      v-model="form.email"
      name="account_email"
      type="email"
      align="left"
      size="mid-large"
      placeholder="Enter your work email…  (eg. elon@tesla.com)"
      autofocus
    )

  div(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-account__part",
      partClass
    ]`
  )
    base-title(
      level="lilliput"
      tint="black"
    )
      | Choose a strong password!

    form-field(
      v-model="form.password"
      name="account_password"
      type="password"
      align="left"
      size="mid-large"
      placeholder="Enter a password…"
    )

    base-security-level(
      :level="0"
    )
      template(
        v-slot:bad
      )
        | Your password is not secure enough.

      template(
        v-slot:okay
      )
        | Your password could be better.

      template(
        v-slot:good
      )
        | Your password looks secure!

      template(
        v-slot:default
      )
        | Please enter a password.

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
        email: "",
        password: ""
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
