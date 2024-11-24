<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signin-authenticate
  page-wrapper
    base-title(
      level="medium"
      align="center"
      tint="gradient"
    )
      template(
        v-if="mode === 'recover'"
      )
        | Reset your account password

      template(
        v-else
      )
        | Log in to your workspace

    .c-section-cloud-signin-authenticate__form(
      v-if="mode === 'recover'"
    )
      base-notice(
        class="c-section-cloud-signin-authenticate__notice"
      )
        | This section is coming soon! Please check back later.

      base-notice(
        v-if="error.code"
        :update-time="error.time"
        color="red"
        class="c-section-cloud-signin-authenticate__notice"
        emphasis
        shaky
      )
        template(
          v-if="error.code === 'incomplete_form'"
        )
          | Please provide your email to reset your password.

        template(
          v-else
        )
          | We could not reset your password. Try again.

      form-titled-field(
        title="Account email address"
        class="c-section-cloud-signin-authenticate__part"
      )
        form-field(
          v-model="form.email"
          @submit="onFieldSubmit"
          :loading="pending"
          name="account_email"
          type="email"
          align="left"
          size="mid-large"
          placeholder="Enter your account email…"
          autofocus
          submittable
          disabled
        )

        .c-section-cloud-signin-authenticate__controls
          span.c-section-cloud-signin-authenticate__control.c-section-cloud-signin-authenticate__control--spacer

          nuxt-link(
            to="/cloud/signin/"
            class="c-section-cloud-signin-authenticate__control c-section-cloud-signin-authenticate__control--login"
          )
            | Go back to log in

      .c-section-cloud-signin-authenticate__part.c-section-cloud-signin-authenticate__part--action
        base-button(
          @click="onRecoverClick"
          :loading="pending"
          size="enormous"
          tint="link"
          disabled
        )
          | Receive a Password Reset Email

    .c-section-cloud-signin-authenticate__form(
      v-else
    )
      base-notice(
        class="c-section-cloud-signin-authenticate__notice"
      )
        | This section is coming soon! Please check back later.

      base-notice(
        v-if="error.code"
        :update-time="error.time"
        color="red"
        class="c-section-cloud-signin-authenticate__notice"
        emphasis
        shaky
      )
        template(
          v-if="error.code === 'incomplete_form'"
        )
          | Please provide an email and a password to continue.

        template(
          v-else-if="error.code === 'invalid_credentials'"
        )
          | Your credentials could not be verified. Check for typos.

        template(
          v-else
        )
          | We could not log in your account. Try again.

      form-titled-field(
        title="Work email address"
        class="c-section-cloud-signin-authenticate__part"
      )
        form-field(
          v-model="form.email"
          @submit="onFieldSubmit"
          :loading="pending"
          name="account_email"
          type="email"
          align="left"
          size="mid-large"
          placeholder="Enter your account email…"
          autofocus
          submittable
          disabled
        )

      form-titled-field(
        title="Your password"
        class="c-section-cloud-signin-authenticate__part"
      )
        form-field(
          v-model="form.password"
          @submit="onFieldSubmit"
          :loading="pending"
          name="account_password"
          type="password"
          align="left"
          size="mid-large"
          placeholder="Enter your password…"
          submittable
          disabled
        )

        .c-section-cloud-signin-authenticate__controls
          form-fieldset-field(
            label="Stay logged in on this device"
            for-name="session_remember"
            class="c-section-cloud-signin-authenticate__control c-section-cloud-signin-authenticate__control--remember"
          )
            template(
              v-slot:input-before
            )
              form-toggle(
                v-model="form.remember"
                :loading="pending"
                name="session_remember"
                disabled
              )

          nuxt-link(
            to="/cloud/signin/recover/"
            class="c-section-cloud-signin-authenticate__control c-section-cloud-signin-authenticate__control--recover"
          )
            | Forgot your password?

      .c-section-cloud-signin-authenticate__part.c-section-cloud-signin-authenticate__part--action
        base-button(
          @click="onLoginClick"
          :loading="pending"
          size="enormous"
          tint="link"
          right-icon="arrow-right"
          disabled
        )
          | Log in to my Workspace
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSigninAuthenticate",

  props: {
    mode: {
      type: String,
      default: "login",

      validator(x) {
        return ["login", "recover"].includes(x);
      }
    }
  },

  data() {
    return {
      // --> STATE <--

      pending: false,

      error: {
        code: null,
        time: 0
      },

      form: {
        email: "",
        password: "",
        remember: true
      }
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Asserts that login form is valid
     * @public
     * @return {boolean} Form validity status
     */
    assertLoginFormValidity() {
      this.error.code =
        !this.form.email || !this.form.password ? "incomplete_form" : null;

      this.error.time = this.error.code ? Date.now() : 0;

      return this.error.code === null;
    },

    /**
     * Asserts that recover form is valid
     * @public
     * @return {boolean} Form validity status
     */
    assertRecoverFormValidity() {
      this.error.code = !this.form.email ? "incomplete_form" : null;
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
      switch (this.mode) {
        case "recover": {
          // Trigger a recover event
          this.onRecoverClick();

          break;
        }

        default: {
          // Trigger a login event
          this.onLoginClick();
        }
      }
    },

    /**
     * Handles login click
     * @public
     * @return {undefined}
     */
    onLoginClick() {
      if (this.pending !== true && this.assertLoginFormValidity() === true) {
        // TODO: proceed login submit here
        this.pending = true;
      }
    },

    /**
     * Handles recover click
     * @public
     * @return {undefined}
     */
    onRecoverClick() {
      if (this.pending !== true && this.assertRecoverFormValidity() === true) {
        // TODO: proceed recover submit here
        this.pending = true;
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signin-authenticate";

#{$c} {
  #{$c}__form {
    max-width: 460px;
    margin: 100px auto 0;
  }

  #{$c}__notice,
  #{$c}__part {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  #{$c}__part {
    &--action {
      text-align: center;
    }
  }

  #{$c}__controls {
    display: flex;
    align-items: center;
    column-gap: 8px;

    #{$c}__control {
      &--recover,
      &--login {
        color: $color-base-grey-dark;
        font-size: 13.5px;
        letter-spacing: 0.1px;
        line-height: 20px;
        padding: 0 1px;
        flex: 0 1 auto;

        &:hover {
          color: darken($color-base-grey-dark, 20%);
        }
      }

      &--remember,
      &--spacer {
        flex: 1;
      }
    }
  }
}
</style>
