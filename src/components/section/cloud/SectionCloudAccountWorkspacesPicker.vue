<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cloud-account-workspaces-picker
  page-wrapper
    base-title(
      level="lilliput"
      align="center"
      tint="black"
    )
      | Select the workspace you want to open:

    ul.c-section-cloud-account-workspaces-picker__items
      li.c-section-cloud-account-workspaces-picker__item(
        v-for="(workspace, index) in workspaces"
        :key="'workspace_' + index"
      )
        .c-section-cloud-account-workspaces-picker__item-logo(
          :style="{ 'background-image': 'url(' + workspace.logoUrl + ')' }"
        )

        .c-section-cloud-account-workspaces-picker__item-identity
          p.c-section-cloud-account-workspaces-picker__item-name.u-medium.u-ellipsis
            | {{ workspace.name }}

          p.c-section-cloud-account-workspaces-picker__item-address.u-ellipsis
            | {{ workspace.username }}@{{ workspace.domain }}

        .c-section-cloud-account-workspaces-picker__item-actions
          base-button(
            size="normal"
            right-icon="open-external"
            tint="link"
          )
            | Open in Prose
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
// TODO: those are fixture imports
import ImageLogoCrisp from "@/assets/images/components/section/cloud/SectionCloudAccountWorkspacesPicker/logo-crisp.png";

export default {
  name: "SectionCloudAccountWorkspacesPicker",

  data() {
    return {
      // --> DATA <--

      workspaces: [
        // TODO: those are fixtures
        {
          name: "Crisp",
          username: "valerian",
          domain: "crisp.chat",
          logoUrl: ImageLogoCrisp
        },

        {
          name: "Crisp",
          username: "valerian",
          domain: "crisp.chat",
          logoUrl: ImageLogoCrisp
        },

        {
          name: "Crisp",
          username: "valerian",
          domain: "crisp.chat",
          logoUrl: ImageLogoCrisp
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
$c: ".c-section-cloud-account-workspaces-picker";

// VARIABLES
$logo-size: 58px;

#{$c} {
  #{$c}__items {
    max-width: 540px;
    margin: 38px auto 0;

    #{$c}__item {
      background: $color-white;
      border: 1px solid $color-border-secondary;
      margin-bottom: 16px;
      padding: 18px 28px;
      display: flex;
      align-items: center;
      box-shadow: 0 6px 3px -3px rgba($color-black, 0.02);
      border-radius: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      #{$c}__item-logo {
        background-color: $color-base-grey-light;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: $logo-size;
        height: $logo-size;
        margin-right: 20px;
        border-radius: $logo-size;
        flex: 0 0 auto;
      }

      #{$c}__item-identity {
        overflow: hidden;
        flex: 1;

        #{$c}__item-name {
          color: $color-base-black-mid;
          font-size: 18px;
          line-height: 22px;
        }

        #{$c}__item-address {
          color: $color-base-grey-dark;
          font-size: 16px;
          line-height: 20px;
          margin-top: 5px;
        }
      }

      #{$c}__item-actions {
        margin-left: 12px;
        flex: 0 1 auto;
      }
    }
  }
}
</style>
