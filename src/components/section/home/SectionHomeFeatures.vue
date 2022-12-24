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
          :key="index"
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
import Calls from "@/assets/images/components/section/home/SectionHomeFeatures/calls.svg";
import Encrypt from "@/assets/images/components/section/home/SectionHomeFeatures/encrypt.svg";
import History from "@/assets/images/components/section/home/SectionHomeFeatures/history.svg";
import Integration from "@/assets/images/components/section/home/SectionHomeFeatures/integration.svg";
import Search from "@/assets/images/components/section/home/SectionHomeFeatures/search.svg";
import Share from "@/assets/images/components/section/home/SectionHomeFeatures/share.svg";

export default {
  name: "SectionHomeFeatures",
  data() {
    return {
      features: [
        {
          title: "Encrypt everything",
          description:
            "All messages, including your chat history, are end-to-end encrypted.",
          image: Encrypt
        },
        {
          title: "Share image & files",
          description:
            "Send images to your co-workers. Transfer large files without limits.",
          image: Share
        },
        {
          title: "Unlimited chat history",
          description:
            "Your past chats are stored and encrypted on your Prose server.",
          image: History
        },
        {
          title: "Connect integrations",
          description:
            "Want to plug your other apps to Prose? Install community-made integrations.",
          image: Integration
        },
        {
          title: "Powerful search",
          description:
            "Quickly find anything you said, any file you sent, or anyone in your team.",
          image: Search
        },
        {
          title: "Audio & Video calls",
          description:
            "Organize one-to-one or large team-wide video calls, with screen-sharing.",
          image: Calls
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
  padding-bottom: 200px;
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
    background: rgba(246, 247, 251, 0.9); /* TODO: commonize palette */
    border: 1px solid rgba(129, 137, 155, 0.2); /* TODO: commonize palette */
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
    color: $color-base-blue-mid;
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
