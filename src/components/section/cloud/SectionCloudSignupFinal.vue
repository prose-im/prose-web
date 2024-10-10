<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signup-final
  page-wrapper(
    class="c-section-cloud-signup-final__wrapper"
  )
    base-descripted-title(
      level="medium"
      align="center"
      tint="dark"
      class="c-section-cloud-signup-final__title"
    )
      template(
        v-slot:title
      )
        | Your server is live!

        span.c-section-cloud-signup-final__title-emoji
          base-space(
            :repeat="2"
          )

          | 🎉

      template(
        v-slot:description
      )
        p
          | You can now

          base-space

          span.u-medium
            | go to your server administration dashboard

          | .

        p
          | There, you can invite your team members.

    .c-section-cloud-signup-final__action
      base-button(
        @click="onFinishClick"
        size="enormous"
        tint="link"
        right-icon="arrow-right"
      )
        | Go to my Server Dashboard
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSignupFinal",

  emits: ["finish"],

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Handles finish click
     * @public
     * @return {undefined}
     */
    onFinishClick() {
      this.$emit("finish");
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signup-final";

#{$c} {
  display: flex;
  align-items: center;
  justify-content: center;

  #{$c}__wrapper {
    padding-bottom: 120px;
  }

  #{$c}__title {
    #{$c}__title-emoji {
      animation: 1s c-section-cloud-signup-final-title-emoji-scale 0.25s
        ease-in-out forwards;
      transform: scale(0);
      display: inline-block;

      /* Hack: disable inherited text fill color so that emoji shows up. */
      @include text-fill-color(currentcolor);
    }
  }

  #{$c}__action {
    text-align: center;
    margin-top: 56px;
  }
}

// --> KEYFRAMES <--

@keyframes c-section-cloud-signup-final-title-emoji-scale {
  0% {
    transform: scale(0);
  }

  60% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}
</style>
