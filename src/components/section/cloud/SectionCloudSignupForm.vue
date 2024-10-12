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
      div(
        :class=`[
          "c-section-cloud-signup-form__fieldset",
          {
            "c-section-cloud-signup-form__fieldset--wide": isFieldsetWide
          }
        ]`
      )
        template(
          v-for="(partial, index) in fieldsetPartials"
        )
          component(
            v-if="stage === (index + 1)"
            @submit="partial.submit"
            :is="partial.component"
            :pending="pending"
            part-class="c-section-cloud-signup-form__fieldset-part"
            notice-class="c-section-cloud-signup-form__fieldset-notice"
          )

  .c-section-cloud-signup-form__aside
    partial-common-feature(
      v-if="feature"
      v-memo="[feature]"
      :key="'feature_' + feature"
      :feature="feature"
      class="c-section-cloud-signup-form__feature"
    )
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

// CONSTANTS
const STEP_FEATURES = ["history", "integration", "share"];

const SUBMIT_DELAY = 1000; // TODO: this is a mock

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
      // --> STATE <--

      pending: false,

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

  computed: {
    isFieldsetWide() {
      return this.stage === 3;
    },

    feature() {
      return STEP_FEATURES[this.stage - 1] || null;
    }
  },

  methods: {
    // --> HELPERS <--

    /**
     * Submits form
     * @public
     * @param  {function} fnProceed
     * @return {undefined}
     */
    async submit(fnProceed) {
      if (this.pending !== true) {
        this.pending = true;

        // Submit form data
        await fnProceed();

        // Continue to next step
        this.continue();

        this.pending = false;
      }
    },

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
      this.submit(() => {
        // TODO: remove this mock and populate
        return new Promise(resolve => {
          setTimeout(resolve, SUBMIT_DELAY);
        });
      });
    },

    /**
     * Handles account submit
     * @public
     * @param  {object} form
     * @return {undefined}
     */
    onAccountSubmit(_form) {
      this.submit(() => {
        // TODO: remove this mock and populate
        return new Promise(resolve => {
          setTimeout(resolve, SUBMIT_DELAY);
        });
      });
    },

    /**
     * Handles activate submit
     * @public
     * @param  {object} form
     * @return {undefined}
     */
    onActivateSubmit(_form) {
      this.submit(() => {
        // TODO: remove this mock and populate
        return new Promise(resolve => {
          setTimeout(resolve, SUBMIT_DELAY);
        });
      });
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

  #{$c}__aside,
  #{$c}__fieldset {
    padding-top: 70px;
    padding-bottom: 40px;
  }

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
    padding-inline: 18px;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 0 1 auto;

    > #{$c}__feature {
      max-width: 360px;
      width: 100%;
      margin: 0 auto;
    }
  }

  #{$c}__wrapper {
    width: 100%;
    max-width: 700px;
  }

  #{$c}__fieldset {
    padding-inline: 12px;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    box-sizing: border-box;

    &--wide {
      max-width: 520px;
      padding-top: 50px;
    }

    #{$c}__fieldset-notice {
      margin-bottom: 42px;
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
    }
  }

  #{$c}__feature {
    animation: 0.3s c-section-cloud-signup-form-feature-reveal 0.1s linear both;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__inner {
      justify-content: center;
    }

    #{$c}__wrapper {
      max-width: 100%;
    }

    #{$c}__aside {
      display: none;
    }
  }
}

// --> KEYFRAMES <--

@keyframes c-section-cloud-signup-form-feature-reveal {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
