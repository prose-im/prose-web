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
      | Please provide an email and a password to continue.

    template(
      v-else-if="error.code === 'account_exists'"
    )
      | An account already exists with this email.

    template(
      v-else-if="error.code === 'invalid_email'"
    )
      | Your email address looks invalid. Check for typos.

    template(
      v-else-if="error.code === 'invalid_password'"
    )
      | Your provided password could not be accepted. Try another one.

    template(
      v-else
    )
      | We could not create your account. Try again.

  form-titled-field(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-account__part",
      partClass
    ]`
    title="What’s your work email?"
  )
    form-field(
      v-model="form.email"
      @submit="onFieldSubmit"
      :loading="pending"
      name="account_email"
      type="email"
      align="left"
      size="mid-large"
      placeholder="Enter your work email…  (eg. john@acme.com)"
      autofocus
      submittable
    )

  form-titled-field(
    :class=`[
      "c-partial-cloud-signup-form-fieldset-account__part",
      partClass
    ]`
    title="Choose a strong password!"
  )
    form-field(
      v-model="form.password"
      @submit="onFieldSubmit"
      @keystroke="onFieldPasswordKeystroke"
      :loading="pending"
      name="account_password"
      type="password"
      align="left"
      size="mid-large"
      placeholder="Enter a password…"
      submittable
    )

    base-security-level(
      :level="passwordLevel"
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
        template(
          v-if="form.password"
        )
          | Your password is not long enough.

        template(
          v-else
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
      :loading="pending"
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
// NPM
import { passwordStrength } from "check-password-strength";

// CONSTANTS
const PASSWORD_LENGTH_MINIMUM = 6;
const PASSWORD_STRENGTH_MAXIMUM = 4;

export default {
  name: "PartialCloudSignupFormFieldsetAccount",

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

      passwordLevel: 0,

      error: {
        code: null,
        time: 0
      },

      form: {
        email: "",
        password: ""
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
        !this.form.email || !this.form.password ? "incomplete_form" : null;

      this.error.time = this.error.code ? Date.now() : 0;

      return this.error.code === null;
    },

    // --> EVENT LISTENERS <--

    /**
     * Handles password field keystroke
     * @public
     * @param  {string} value
     * @return {undefined}
     */
    onFieldPasswordKeystroke(value) {
      if (value.length >= PASSWORD_LENGTH_MINIMUM) {
        const _strength = passwordStrength(value);

        this.passwordLevel = Math.min(
          _strength.contains.length,
          PASSWORD_STRENGTH_MAXIMUM
        );
      } else {
        this.passwordLevel = 0;
      }
    },

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
$c: ".c-partial-cloud-signup-form-fieldset-account";

#{$c} {
  #{$c}__part {
    &--action {
      text-align: center;
    }
  }
}
</style>
