<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-footer
    page-wrapper
      .c-page-footer__main
        .c-page-footer__left
          base-logo(
            class="c-page-footer__logo",
            tint="black"
            size="large"
          )

          .c-page-footer__motto
            p
              | We are building the new standard of the workplace.

            p
              | It’s

              base-space

              a(
                :href="$config.url.github_prose"
                class="u-medium"
                target="_blank"
              )
                | open-source

              | , decentralized, and private.

          ul.c-page-footer__social.u-medium(
            v-if="socialItems.length > 0"
          )
            li.c-page-footer__social-button(
              v-for="socialItem in socialItems"
              :key="'social_' + socialItem.platform"
            )
              a.c-page-footer__social-link(
                :href="socialItem.target"
                target="_blank"
              )
                span.c-page-footer__social-icon(
                  v-if="socialItem.icon"
                  v-html="socialItem.icon"
                )

                | {{ socialItem.label }}

        .c-page-footer__right.c-page-footer__right--full
          .c-page-footer__segments(
            v-if="segments.length > 0"
          )
            .c-page-footer__segment(
              v-for="segment in segments"
              :key="'segment_' + segment.id"
            )
              h6.c-page-footer__segment-title.u-title.u-bold
                | {{ segment.title }}

              ul.c-page-footer__segment-items
                li(
                  v-for="segmentItem, index in segment.items"
                  :key="'segment_' + segment.id + '_' + index"
                  :class=`[
                    "c-page-footer__segment-item",
                    {
                      "u-medium": segmentItem.emphasis
                    }
                  ]`
                )
                  nuxt-link(
                    v-if="segmentItem.target.startsWith('/')"
                    :to="segmentItem.target"
                    class="c-page-footer__segment-link"
                  )
                    | {{ segmentItem.label }}

                  a.c-page-footer__segment-link(
                    v-else
                    :href="segmentItem.target"
                  )
                    span.c-page-footer__segment-indicator(
                      v-if="segmentItem.indicatorIcon"
                      :style="'background-image: url(' + segmentItem.indicatorIcon + ');'"
                    )

                    | {{ segmentItem.label }}

      .c-page-footer__copyright
        .c-page-footer__left
          .c-page-footer__badges(
            v-if="badges.length > 0"
          )
            a.c-page-footer__badge(
              v-for="badge in badges"
              v-html="badge.image"
              :key="badge.id"
              :href="badge.target"
              target="_blank"
            )

        .c-page-footer__middle
          .c-page-footer__ownership
            span.c-page-footer__author
              | {{ $config.author.name }} © {{ currentYear }}

            span.c-page-footer__separator
              | –

            image-copyright-ownership-quote(
              class="c-page-footer__quote"
            )

        .c-page-footer__right
          .c-page-footer__crafted.u-medium
            image-copyright-crafted-flag(
              class="c-page-footer__flag"
            )

            | Crafted in the European Union
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageSocialIconTwitter from "~/assets/images/components/page/PageFooter/social-icon-twitter.svg?raw";
import ImageSocialIconYouTube from "~/assets/images/components/page/PageFooter/social-icon-youtube.svg?raw";
import ImageSocialIconGithub from "~/assets/images/components/page/PageFooter/social-icon-github.svg?raw";

import ImageCopyrightBadgesOpenSource from "~/assets/images/components/page/PageFooter/copyright-badges-open_source.svg?raw";
import ImageCopyrightBadgesClimateNeutral from "~/assets/images/components/page/PageFooter/copyright-badges-climate_neutral.svg?raw";
import ImageCopyrightOwnershipQuote from "~/assets/images/components/page/PageFooter/copyright-ownership-quote.svg?inline";
import ImageCopyrightCraftedFlag from "~/assets/images/components/page/PageFooter/copyright-crafted-flag.svg?inline";

export default {
  name: "PageFooter",

  components: { ImageCopyrightOwnershipQuote, ImageCopyrightCraftedFlag },

  data() {
    return {
      // --> DATA <--

      currentYear: new Date().getFullYear(),

      socialItems: [
        {
          platform: "twitter",
          label: "Twitter",
          icon: ImageSocialIconTwitter,
          target: this.$config.url.twitter_prose
        },

        {
          platform: "youtube",
          label: "YouTube",
          icon: ImageSocialIconYouTube,
          target: this.$config.url.youtube_prose
        },

        {
          platform: "github",
          label: "GitHub",
          icon: ImageSocialIconGithub,
          target: this.$config.url.github_prose
        }
      ],

      badges: [
        {
          id: "open_source",
          image: ImageCopyrightBadgesOpenSource,
          target: this.$config.url.github_prose
        },

        {
          id: "climate_neutral",
          image: ImageCopyrightBadgesClimateNeutral,
          target: this.$config.url.climateneutral_web
        }
      ],

      segments: [
        {
          id: "product",
          title: "Product",

          items: [
            {
              label: "Open-Source",
              target: this.$config.url.github_prose
            },

            {
              label: "Downloads",
              target: "/downloads/"
            },

            {
              label: "Changelog",
              target: "/changelog/"
            },

            {
              label: "Read our Blog",
              target: "/blog/"
            }
          ]
        },

        {
          id: "company",
          title: "Company",

          items: [
            {
              label: "Terms & Privacy",
              target: "/terms/"
            },

            {
              label: "Brand Assets",

              target:
                `${this.$config.url.prose_files}/` +
                `public/documents/brand-assets.zip`
            },

            {
              label: "Work with Us",
              target: `mailto:${this.$config.email.prose_careers}`
            }
          ]
        },

        {
          id: "support",
          title: "Support",

          items: [
            {
              label: "Help Center",
              target: `${this.$config.url.prose_help}/`
            },

            {
              label: "Contact Us",
              target: "/contact/"
            },

            {
              label: "System Status",
              target: `${this.$config.url.prose_status}/`,
              indicatorIcon: `${this.$config.url.prose_status}/includes/badge/`,
              emphasis: true
            }
          ]
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
$c: ".c-page-footer";

// VARIABLES
$alignments-margin-sides: 12px;

$segment-link-padding-left: 10px;

.c-page-footer {
  border-top: 1px solid $color-border-secondary;
  padding: 40px 0 24px;

  #{$c}__main,
  #{$c}__copyright {
    display: flex;
  }

  #{$c}__main {
    #{$c}__logo {
      height: 30px;
    }

    #{$c}__motto {
      color: rgba($color-black, 0.4);
      font-size: 13px;
      line-height: 18px;
      margin-top: 26px;

      a {
        color: rgba($color-black, 0.55);
        text-decoration: underline;
      }
    }

    #{$c}__social {
      font-size: 12px;
      margin-top: 24px;
      align-items: center;
      display: flex;

      #{$c}__social-button {
        margin-right: 16px;
        display: inline-block;

        &:last-child {
          margin-right: 0;
        }
      }

      #{$c}__social-link {
        color: $color-base-black-mid;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        &,
        #{$c}__social-icon {
          align-items: center;
          display: flex;
        }

        #{$c}__social-icon {
          margin-right: 3px;
          fill: $color-base-black-mid;
          flex: 0 0 auto;

          svg {
            height: 12px;
          }
        }
      }
    }

    #{$c}__segments {
      padding-top: 9px;
      display: flex;
      justify-content: flex-end;
    }

    #{$c}__segment {
      color: $color-black;
      width: 165px;
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }

      #{$c}__segment-title {
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: -0.05px;
      }

      #{$c}__segment-items {
        margin-top: 15px;

        #{$c}__segment-item {
          margin-left: (-1 * $segment-link-padding-left);
          display: block;
        }

        #{$c}__segment-link {
          background-color: transparent;
          color: inherit;
          font-size: 13px;
          line-height: 18px;
          padding: 2px 6px 4px $segment-link-padding-left;
          display: flex;
          align-items: center;
          border-radius: 2px;
          transition: background-color 100ms linear;

          &:hover {
            background-color: rgba($color-base-black-mid, 0.06);
          }

          &:active {
            background-color: rgba($color-base-black-mid, 0.08);
          }
        }

        #{$c}__segment-indicator {
          background-color: lighten($color-base-grey-mid, 14%);
          width: 9px;
          height: 9px;
          margin-right: 5px;
          margin-bottom: -1px;
          border-radius: 100%;
        }
      }
    }
  }

  #{$c}__copyright {
    border-top: 1px solid rgba($color-border-secondary, 0.05);
    margin-top: 46px;
    padding-top: 24px;
    align-items: center;

    #{$c}__badges {
      display: flex;

      #{$c}__badge {
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          opacity: 0.7;
        }

        svg {
          width: auto;
          height: 28px;

          path {
            &[fill] {
              fill: $color-base-black-mid;
            }

            &[stroke] {
              stroke: $color-base-black-mid;
            }
          }
        }
      }
    }

    #{$c}__ownership {
      color: $color-base-grey-mid;

      #{$c}__separator {
        margin: 0 6px;
        opacity: 0.4;
      }

      #{$c}__quote {
        width: auto;
        height: 14px;
        fill: $color-base-grey-mid;
        vertical-align: middle;
      }
    }

    #{$c}__crafted {
      color: #003399;
      display: flex;
      align-items: center;

      #{$c}__flag {
        width: auto;
        height: 20px;
        margin-right: 5px;
        margin-bottom: -1px;
      }
    }
  }

  // --> ALIGNMENTS <--

  #{$c}__left,
  #{$c}__right {
    flex: 0 0 auto;

    &--full {
      flex: 1;
    }
  }

  #{$c}__left {
    margin-right: $alignments-margin-sides;
  }

  #{$c}__middle {
    text-align: center;
    flex: 1;
  }

  #{$c}__right {
    margin-left: $alignments-margin-sides;
  }
}
</style>
