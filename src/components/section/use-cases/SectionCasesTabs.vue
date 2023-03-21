<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cases-tabs
  page-wrapper

    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      | Endless

      br

      | Customization

    .c-section-cases-tabs__grid
        template(
            v-for="tabs, index in tabs"
        )
            base-icon-card(
                :key="index"
                class="c-section-cases-bento__card"
                :icon="tabs.icon"
                :tint="tabs.tint"
                :active="tabs.active"
            )

                template(
                    slot="title"
                )
                    | {{ tabs.title }}

                template(
                    slot="description"
                )
                    | {{ tabs.description }}
    
    .c-section-cases-tabs__media 
      template(
          v-for="tabs, index in tabs"
      )
        img(
            :key="index"
            :src="tabs.media"
            alt=""
            class="c-section-cases-tabs__media-img"
        )
    
    
</template>

<!-- **********************************************************************
        SCRIPT
        ********************************************************************** -->

<script>
export default {
  name: "SectionCasesTabs",

  computed: {
    tabs() {
      return [
        {
          icon: "integrations",
          tint: "pink",
          title: "Connect with your apps",
          description:
            "Build bots and connect to your favorite tools with an easy to use API.",
          active: true,
          media: require("~/assets/images/components/section/use-cases/SectionCasesTabs/integrations.png")
        },
        {
          icon: "server",
          tint: "purple",
          title: "Always in charge",
          description:
            "Hosting Prose means you control the cost and can scale more efficiently.",
          active: false,
          media: require("~/assets/images/components/section/use-cases/SectionCasesTabs/self-hosted.png")
        },
        {
          icon: "paintbrush",
          tint: "blue",
          title: "Tailor-made experience",
          description:
            "Create custom features and modify the code to fit your specific requirements",
          active: false,
          media: require("~/assets/images/components/section/use-cases/SectionCasesTabs/tailor-made-experience.png")
        }
      ];
    }
  }
};
</script>

<!-- **********************************************************************
        STYLE
        ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cases-tabs";

.c-section-cases-tabs {
  padding: 150px 0;
  position: relative;

  #{$c}__grid {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    margin: 64px 0 40px;
  }

  #{$c}__media {
    aspect-ratio: 2 / 1;
    height: 600px;
    overflow: hidden;
    border-radius: 32px;
  }

  #{$c}__media-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
