<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signup-form
  .c-section-cloud-signup-form__inner
    .c-section-cloud-signup-form__wrapper
      .c-section-cloud-signup-form__fieldset
        .c-section-cloud-signup-form__fieldset-part
          base-title(
            level="lilliput"
            tint="black"
          )
            | What’s your company name?

          form-field(
            v-model="form.workspace.name"
            name="workspace_name"
            type="text"
            align="left"
            size="mid-large"
            placeholder="Enter name for your workspace…  (eg. Tesla)"
            autofocus
          )

        .c-section-cloud-signup-form__fieldset-part
          base-title(
            level="lilliput"
            tint="black"
          )
            | Do you have a website?

          form-field(
            v-model="form.workspace.website"
            :disabled="form.workspace.noWebsite"
            name="workspace_website"
            type="url"
            align="left"
            size="mid-large"
            placeholder="Enter your website URL…  (eg. www.tesla.com)"
          )

          .c-section-cloud-signup-form__fieldset-control
            form-toggle(
              v-model="form.workspace.noWebsite"
              name="no_workspace_website"
              class="c-section-cloud-signup-form__fieldset-control-toggle"
            )

            | I currently do not have a website

        .c-section-cloud-signup-form__fieldset-part.c-section-cloud-signup-form__fieldset-part--action
          base-button(
            size="enormous"
            tint="link"
            right-icon="arrow-right"
          )
            | Continue to Account Creation

  .c-section-cloud-signup-form__aside
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSignupForm",

  data() {
    return {
      // --> STATE <--

      form: {
        workspace: {
          name: "",
          website: "",
          noWebsite: false
        }
      }
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signup-form";

#{$c} {
  display: flex;
  flex-direction: row;
  overflow: hidden;

  #{$c}__inner {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    overflow: auto;
  }

  #{$c}__aside {
    background-color: rgba($color-background-secondary, 0.5);
    border-left: 1px solid $color-border-tertiary;
    min-width: 320px;
    width: 40%;
    flex: 0 1 auto;
  }

  #{$c}__wrapper {
    width: 100%;
    max-width: 700px;
  }

  #{$c}__fieldset {
    padding: 70px 12px 40px;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    box-sizing: border-box;

    #{$c}__fieldset-control {
      font-size: 14.5px;
      display: flex;
      align-items: center;
      column-gap: 8px;

      #{$c}__fieldset-control-toggle {
        flex: 0 0 auto;
      }
    }

    #{$c}__fieldset-part {
      margin-bottom: 48px;

      > * {
        margin-bottom: 18px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      &--action {
        text-align: center;
      }
    }
  }
}
</style>
