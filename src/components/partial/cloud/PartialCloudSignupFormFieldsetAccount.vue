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
    v-if="error"
    :class="noticeClass"
    color="red"
    emphasis
  )
    template(
      v-if="error === 'incomplete_form'"
    )
      | Please provide an email and a password to continue.

    template(
      v-else-if="error === 'account_exists'"
    )
      | An account already exists with this email.

    template(
      v-else-if="error === 'invalid_email'"
    )
      | Your email address looks invalid. Check for typos.

    template(
      v-else-if="error === 'invalid_password'"
    )
      | Your provided password could not be accepted. Try another one.

    template(
      v-else
    )
      | We could not create your account. Try again.

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
      @keystroke="onFieldPasswordKeystroke"
      name="account_password"
      type="password"
      align="left"
      size="mid-large"
      placeholder="Enter a password…"
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

      error: null,

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
      this.error =
        !this.form.email || !this.form.password ? "incomplete_form" : null;

      return this.error === null;
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
