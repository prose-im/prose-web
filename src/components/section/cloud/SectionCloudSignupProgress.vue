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

  computed: {
    progressItems() {
      const _progressItems = [
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
      ];

      _progressItems.forEach((item, index) => {
        const _itemStage = index + 1;

        item.elapsed = this.stage > _itemStage ? true : false;
        item.ongoing = this.stage === _itemStage ? true : false;
      });

      return _progressItems;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cloud-signup-progress";

#{$c} {
  background-color: rgba($color-white, 0.75);
  backdrop-filter: blur(10px);
  padding: 0 8px;
}
</style>
