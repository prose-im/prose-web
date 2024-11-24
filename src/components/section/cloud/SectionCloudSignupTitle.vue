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
      tint="gradient"
    )
      | {{ titleText }}
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
      required: true
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

        default: {
          return "Sign up to Prose Cloud";
        }
      }
    }
  }
};
</script>
