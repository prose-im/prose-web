<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-page-entice
  page-wrapper(
    class="c-page-entice__wrapper"
  )
    base-wave(
      :variant="4"
      class="c-page-entice__wave"
    )

    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      | Discover more

      br

      | use cases

    .c-page-entice-use-case__options
      template(v-for="gate, index in gates")
        a(:href="gate.link", :key="index", class="c-page-entice-use-case__option") 
          base-card(
            :media="gate.media"
          )
            template(
              slot="title"
            )
              | {{ gate.title }}
            template(
              slot="description"
            )
              | {{ gate.description }}
            template(
              slot="link"
            )
              base-button(
                size="mini"
                right-icon="arrow-right"
                tint="none"
              )
                | Learn More

    .c-page-entice__box.js-page-entice-box
      .c-page-entice__content
        .c-page-entice__content-inner
          base-title(
            level="normal"
            tint="light"
            align="center"
          )
            | Sign up for early access

          .c-page-entice__text
            p
              | Available soon on all major devices.

          div(
            :class=`[
              "c-page-entice__actions",
              {
                "c-page-entice__actions--invalid": hasActionsInvalid
              }
            ]`
          )
            form.c-page-entice__action.c-page-entice__action--subscribe(
              v-if="!subscribeForm.submitted"
              @submit.prevent="onSubscribeSubmit"
            )
              input(
                v-model="subscribeForm.email"
                :disabled="subscribeForm.loading"
                type="email"
                name="subscribe_email"
                placeholder="Enter your email..."
                class="c-page-entice__action-input"
              )

              button(
                :disabled="subscribeForm.loading"
                class="c-page-entice__action-submit"
                type="submit"
              )
                base-button(
                  class="c-page-entice__action-button"
                  size="large"
                  right-icon="arrow-right"
                  bolder
                  darker
                  tint="gradient"
                )
                  | Submit

            .c-page-entice__action.c-page-entice__action--subscribed.u-medium(
              v-else
            )
              | Thank you! We will let you know when Prose is available.
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageContentActionsDownloadIcon from "~/assets/images/components/page/PageEntice/content-actions-download-icon.svg?inline";

// CONSTANTS
const SUBSCRIBE_SUBMIT_DELAY = 200; // 1/5 second

// INSTANCES
const EMAIL_REGEX = /^([^@]+)@([^@]+\.[^@.]+)$/;

export default {
  name: "PageEnticeUseCase",

  components: { ImageContentActionsDownloadIcon },

  data() {
    return {
      // --> STATE <--

      hasActionsInvalid: false,

      subscribeForm: {
        loading: false,
        submitted: false,

        email: ""
      }
    };
  },

  computed: {
    hasActionDownload() {
      // Hide download link on downloads page
      return this.$route.name !== "downloads";
    },
    gates() {
      return [
        {
          title: "Remote Teams",
          description:
            "Know for certain who you’re talking to even if you’ve never met IRL.",
          media: require("~/assets/images/components/page/PageEntice/open-source-projects.png")
        },
        {
          title: "Organizations",
          description:
            "Communicate efficiently even in low bandwidth regions of the world.",
          media: require("~/assets/images/components/page/PageEntice/remote-teams.png")
        },
        {
          title: "Web3",
          description:
            "Prevent scams, spam, and other unwanted interactions on your server.",
          media: require("~/assets/images/components/page/PageEntice/web3.png")
        }
      ];
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when subscribe form is submitted
     * @public
     * @return {undefined}
     */
    onSubscribeSubmit() {
      if (this.subscribeForm.loading !== true) {
        // Set states
        this.subscribeForm.loading = true;
        this.hasActionsInvalid = false;

        this.$nextTick(() => {
          setTimeout(() => {
            if (
              this.subscribeForm.submitted !== true &&
              this.subscribeForm.email &&
              EMAIL_REGEX.test(this.subscribeForm.email) === true
            ) {
              // Mark form as submitted
              this.subscribeForm.submitted = true;

              // Assign email and segments
              this.$crisp.user.setEmail(this.subscribeForm.email);
              this.$crisp.session.setSegments(["waitlist"]);
            } else {
              // Mark as invalid
              this.hasActionsInvalid = true;
            }

            // Reset loading state
            this.subscribeForm.loading = false;
          }, SUBSCRIBE_SUBMIT_DELAY);
        });
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-entice";

// VARIABLES
$animate-shake-base-depth: 2px;

.c-page-entice {
  background-color: $color-background-primary;
  padding-top: 20px;
  position: relative;

  #{$c}__wrapper {
    padding-bottom: 120px;
    z-index: 1;
    position: relative;
  }

  #{$c}__wave {
    height: 911px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #{$c}-use-case__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin: 64px 0 40px;
  }

  #{$c}-use-case__option {
    width: 100%;
  }

  #{$c}__box {
    background-color: #181a1b;

    background-image: radial-gradient(
        circle at 0% 0%,
        rgba($color-base-blue-mid, 0.475) 0%,
        rgba($color-base-blue-mid, 0.2) 35%,
        rgba($color-base-blue-mid, 0) 60%
      ),
      radial-gradient(
        circle at 100% 100%,
        rgba($color-base-purple-mid, 0.475) 0%,
        rgba($color-base-purple-mid, 0.2) 35%,
        rgba($color-base-purple-mid, 0) 60%
      );

    min-height: 320px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    &,
    &::before {
      border-radius: 22px;
    }

    &::before {
      content: "";
      border: 1px solid rgba($color-base-blue-dark, 0.06);
      pointer-events: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }

  #{$c}__content {
    padding: 0 60px;
    width: 100%;
    height: 100%;

    #{$c}__content-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-white;
      padding: 80px 0;
    }

    #{$c}__title {
      font-size: 30px;
      letter-spacing: -0.25px;
      line-height: 42px;
    }

    #{$c}__text {
      font-size: 22px;
      line-height: 22px;
      margin-top: 20px;
      color: $color-base-grey-dark;
    }

    #{$c}__actions {
      margin-top: 44px;
      min-width: 400px;

      &--invalid {
        animation-name: shake;
        animation-duration: 800ms;
        animation-iteration-count: 1;
      }
    }

    #{$c}__action {
      &--subscribe {
        display: flex;
        padding: 4px 4px 4px 22px;
        border: 1px solid #81899b;
        border-radius: 32px;
      }

      &--subscribed {
        font-size: 17px;
        text-align: center;
        line-height: 22px;
      }

      #{$c}__action-input {
        color: $color-white;
        background-color: transparent;
        border: 0 none;
        font-size: 14px;
        padding: 0 6px 0 0;
        flex-grow: 1;

        &:focus,
        &:active {
          outline: none;
        }

        &:disabled {
          opacity: 0.6;
        }
      }

      #{$c}__action-submit {
        background-color: transparent;
        border: 0 none;
        margin: 0;
        padding: 0;

        &:disabled {
          pointer-events: none;
          opacity: 0.8;
        }
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-large-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      #{$c}__title {
        font-size: 26px;
      }
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      #{$c}__content-inner {
        flex: 1;
      }

      #{$c}__content-inner,
      #{$c}__text {
        text-align: center;
      }

      #{$c}__actions {
        max-width: 100%;
        min-width: 80%;
      }
    }

    #{$c}__illustration {
      display: none;
    }

    #{$c}__wave {
      display: none;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-entice {
    #{$c}__content {
      padding: 0 28px;

      #{$c}__content-inner {
        padding-top: 36px;
        padding-bottom: 46px;
      }

      #{$c}__title {
        font-size: 22px;
        line-height: 36px;
      }

      #{$c}__text {
        p {
          margin-bottom: 5px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      #{$c}__actions {
        width: 100%;
      }

      #{$c}__action {
        &--subscribe {
          border: transparent;
          padding: 0;
          flex-direction: column;
          gap: 12px;
        }

        #{$c}__action-input {
          padding: 4px 4px 4px 20px;
          border: 1px solid #81899b;
          border-radius: 32px;
          height: 38px;

          &:focus,
          &:active {
            outline: none;
          }
        }

        #{$c}__action-button {
          width: 100%;
        }
      }
    }

    #{$c}__options {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

// --> KEYFRAMES <--

@keyframes shake {
  10%,
  90% {
    transform: translate3d((-1 * $animate-shake-base-depth), 0, 0);
  }

  20%,
  80% {
    transform: translate3d((2 * $animate-shake-base-depth), 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d((-4 * $animate-shake-base-depth), 0, 0);
  }

  40%,
  60% {
    transform: translate3d((4 * $animate-shake-base-depth), 0, 0);
  }
}
</style>
