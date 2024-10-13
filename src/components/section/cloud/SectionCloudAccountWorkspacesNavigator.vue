<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-account-workspaces-navigator
  page-wrapper(
    class="c-section-cloud-account-workspaces-navigator__wrapper"
  )
    base-floating-link(
      v-for="(link, index) in links"
      :to="link.target"
      :icon-html="link.icon"
      :key="'link_' + index"
    )
      | {{ link.label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconSettings from "@/assets/images/components/section/cloud/SectionCloudAccountWorkspacesNavigator/icon-settings.svg?raw";
import ImageIconWorkspace from "@/assets/images/components/section/cloud/SectionCloudAccountWorkspacesNavigator/icon-workspace.svg?raw";

export default {
  name: "SectionCloudAccountWorkspacesNavigator",

  data() {
    return {
      // --> DATA <--

      links: [
        {
          label: "Account settings",
          icon: ImageIconSettings,
          target: "/cloud/account/settings/"
        },

        {
          label: "Create a new workspace",
          icon: ImageIconWorkspace,
          target: "/cloud/signup/"
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
$c: ".c-section-cloud-account-workspaces-navigator";

#{$c} {
  #{$c}__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }
}
</style>
