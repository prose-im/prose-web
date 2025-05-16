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
          h4.c-section-about-team__member-name.u-semibold
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
                :href="generateSocialLink(socialItem.platform, socialItem.handle, socialItem.instance)"
                target="_blank"
              )
                base-social-icon(
                  :platform="socialItem.platform"
                  class="c-section-about-team__member-social-icon"
                )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ValerianAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-valerian.jpg";
import MarcAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-marc.webp";
import RemiAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-remi.webp";
import PalomaAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-paloma.webp";
import SaifAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-saif.webp";
import GuillaumeAvatar from "@/assets/images/components/section/about/SectionAboutTeam/avatar-guillaume.webp";

// CONSTANTS
const SOCIAL_BASE_URLS = {
  github: "https://github.com/[handle]",
  x: "https://x.com/[handle]",
  mastodon: "https://[instance]/@[handle]",
  xmpp: "xmpp:[handle]@[instance]"
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
              platform: "x",
              handle: "valeriansaliou"
            },

            {
              platform: "mastodon",
              instance: "toot.io",
              handle: "valerian"
            },

            {
              platform: "github",
              handle: "valeriansaliou"
            },

            {
              platform: "xmpp",
              handle: "valerian",
              instance: "prose.org"
            }
          ]
        },

        {
          imageUrl: MarcAvatar,
          name: "Marc Bauer",
          position: "Apple Platform Developer",

          socials: [
            {
              platform: "x",
              handle: "nesium"
            },

            {
              platform: "mastodon",
              instance: "mastodon.social",
              handle: "nesium3000"
            },

            {
              platform: "github",
              handle: "nesium"
            },

            {
              platform: "xmpp",
              handle: "marc",
              instance: "prose.org"
            }
          ]
        },

        {
          imageUrl: RemiAvatar,
          name: "Rémi Bardon",
          position: "Pod Server Developer",

          socials: [
            {
              platform: "x",
              handle: "remibardon"
            },

            {
              platform: "github",
              handle: "RemiBardon"
            },

            {
              platform: "xmpp",
              handle: "remi",
              instance: "prose.org"
            }
          ]
        },

        {
          imageUrl: PalomaAvatar,
          name: "Paloma Sanchez",
          position: "Pod Dashboard Developer",

          socials: [
            {
              platform: "github",
              handle: "Paloma-Sanchez"
            },

            {
              platform: "xmpp",
              handle: "paloma",
              instance: "prose.org"
            }
          ]
        },

        {
          imageUrl: GuillaumeAvatar,
          name: "Guillaume Robert",
          position: "Website Developer",

          socials: [
            {
              platform: "x",
              handle: "sahkyostudio"
            },

            {
              platform: "github",
              handle: "sahkyo"
            },

            {
              platform: "xmpp",
              handle: "guillaume",
              instance: "prose.org"
            }
          ]
        },

        {
          imageUrl: SaifAvatar,
          name: "Saif Hafiani",
          position: "Designer & Brand",

          socials: [
            {
              platform: "x",
              handle: "sahkyostudio"
            },

            {
              platform: "github",
              handle: "sahkyo"
            },

            {
              platform: "xmpp",
              handle: "saif",
              instance: "prose.org"
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
     * @param  {string} [instance]
     * @return {string} Generated social link
     */
    generateSocialLink(platform, handle, instance = null) {
      const _baseUrl = SOCIAL_BASE_URLS[platform] || null;

      if (_baseUrl !== null) {
        // Inject handle in base URL
        let _socialUrl = _baseUrl.replace("[handle]", handle);

        // Inject instance in base URL? (if needed)
        if (instance !== null) {
          _socialUrl = _socialUrl.replace("[instance]", instance);
        }

        return _socialUrl;
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

#{$c} {
  position: relative;
  padding: 80px 0 20px;
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
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
    }

    #{$c}__member-image {
      background-color: $color-base-grey-light;
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

    #{$c}__member-social-link {
      line-height: 0;
      display: block;

      #{$c}__member-social-icon {
        fill: $color-base-grey-dark;
        height: 24px;
        width: 24px;
        transition: fill 100ms linear;
      }

      &:hover {
        #{$c}__member-social-icon {
          fill: darken($color-base-grey-dark, 10%);
        }
      }

      &:active {
        #{$c}__member-social-icon {
          fill: darken($color-base-grey-dark, 16%);
        }
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__members {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__members {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
