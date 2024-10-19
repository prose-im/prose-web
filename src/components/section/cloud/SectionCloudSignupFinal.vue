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
    .c-section-cloud-signup-final__box
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

  mounted() {
    // Start confettis (if available)
    this.$confetti?.start({
      defaultType: "circle",
      defaultSize: 7,
      defaultDropRate: 3,
      particlesPerFrame: 0.5,
      windSpeedMax: 0.25
    });
  },

  beforeUnmount() {
    // Stop confettis (if available)
    this.$confetti?.stop();
  },

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

  #{$c}__box {
    background-color: rgba($color-white, 0.88);
    border: 1px solid $color-border-tertiary;
    width: 100%;
    max-width: fit-content;
    margin: 0 auto;
    padding: 64px 86px;
    position: relative;
    z-index: 1;
    backdrop-filter: blur(8px);
    border-radius: 20px;
    animation: 0.3s c-section-cloud-signup-final-box-reveal 0.25s ease-in-out
      both;
  }

  #{$c}__title {
    #{$c}__title-emoji {
      user-select: none;
      animation: 1s c-section-cloud-signup-final-title-emoji-scale 0.75s
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

@keyframes c-section-cloud-signup-final-box-reveal {
  from {
    opacity: 0;
    transform: translateY(6px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

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
