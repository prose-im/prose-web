<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-icon",
    "c-base-icon--" + tint
  ]`
)
  .c-base-icon__icon(
    v-if="iconHtml"
    v-html="iconHtml"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconOpenSource from "@/assets/images/components/base/BaseIcon/open-source.svg?raw";
import ImageIconNative from "@/assets/images/components/base/BaseIcon/native.svg?raw";
import ImageIconDecentralized from "@/assets/images/components/base/BaseIcon/decentralized.svg?raw";
import ImageIconPaintbrush from "@/assets/images/components/base/BaseIcon/paintbrush.svg?raw";
import ImageIconIntegrations from "@/assets/images/components/base/BaseIcon/integrations.svg?raw";
import ImageIconServer from "@/assets/images/components/base/BaseIcon/server.svg?raw";
import ImageIconEncrypted from "@/assets/images/components/base/BaseIcon/end-to-end.svg?raw";
import ImageIconScalable from "@/assets/images/components/base/BaseIcon/scalable.svg?raw";
import ImageIconPrivacy from "@/assets/images/components/base/BaseIcon/privacy.svg?raw";
import ImageIconNotification from "@/assets/images/components/base/BaseIcon/notification.svg?raw";
import ImageIconVerified from "@/assets/images/components/base/BaseIcon/verified.svg?raw";
import ImageIconAttachment from "@/assets/images/components/base/BaseIcon/attachment.svg?raw";
import ImageIconFlags from "@/assets/images/components/base/BaseIcon/flags.svg?raw";
import ImageIconSpaces from "@/assets/images/components/base/BaseIcon/spaces.svg?raw";
import ImageIconKnowledge from "@/assets/images/components/base/BaseIcon/knowledge.svg?raw";
import ImageIconCalls from "@/assets/images/components/base/BaseIcon/calls.svg?raw";
import ImageIconRoles from "@/assets/images/components/base/BaseIcon/roles.svg?raw";
import ImageIconProductivity from "@/assets/images/components/base/BaseIcon/productivity.svg?raw";
import ImageIconCommunity from "@/assets/images/components/base/BaseIcon/community.svg?raw";
import ImageIconResources from "@/assets/images/components/base/BaseIcon/resources.svg?raw";
import ImageIconWorkflows from "@/assets/images/components/base/BaseIcon/workflows.svg?raw";
import ImageIconCollaboration from "@/assets/images/components/base/BaseIcon/collaboration.svg?raw";
import ImageIconThread from "@/assets/images/components/base/BaseIcon/thread.svg?raw";
import ImageIconMobile from "@/assets/images/components/base/BaseIcon/mobile.svg?raw";

export default {
  name: "BaseIcon",

  props: {
    tint: {
      type: String,
      default: "blue",

      validator(x) {
        return ["blue", "pink", "purple"].includes(x);
      }
    },

    icon: {
      type: String,
      default: null,

      validator(x) {
        return [
          "open-source",
          "native",
          "decentralized",
          "paintbrush",
          "integrations",
          "server",
          "end-to-end",
          "scalable",
          "privacy",
          "notification",
          "verified",
          "attachment",
          "flags",
          "spaces",
          "knowledge",
          "calls",
          "roles",
          "productivity",
          "community",
          "resources",
          "workflows",
          "collaboration",
          "thread",
          "mobile"
        ].includes(x);
      }
    }
  },

  computed: {
    iconHtml() {
      switch (this.icon) {
        case "open-source": {
          return ImageIconOpenSource;
        }

        case "native": {
          return ImageIconNative;
        }

        case "decentralized": {
          return ImageIconDecentralized;
        }

        case "paintbrush": {
          return ImageIconPaintbrush;
        }

        case "integrations": {
          return ImageIconIntegrations;
        }

        case "server": {
          return ImageIconServer;
        }

        case "end-to-end": {
          return ImageIconEncrypted;
        }

        case "scalable": {
          return ImageIconScalable;
        }

        case "privacy": {
          return ImageIconPrivacy;
        }

        case "notification": {
          return ImageIconNotification;
        }

        case "verified": {
          return ImageIconVerified;
        }

        case "attachment": {
          return ImageIconAttachment;
        }

        case "calls": {
          return ImageIconCalls;
        }

        case "roles": {
          return ImageIconRoles;
        }

        case "productivity": {
          return ImageIconProductivity;
        }

        case "flags": {
          return ImageIconFlags;
        }

        case "spaces": {
          return ImageIconSpaces;
        }

        case "knowledge": {
          return ImageIconKnowledge;
        }

        case "community": {
          return ImageIconCommunity;
        }

        case "resources": {
          return ImageIconResources;
        }

        case "workflows": {
          return ImageIconWorkflows;
        }

        case "collaboration": {
          return ImageIconCollaboration;
        }

        case "thread": {
          return ImageIconThread;
        }

        case "mobile": {
          return ImageIconMobile;
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-icon";

#{$c} {
  width: 64px;
  height: 64px;
  display: block;
  display: grid;
  place-items: center;

  &__icon svg {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  }

  // --> TINTS <--

  &--blue {
    background: linear-gradient(180deg, #518eea 0%, #3458ad 100%);
    box-shadow:
      0px 17px 20px -6px rgba(81, 142, 234, 0.61),
      inset 0px -2px 2px #234596,
      inset 0px 2px 2px rgba(255, 255, 255, 0.25);
    border-radius: 64px;
  }

  &--pink {
    background: linear-gradient(180deg, #f67086 0%, #f86079 100%);
    box-shadow:
      0px 17px 20px -6px rgba(246, 112, 134, 0.61),
      inset 0px -2px 2px #e84f68,
      inset 0px 2px 2px rgba(255, 255, 255, 0.25);
    border-radius: 64px;
  }

  &--purple {
    background: linear-gradient(180deg, #7e67d1 0%, #644eb4 100%);
    box-shadow:
      0px 17px 20px -6px rgba(100, 78, 180, 0.61),
      inset 0px -2px 2px #4930a2,
      inset 0px 2px 2px rgba(255, 255, 255, 0.25);
    border-radius: 64px;
  }
}
</style>
