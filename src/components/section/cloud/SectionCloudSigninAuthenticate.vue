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
      | Log in to your workspace

    .c-section-cloud-signin-authenticate__form
      form-titled-field(
        title="Work email address"
        class="c-section-cloud-signin-authenticate__part"
      )
        form-field(
          name="account_email"
          type="email"
          align="left"
          size="mid-large"
          placeholder="Enter your account email…"
          autofocus
          submittable
        )

      form-titled-field(
        title="Your password"
        class="c-section-cloud-signin-authenticate__part"
      )
        form-field(
          name="account_password"
          type="password"
          align="left"
          size="mid-large"
          placeholder="Enter your password…"
          submittable
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSigninAuthenticate"
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

  #{$c}__part {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
