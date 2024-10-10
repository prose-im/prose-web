<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-partial-common-feature",
    "c-partial-common-feature--" + feature
  ]`
)
  .c-partial-common-feature__illustration

  .c-partial-common-feature__content
    base-title(
      level="mini",
      align="center"
    )
      | {{ featureItem.title }}

    p.c-partial-common-feature__content-description
      | {{ featureItem.description }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const FEATURES = {
  encrypt: {
    title: "Encrypt everything",
    description:
      "All messages, including your chat history, are end-to-end encrypted."
  },

  share: {
    title: "Share image & files",
    description:
      "Send images to your co-workers. Transfer large files without limits."
  },

  history: {
    title: "Unlimited chat history",
    description:
      "Your past chats are stored and encrypted on your Prose server."
  },

  integration: {
    title: "Connect integrations",
    description:
      "Want to plug your other apps to Prose? Install community-made integrations."
  },

  search: {
    title: "Powerful search",
    description:
      "Quickly find anything you said, any file you sent, or anyone in your team."
  },

  calls: {
    title: "Audio & Video calls",
    description:
      "Organize one-to-one or large team-wide video calls, with screen-sharing."
  }
};

export default {
  name: "PartialCommonFeature",

  props: {
    feature: {
      type: String,
      required: true,

      validator(x) {
        return FEATURES[x] !== undefined;
      }
    }
  },

  computed: {
    featureItem() {
      return FEATURES[this.feature] || null;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-partial-common-feature";

#{$c} {
  background: $color-background-tertiary;
  border: 1px solid $color-border-secondary;
  backdrop-filter: blur(4px);
  border-radius: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  #{$c}__illustration {
    height: 175px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }

  #{$c}__content {
    padding: 32px 48px 48px;
    text-align: center;
  }

  #{$c}__content-description {
    color: $color-base-grey-dark;
    line-height: 22px;
    margin-top: 12px;
  }

  // --> FEATURES <--

  &--encrypt {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-encrypt.svg");
    }
  }

  &--share {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-share.svg");
    }
  }

  &--history {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-history.svg");
    }
  }

  &--integration {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-integration.svg");
    }
  }

  &--search {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-search.svg");
    }
  }

  &--calls {
    #{$c}__illustration {
      background-image: url("@/assets/images/components/partial/common/PartialCommonFeature/illustration-calls.svg");
    }
  }
}
</style>
