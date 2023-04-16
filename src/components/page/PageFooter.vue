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
          class="c-page-footer__logo"
          tint="black"
          size="small"
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
              base-social-icon(
                :platform="socialItem.platform"
                class="c-page-footer__social-icon"
              )

              | {{ socialItem.label }}

      .c-page-footer__right.c-page-footer__right--full
        .c-page-footer__segments(
          v-if="segments.length > 0"
        )
          page-footer-segment(
            v-for="segment in segments"
            :key="'segment_' + segment.id"
            :id="segment.id"
            :title="segment.title"
            :items="segment.items"
            class="c-page-footer__segment"
          )

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
          base-tooltip(
            align="left"
            direction="top"
          )
            template(
              slot="tooltip"
            )
              | Prose is a non-profit funded by

              base-space

              a.u-medium(
                :href="ownershipFunderUrl"
                target="_blank"
              )
                | Valerian Saliou

            span.c-page-footer__author(
              slot="default"
            )
              | {{ $config.author.name }} © {{ currentYear }}

      .c-page-footer__right
        .c-page-footer__crafted.u-medium
          image-copyright-crafted-flag(
            class="c-page-footer__flag"
          )

          span.c-page-footer__made-in.c-page-footer__made-in--long
            | Crafted in the European Union

          span.c-page-footer__made-in.c-page-footer__made-in--short
            | Made in Europe
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageCopyrightBadgesOpenSource from "~/assets/images/components/page/PageFooter/copyright-badges-open_source.svg?raw";
import ImageCopyrightCraftedFlag from "~/assets/images/components/page/PageFooter/copyright-crafted-flag.svg?inline";

// CONSTANTS
const STATUS_COLORS = {
  healthy: "00ab7e",
  sick: "de8500",
  dead: "de0707"
};

export default {
  name: "PageFooter",

  components: {
    ImageCopyrightCraftedFlag
  },

  data() {
    return {
      // --> DATA <--

      currentYear: new Date().getFullYear(),

      socialItems: [
        {
          platform: "twitter",
          label: "Twitter",
          target: this.$config.url.twitter_prose
        },

        {
          platform: "github",
          label: "GitHub",
          target: this.$config.url.github_prose
        }
      ],

      badges: [
        {
          id: "open_source",
          image: ImageCopyrightBadgesOpenSource,
          target: this.$config.url.github_prose
        }
      ],

      segments: [
        {
          id: "product",
          title: "Product",

          items: [
            {
              label: "Downloads",
              target: "/downloads/"
            },

            {
              label: "Changelog",
              target: "/changelog/"
            },

            {
              label: "Open-Source",
              target: this.$config.url.github_prose
            }
          ]
        },

        {
          id: "usecases",
          title: "Use Cases",

          items: [
            {
              label: "Developers",
              target: "/use-cases/developers/"
            },

            {
              label: "Non-Profits",
              target: "/use-cases/non-profits/"
            },

            {
              label: "Remote Teams",
              target: "/use-cases/remote-teams/"
            },

            {
              label: "Web3",
              target: "/use-cases/web3/"
            }
          ]
        },

        {
          id: "company",
          title: "Company",

          items: [
            {
              label: "Blog",
              target: "/blog/"
            },

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
              target: "/about/"
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
              label: "Technical Docs",
              target: `${this.$config.url.prose_docs}/`
            },

            {
              label: "Contact Us",
              target: "/contact/"
            },

            {
              label: "System Status",
              target: `${this.$config.url.prose_status}/`,
              emphasis: true,

              indicatorIcon:
                `${this.$config.url.prose_status}/includes/badge/` +
                `?healthy=${STATUS_COLORS.healthy}&` +
                `sick=${STATUS_COLORS.sick}&` +
                `dead=${STATUS_COLORS.dead}`
            }
          ]
        }
      ],

      ownershipFunderUrl: `${this.$config.url.valeriansaliou_web}/`
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

.c-page-footer {
  background-color: $color-background-secondary;
  border-top: 1px solid $color-border-secondary;
  padding: 40px 0 24px;
  overflow: hidden;
  position: relative;

  #{$c}__main,
  #{$c}__copyright {
    display: flex;
  }

  #{$c}__main {
    #{$c}__motto {
      color: rgba($color-black, 0.4);
      font-size: 13.5px;
      line-height: 18px;
      margin-top: 26px;

      a {
        color: rgba($color-black, 0.55);
        text-decoration: underline;
      }
    }

    #{$c}__social {
      font-size: 13px;
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
          height: 12px;
          width: 14px;
          margin-right: 3px;
          fill: $color-base-black-mid;
          flex: 0 0 auto;
        }
      }
    }

    #{$c}__segments {
      display: flex;
      justify-content: flex-end;

      #{$c}__segment {
        width: 125px;
        margin-right: 24px;

        &:last-child {
          margin-right: 0;
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
      user-select: none;
    }

    #{$c}__crafted {
      color: #003399;

      #{$c}__flag {
        vertical-align: middle;
        width: auto;
        height: 20px;
        margin-right: 5px;
        margin-top: -2.5px;
      }

      #{$c}__made-in {
        &--short {
          display: none;
        }
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

// --> MEDIA-QUERIES <--

@media (max-width: 1170px) {
  .c-page-footer {
    #{$c}__main {
      #{$c}__segments {
        #{$c}__segment:nth-child(2) {
          display: none;
        }
      }
    }
  }
}

@media (max-width: $screen-medium-width-breakpoint) {
  .c-page-footer {
    #{$c}__main {
      #{$c}__segments {
        #{$c}__segment {
          width: 140px;
          margin-right: 14px;
        }
      }
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  .c-page-footer {
    #{$c}__main {
      flex-direction: column;

      #{$c}__logo,
      #{$c}__motto {
        text-align: center;
        margin: 0 auto;
      }

      #{$c}__social,
      #{$c}__segments {
        justify-content: center;
      }

      #{$c}__motto {
        margin-top: 16px;
      }

      #{$c}__social {
        margin-top: 20px;
      }

      #{$c}__segments {
        padding-top: 54px;

        #{$c}__segment {
          margin-right: 18px;
        }
      }

      #{$c}__left,
      #{$c}__middle,
      #{$c}__right {
        flex: 1;
      }

      #{$c}__left {
        margin-right: 0;
      }

      #{$c}__right {
        margin-left: 0;
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c}__copyright {
    #{$c}__badges {
      #{$c}__badge {
        &:nth-child(n + 2) {
          display: none;
        }
      }
    }

    #{$c}__crafted {
      #{$c}__made-in {
        &--long {
          display: none;
        }

        &--short {
          display: inline-block;
        }
      }
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-footer {
    #{$c}__copyright {
      #{$c}__left {
        display: none;
      }

      #{$c}__middle {
        text-align: left;
      }
    }
  }
}
</style>
