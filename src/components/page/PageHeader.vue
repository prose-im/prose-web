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
    "c-page-header",
    {
      "c-page-header--embedded": embedded,
      "c-page-header--announcement": hasAnnouncement
    }
  ]`
)
  .c-page-header__sticky
    .c-page-header__announcement(
      v-if="hasAnnouncement"
    )
      page-wrapper(
        class="c-page-header__announcement-wrap"
      )
        span.c-page-header__announcement-title.u-ellipsis.u-medium
          | {{ (announcement.title || "Announcement") }}

        span.c-page-header__announcement-separator

        span.c-page-header__announcement-description.u-ellipsis
          | {{ (announcement.description || "(?)") }}

    .c-page-header__bar
      page-wrapper
        .c-page-header__inner
          .c-page-header__left
            nuxt-link(
              to="/"
              class="c-page-header__homepage"
            )
              base-logo(
                class="c-page-header__logo"
                size="tiny"
              )

          .c-page-header__middle
            ul.c-page-header__menu
              li(
                v-for="item in menuItems"
                :key="item.id"
                :class=`[
                  "c-page-header__menu-item",
                  {
                    "c-page-header__menu-item--active": (currentRootPageName === item.id)
                  }
                ]`
              )
                nuxt-link(
                  v-if="item.target"
                  class="c-page-header__menu-link"
                  :to="item.target"
                )
                  | {{ item.label }}

                span.c-page-header__menu-link(
                  v-else-if="item.dropdown"
                )
                  base-dropdown(
                    :items="item.dropdown"
                    class="c-page-header__menu-dropdown"
                  )

                  | {{ item.label }}

                  image-menu-dropdown-link-arrow(
                    class="c-page-header__menu-arrow"
                  )

          .c-page-header__right
            a(
              :href="$config.url.prose_app"
              class="c-page-header__action"
            )
              base-button(
                class="c-page-header__action-button"
                right-icon="arrow-right"
                tint="fancy"
              )
                | Go to App

            .c-page-header__mobile-toggle
              page-header-menu-toggle(
                @click="onMobileToggleClick"
                :is-open="isMobileMenuOpen"
              )

    .c-page-header__mobile(
      v-if="isMobileMenuOpen"
    )
      page-wrapper
        ul.c-page-header__mobile-menu
          li(
            v-for="item in menuItems"
            :key="item.id"
            :class=`[
              "c-page-header__menu-item",
              {
                "c-page-header__menu-item--active": (currentRootPageName === item.id)
              }
            ]`
          )
            nuxt-link(
              v-if="item.target"
              class="c-page-header__menu-link"
              :to="item.target"
            )
              | {{ item.label }}

            base-disclosure(
              v-else-if="item.dropdown"
              class="c-page-header__menu-dropdown"
            )
              base-disclosure-button.c-page-header__menu-link
                | {{ item.label }}

                image-menu-dropdown-link-arrow(
                  class="c-page-header__menu-arrow"
                )

              base-disclosure-panel
                ul.c-page-header__mobile-submenu
                  li(
                    v-for="dropdownItem in item.dropdown"
                    @click="isMobileMenuOpen = false"
                  )
                    nuxt-link(
                      :to="dropdownItem.target"
                      class="c-page-header__menu-item"
                    )
                      span.c-page-header__disclosure-panel-icon(
                        v-html="dropdownItem.icon"
                      )

                      span.c-page-header__disclosure-panel-title.u-medium
                        | {{ dropdownItem.title }}

        a(
          :href="$config.url.prose_app"
          class="c-page-header__action"
        )
          base-button(
            class="c-page-header__action-button"
            right-icon="arrow-right"
            tint="fancy"
          )
            | Go to App

  .c-page-header__ghost(
    v-if="!embedded"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageMenuDropdownLinkArrow from "~/assets/images/components/page/PageHeader/menu-dropdown-link-arrow.svg?inline";

import ImageMenuDropdownCompanyIconAbout from "~/assets/images/components/page/PageHeader/menu-dropdown-company-icon-about.svg?raw";
import ImageMenuDropdownCompanyIconBlog from "~/assets/images/components/page/PageHeader/menu-dropdown-company-icon-blog.svg?raw";

import ImageMenuDropdownHelpIconHelp from "~/assets/images/components/page/PageHeader/menu-dropdown-help-icon-help.svg?raw";
import ImageMenuDropdownHelpIconDocs from "~/assets/images/components/page/PageHeader/menu-dropdown-help-icon-docs.svg?raw";
import ImageMenuDropdownHelpIconContact from "~/assets/images/components/page/PageHeader/menu-dropdown-help-icon-contact.svg?raw";

import ImageMenuDropdownUseCaseDevelopers from "~/assets/images/components/page/PageHeader/menu-dropdown-usecase-icon-developers.svg?raw";
import ImageMenuDropdownUseCaseWeb3 from "~/assets/images/components/page/PageHeader/menu-dropdown-usecase-icon-web3.svg?raw";
import ImageMenuDropdownUseCaseNonProfits from "~/assets/images/components/page/PageHeader/menu-dropdown-usecase-icon-nonprofits.svg?raw";
import ImageMenuDropdownUseCaseRemoteTeams from "~/assets/images/components/page/PageHeader/menu-dropdown-usecase-icon-remoteteams.svg?raw";

export default {
  name: "PageHeader",

  components: { ImageMenuDropdownLinkArrow },

  props: {
    embedded: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // --> STATE <--

      isMobileMenuOpen: false,

      // --> DATA <--

      announcement: {
        title: "Heads up: Prose is almost ready",
        description: "We expect the Prose server to be released late 2024."
      },

      menuItems: [
        {
          id: "downloads",
          label: "Downloads",
          target: "/downloads/"
        },

        {
          id: "usecases",
          label: "Use Cases",

          dropdown: [
            {
              id: "developers",
              title: "Developers",
              label: "Collaborate on open source projects",
              target: "/usecases/developers/",
              icon: ImageMenuDropdownUseCaseDevelopers
            },

            {
              id: "web3",
              title: "Web3",
              label: "Build & scale Web3 communities",
              target: "/usecases/web3/",
              icon: ImageMenuDropdownUseCaseWeb3
            },

            {
              id: "ngo",
              title: "Non-Profits",
              label: "Ignite collaboration for social impact",
              target: "/usecases/non-profits/",
              icon: ImageMenuDropdownUseCaseNonProfits
            },

            {
              id: "remote",
              title: "Remote Teams",
              label: "Enhance remote team collaboration",
              target: "/usecases/remote-teams/",
              icon: ImageMenuDropdownUseCaseRemoteTeams
            }
          ]
        },

        {
          id: "company",
          label: "Company",

          dropdown: [
            {
              id: "about",
              title: "About Prose",
              label: "Discover who is building Prose",
              target: "/about/",
              icon: ImageMenuDropdownCompanyIconAbout
            },

            {
              id: "blog",
              title: "Blog",
              label: "Find out more about Prose",
              target: "/blog/",
              icon: ImageMenuDropdownCompanyIconBlog
            }
          ]
        },

        {
          id: "help",
          label: "Get Help",

          dropdown: [
            {
              id: "help",
              title: "Help Center",
              label: "Get help with using Prose as a user",
              target: `${this.$config.url.prose_help}/`,
              icon: ImageMenuDropdownHelpIconHelp
            },

            {
              id: "docs",
              title: "Technical Docs",
              label: "Resources for Prose server admins",
              target: `${this.$config.url.prose_docs}/`,
              icon: ImageMenuDropdownHelpIconDocs
            },

            {
              id: "contact",
              title: "Contact Support",
              label: "Question or feature request? Ask us!",
              target: "/contact/",
              icon: ImageMenuDropdownHelpIconContact
            }
          ]
        }
      ]
    };
  },

  computed: {
    hasAnnouncement() {
      return this.$config.modifiers.announcement === true;
    },

    currentRootPageName() {
      // Pick up the parent-most page (segments are separated w/ '-')
      return (this.$route.name || "").split("-")[0] || null;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when mobile toggle is clicked
     * @public
     * @return {undefined}
     */
    onMobileToggleClick() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-header";

// VARIABLES
$icon-width: 18px;

$inner-width-maximum: 740px;

$hover-transition-duration: 150ms;

#{$c} {
  background-color: $color-background-primary;

  #{$c}__sticky,
  #{$c}__ghost {
    height: $page-header-height;
  }

  #{$c}__sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  #{$c}__announcement {
    background-color: #2062da;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05px;
    height: $page-header-announcement-height;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      background-color: rgba($color-black, 0.1);
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    #{$c}__announcement-wrap {
      margin-top: -3px;
      display: flex;
      justify-content: center;
    }

    #{$c}__announcement-title {
      color: $color-white;
    }

    #{$c}__announcement-description {
      color: rgba($color-white, 0.75);
    }

    #{$c}__announcement-separator {
      background-color: rgba($color-white, 0.175);
      width: 1px;
      margin: 2px 16px 0;
    }
  }

  #{$c}__bar {
    height: $page-header-height;
    display: flex;
    align-items: flex-end;
  }

  #{$c}__inner {
    background-color: rgba($color-background-primary, 0.9);
    backdrop-filter: blur(6px) saturate(160%) contrast(45%) brightness(140%);
    border: 1px solid $color-border-tertiary;
    min-height: 60px;
    max-width: $inner-width-maximum;
    margin: 0 auto;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 60px;
    box-shadow: rgba($color-black, 0.086) 0 0.6px 0.6px -1.25px,
      rgba($color-black, 0.076) 0 2.25px 2.25px -2.5px,
      rgba($color-black, 0.03) 0 10px 10px -3.75px;
  }

  #{$c}__left,
  #{$c}__middle,
  #{$c}__right {
    display: flex;
  }

  #{$c}__middle,
  #{$c}__right {
    align-items: center;
  }

  #{$c}__left,
  #{$c}__right {
    flex: 0 0 auto;
  }

  #{$c}__middle {
    justify-content: center;
    flex: 1;
  }

  #{$c}__homepage {
    margin-left: 22px;

    &:hover {
      @include mask-image-raw(
        linear-gradient(rgba($color-white, 0.85), rgba($color-white, 0.85))
      );
    }

    &:active {
      @include mask-image-raw(
        linear-gradient(rgba($color-white, 0.8), rgba($color-white, 0.75))
      );
    }
  }

  #{$c}__logo {
    margin-top: 3px;
  }

  #{$c}__menu {
    font-size: 14px;
    margin-top: -1px;
    user-select: none;
    display: flex;
  }

  &,
  a {
    color: $color-base-blue-dark;
    text-decoration: none;
  }

  #{$c}__menu-item {
    margin-right: 2px;

    &:last-child {
      margin-right: 0;
    }

    #{$c}__menu-arrow {
      fill: $color-base-blue-dark;
      margin-left: 6px;
      margin-bottom: -2px;
      opacity: 0.35;
      transition: opacity 100ms linear;
    }

    #{$c}__menu-link {
      padding: 8px 12px 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 30px;

      &:hover {
        background-color: rgba($color-base-grey-light, 0.75);

        #{$c}__menu-arrow {
          opacity: 0.45;
        }

        #{$c}__menu-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }

      &:active {
        background-color: $color-base-grey-light;

        #{$c}__menu-arrow {
          opacity: 0.55;
        }
      }

      #{$c}__menu-dropdown {
        min-width: 300px;
        position: absolute;
        left: -8px;
        top: 100%;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-3px);
        transition: all 150ms linear;
        transition-property: opacity, transform;
      }
    }

    &--active {
      #{$c}__menu-link {
        &,
        &:hover,
        &:active {
          background-color: darken($color-base-grey-light, 1.5%);
        }
      }
    }
  }

  // --> MOBILE <--

  #{$c}__mobile {
    display: none;
    max-width: 100vw;
    border-top: 1px solid $color-border-secondary;
    margin-top: 14px;
    padding: 20px 0 38px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(6px) saturate(160%) contrast(45%) brightness(140%);
    z-index: 2000;
    overflow-y: scroll;
    box-shadow: 0px 20px 20px rgba($color-base-blue-dark, 0.1);

    #{$c}__mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 32px;
    }

    #{$c}__mobile-submenu {
      #{$c}__menu-item {
        padding: 8px 0;
      }
    }

    #{$c}__menu-item {
      width: 100%;
      margin-right: 0px;
      display: flex;
      align-items: center;

      #{$c}__menu-link {
        background-color: transparent;
        padding: 16px 0;
        font-size: 18px;
        width: 100%;
        margin: 0;
        border-radius: 0;
      }
    }

    #{$c}__menu-dropdown {
      &.is-open {
        #{$c}__menu-arrow {
          transform: rotate(180deg);
        }
      }
    }

    #{$c}__action {
      display: inline-block;
    }
  }

  #{$c}__disclosure-panel-icon {
    min-width: ($icon-width + 8px);
    margin-bottom: -1px;
    padding-right: 4px;
    flex: 0 0 auto;

    svg {
      fill: $color-base-blue-dark;
      width: $icon-width;
      opacity: 0.25;
      transition: opacity $hover-transition-duration linear;
    }
  }

  #{$c}__disclosure-panel-title {
    line-height: 18px;
  }

  #{$c}__mobile-toggle {
    color: $color-base-blue-dark;
    margin-right: 16px;
    display: none;
  }

  // --> BOOLEANS <--

  &--announcement {
    #{$c}__sticky,
    #{$c}__ghost {
      height: ($page-header-height + $page-header-announcement-height);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: #{($inner-width-maximum + (2 * $page-wrapper-small-padding-sides))}) {
  #{$c} {
    #{$c}__homepage {
      margin-left: 0;
    }

    #{$c}__mobile {
      display: block;
    }

    #{$c}__left {
      flex: 1;
      justify-content: center;
    }

    #{$c}__middle {
      display: none;
    }

    #{$c}__right {
      #{$c}__action {
        display: none;
      }

      #{$c}__mobile-toggle {
        display: block;
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__announcement {
      #{$c}__announcement-description,
      #{$c}__announcement-separator {
        display: none;
      }
    }
  }
}
</style>
