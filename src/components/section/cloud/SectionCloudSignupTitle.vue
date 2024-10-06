<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signup-title
  page-wrapper
    base-title(
      level="medium"
      align="center"
      tint="dark"
    )
      | {{ titleText }}

      template(
        v-if="titleEmoji"
      )
        base-space(
          :repeat="2"
        )

        | {{ titleEmoji }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSignupTitle",

  props: {
    stage: {
      type: Number,
      default: 1
    }
  },

  computed: {
    titleText() {
      switch (this.stage) {
        case 1: {
          return "Let’s get your server ready!";
        }

        case 2: {
          return "Create your server admin account";
        }

        case 3: {
          return "Activate your 30 days free trial";
        }

        case 4: {
          return "Your server is live!";
        }

        default: {
          return "Sign up to Prose Cloud";
        }
      }
    },

    titleEmoji() {
      switch (this.stage) {
        case 4: {
          return "🎉";
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>
