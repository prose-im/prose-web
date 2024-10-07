<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-signup-progress
  base-progress(
    :items="progressItems"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionCloudSignupProgress",

  props: {
    stage: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      // --> DATA <--

      progressItems: [
        {
          id: "progress",
          label: "Workspace identity",
          icon: "progress",
          ongoing: true
        },

        {
          id: "account",
          label: "Account",
          icon: "account"
        },

        {
          id: "activate",
          label: "Activate",
          icon: "activate"
        },

        {
          id: "done",
          icon: "finished",
          finished: true
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signup-progress";

#{$c} {
  padding: 0 8px;
}
</style>
