<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-home-features
  page-wrapper(
    class="c-section-home-features__inner"
  )
    base-title(
      class="c-section-home-features__title"
      tint="gradient"
      align="center"
      level="large"
    )
      | Prose makes

      br

      | teamwork easy

    .c-section-home-features__grid
      template(
        v-for="(item, index) in features"
      )
        .c-section-home-features__card(
          :key="'feature_' + index"
        )
          .c-section-home-features__illustration(
            :style="{ 'background-image': 'url(' + item.image + ')'}"
          )

          .c-section-home-features__content
            base-title(
              level="mini",
              align="center"
            )
              | {{ item.title }}

            p.c-section-home-features__content-description {{ item.description }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIllustrationCalls from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-calls.svg";
import ImageIllustrationEncrypt from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-encrypt.svg";
import ImageIllustrationHistory from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-history.svg";
import ImageIllustrationIntegration from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-integration.svg";
import ImageIllustrationSearch from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-search.svg";
import ImageIllustrationShare from "@/assets/images/components/section/home/SectionHomeFeatures/illustration-share.svg";

export default {
  name: "SectionHomeFeatures",

  data() {
    return {
      features: [
        {
          title: "Encrypt everything",

          description:
            "All messages, including your chat history, are end-to-end encrypted.",

          image: ImageIllustrationEncrypt
        },

        {
          title: "Share image & files",

          description:
            "Send images to your co-workers. Transfer large files without limits.",

          image: ImageIllustrationShare
        },

        {
          title: "Unlimited chat history",

          description:
            "Your past chats are stored and encrypted on your Prose server.",

          image: ImageIllustrationHistory
        },

        {
          title: "Connect integrations",

          description:
            "Want to plug your other apps to Prose? Install community-made integrations.",

          image: ImageIllustrationIntegration
        },

        {
          title: "Powerful search",

          description:
            "Quickly find anything you said, any file you sent, or anyone in your team.",

          image: ImageIllustrationSearch
        },

        {
          title: "Audio & Video calls",

          description:
            "Organize one-to-one or large team-wide video calls, with screen-sharing.",

          image: ImageIllustrationCalls
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
$c: ".c-section-home-features";

.c-section-home-features {
  padding-bottom: 80px;
  position: relative;
  z-index: 1;

  #{$c}__title {
    margin-bottom: 64px;
  }

  #{$c}__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 32px;
  }

  #{$c}__card {
    background: $color-background-tertiary;
    border: 1px solid $color-border-secondary;
    backdrop-filter: blur(4px);
    border-radius: 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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

  @media (max-width: $screen-medium-width-breakpoint) {
    #{$c}__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: $screen-tiny-width-breakpoint) {
    padding-bottom: 0px;

    #{$c}__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
