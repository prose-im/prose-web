<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-about-team
  page-wrapper(
    class="c-section-about-team__inner"
  )
    base-title(
      class="c-section-about-team__title"
      tint="gradient"
      level="large"
      align="center"
    )
      | Meet the Team

    ul.c-section-about-team__members
      li(
        v-for="(member, index) in teamMembers"
        :key="'member_' + index"
        class="c-section-about-team__member"
      )
        div(
          :style="{ 'background-image': 'url(' + member.imageUrl + ')' }"
          class="c-section-about-team__member-image"
        )

        .c-section-about-team__member-details
          h4.c-section-about-team__member-name.u-bold
            | {{ member.name }}

          p.c-section-about-team__member-position
            | {{ member.position }}

          ul.c-section-about-team__member-socials(
            v-if="member.socials && member.socials.length > 0"
          )
            li(
              v-for="socialItem in member.socials"
              :key="'social_' + index + '_' + socialItem.platform"
              class="c-section-about-team__member-socials"
            )
              a.c-section-about-team__member-social-link(
                :href="generateSocialLink(socialItem.platform, socialItem.handle)"
                target="_blank"
              )
                span.c-section-about-team__member-social-icon(
                  v-if="socialItem.icon"
                  v-html="socialItem.icon"
                )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageSocialIconTwitter from "~/assets/images/components/page/PageFooter/social-icon-twitter.svg?raw";
import ImageSocialIconGithub from "~/assets/images/components/page/PageFooter/social-icon-github.svg?raw";

import ValerianAvatar from "~/assets/images/components/section/about/SectionAboutTeam/avatar-valerian.webp?raw";
import SaifAvatar from "~/assets/images/components/section/about/SectionAboutTeam/avatar-saif.webp?raw";
import GuillaumeAvatar from "~/assets/images/components/section/about/SectionAboutTeam/avatar-guillaume.webp?raw";
import MarcAvatar from "~/assets/images/components/section/about/SectionAboutTeam/avatar-marc.webp?raw";

// CONSTANTS
const SOCIAL_BASE_URLS = {
  github: "https://github.com",
  twitter: "https://twitter.com"
};

export default {
  name: "SectionAboutTeam",

  data() {
    return {
      teamMembers: [
        {
          imageUrl: ValerianAvatar,
          name: "Valerian Saliou",
          position: "Web Platform Developer",

          socials: [
            {
              platform: "twitter",
              icon: ImageSocialIconTwitter,
              handle: "valeriansaliou"
            },

            {
              platform: "github",
              icon: ImageSocialIconGithub,
              handle: "valeriansaliou"
            }
          ]
        },

        {
          imageUrl: MarcAvatar,
          name: "Marc Bauer",
          position: "Apple Platform Developer",

          socials: [
            {
              platform: "twitter",
              icon: ImageSocialIconTwitter,
              handle: "nesium"
            },

            {
              platform: "github",
              icon: ImageSocialIconGithub,
              handle: "nesium"
            }
          ]
        },

        {
          imageUrl: GuillaumeAvatar,
          name: "Guillaume Robert",
          position: "Website Developer",

          socials: [
            {
              platform: "twitter",
              icon: ImageSocialIconTwitter,
              handle: "sahkyostudio"
            },

            {
              platform: "github",
              icon: ImageSocialIconGithub,
              handle: "sahkyo"
            }
          ]
        },

        {
          imageUrl: SaifAvatar,
          name: "Saif Hafiani",
          position: "Designer & Brand",

          socials: [
            {
              platform: "twitter",
              icon: ImageSocialIconTwitter,
              handle: "sahkyostudio"
            },

            {
              platform: "github",
              icon: ImageSocialIconGithub,
              handle: "sahkyo"
            }
          ]
        }
      ]
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Generates social link
     * @public
     * @param  {string} platform
     * @param  {string} handle
     * @return {string} Generated social link
     */
    generateSocialLink(platform, handle) {
      const _baseUrl = SOCIAL_BASE_URLS[platform] || null;

      if (_baseUrl !== null) {
        return `${_baseUrl}/${handle}`;
      }

      return `#${platform}`;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-about-team";

.c-section-about-team {
  position: relative;
  padding: 80px 0;
  z-index: 1;

  #{$c}__members {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    padding: 56px 0;
  }

  #{$c}__member {
    background-color: $color-background-secondary;
    border: 1px solid $color-border-secondary;
    padding: 48px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(16px);
    border-radius: 32px;

    #{$c}__member-details {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
    }

    #{$c}__member-image {
      background-color: #f4f4f9;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 128px;
      width: 128px;
      overflow: hidden;
      border-radius: 100%;
      margin-bottom: 24px;
    }

    #{$c}__member-position {
      color: $color-base-grey-dark;
    }

    #{$c}__member-socials {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 6px;
    }

    #{$c}__member-social-icon {
      fill: $color-base-grey-dark;
      flex: 0 0 auto;

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-section-about-team {
    #{$c}__members {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-section-about-team {
    #{$c}__members {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
