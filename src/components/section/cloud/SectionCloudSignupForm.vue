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
        template(
          v-for="(partial, index) in fieldsetPartials"
        )
          component(
            v-if="stage === (index + 1)"
            @submit="partial.submit"
            :is="partial.component"
            part-class="c-section-cloud-signup-form__fieldset-part"
          )

  .c-section-cloud-signup-form__aside
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import { shallowRef } from "vue";

// PROJECT: COMPONENTS
import PartialCloudSignupFormFieldsetWorkspace from "@/components/partial/cloud/PartialCloudSignupFormFieldsetWorkspace.vue";
import PartialCloudSignupFormFieldsetAccount from "@/components/partial/cloud/PartialCloudSignupFormFieldsetAccount.vue";
import PartialCloudSignupFormFieldsetActivate from "@/components/partial/cloud/PartialCloudSignupFormFieldsetActivate.vue";

export default {
  name: "SectionCloudSignupForm",

  props: {
    stage: {
      type: Number,
      required: true
    }
  },

  emits: ["continue"],

  data() {
    return {
      // --> DATA <--

      fieldsetPartials: [
        {
          component: shallowRef(PartialCloudSignupFormFieldsetWorkspace),
          submit: this.onWorkspaceSubmit
        },

        {
          component: shallowRef(PartialCloudSignupFormFieldsetAccount),
          submit: this.onAccountSubmit
        },

        {
          component: shallowRef(PartialCloudSignupFormFieldsetActivate),
          submit: this.onActivateSubmit
        }
      ]
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Continues to next stage
     * @public
     * @return {undefined}
     */
    continue() {
      this.$emit("continue");
    },

    // --> EVENT LISTENERS <--

    /**
     * Handles workspace submit
     * @public
     * @param  {object} form
     * @return {undefined}
     */
    onWorkspaceSubmit(_form) {
      // TODO: submit form data

      this.continue();
    },

    /**
     * Handles account submit
     * @public
     * @param  {object} form
     * @return {undefined}
     */
    onAccountSubmit(_form) {
      // TODO: submit form data

      this.continue();
    },

    /**
     * Handles activate submit
     * @public
     * @param  {object} form
     * @return {undefined}
     */
    onActivateSubmit(_form) {
      // TODO: submit form data

      this.continue();
    }
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
    }
  }
}
</style>
