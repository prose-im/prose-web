<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-cases-bento
  page-wrapper(class="c-section-cases-bento__wrapper")
    base-wave(
      :variant="7"
      class="c-section-cases-bento__wave"
    )

    base-title(
      level="large"
      tint="gradient"
      align="center"
    )
      | Built by engineers,

      br

      | for engineers

    .c-section-cases-bento__grid
        template(
            v-for="feature, index in features"
        )
            base-icon-card(
                :key="index"
                class="c-section-cases-bento__card"
                :icon="feature.icon"
                :tint="feature.tint"
                :image="feature.imageSrc"
            )

                template(
                    slot="title"
                )
                    | {{ feature.title }}

                template(
                    slot="description"
                )
                    | {{ feature.description }}
    
    
</template>

<!-- **********************************************************************
        SCRIPT
        ********************************************************************** -->

<script>
export default {
  name: "SectionCasesBento",

  computed: {
    features() {
      return [
        {
          icon: "open-source",
          tint: "blue",
          title: "Open Source",
          description:
            "Inspect, modify or build on top of our open source code – Prose is completely transparent so you always know what’s going on under the hood.",
          imageSrc:
            require("~/assets/images/components/section/use-cases/SectionCasesBento/github-commits.svg")
        },
        {
          icon: "native",
          tint: "pink",
          title: "Native",
          description:
            "Enjoy dedicated native apps for MacOS, Windows and Linux. Your battery will be grateful."
        },
        {
          icon: "decentralized",
          tint: "purple",
          title: "Decentralized",
          description:
            "Prose is powered by the decentralized XMPP protocol which makes it more resilient than centralized alternatives."
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
$c: ".c-section-cases-bento";

.c-section-cases-bento {
  padding: 250px 0 150px;
  position: relative;

  #{$c}__wrapper {
    position: relative;
  } 

  #{$c}__grid {
    display: grid;
    max-width: 800px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 64px;
  }

  #{$c}__card {
    &:nth-child(1) {
      grid-column: 1 / 3;
    }
  }

  #{$c}__wave {
    height: 550px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
