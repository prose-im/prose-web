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
      "c-page-header--floating": (floating || forceFloating),
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
            )
              base-logo(
                class="c-page-header__logo"
                size="large"
              )

          .c-page-header__middle
            ul.c-page-header__menu
              li(
                v-for="item in menuItems"
                :key="item.id"
                :class=`[
                  "c-page-header__menu-item",
                  {
                    "c-page-header__menu-item--active": (currentPageName === item.id)
                  }
                ]`
              )
                nuxt-link(
                  v-if="item.target"
                  class="c-page-header__menu-link"
                  :to="item.target"
                )
                  span.c-page-header__menu-icon(
                    v-html="item.icon"
                  )

                  | {{ item.label }}

                span.c-page-header__menu-link(
                  v-else-if="item.dropdown"
                )
                  base-dropdown(
                    :items="item.dropdown"
                    arrow-class="c-page-header__menu-dropdown-arrow"
                    class="c-page-header__menu-dropdown"
                  )

                  span.c-page-header__menu-icon(
                    v-html="item.icon"
                  )

                  | {{ item.label }}

                  image-menu-dropdown-link-arrow(
                    class="c-page-header__menu-arrow"
                  )

          .c-page-header__right
            .c-page-header__action
              base-button(
                @click.prevent="onActionButtonClick"
                class="c-page-header__action-button js-page-header-action"
                right-icon="arrow-right"
                tint="fancy"
              )
                | Join the Waitlist

            .c-page-header__mobile-toggle
              base-menu-toggle(
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
                "c-page-header__menu-item--active": (currentPageName === item.id)
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

        base-button(
          @click.prevent="onActionButtonClick"
          class="c-page-header__action-button js-page-header-action"
          right-icon="arrow-right"
          tint="fancy"
        )
          | Join the Waitlist

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

// CONSTANTS
const SCROLLED_THRESHOLD_VERTICAL = 30;

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

      forceFloating: false,
      isMobileMenuOpen: false,

      // --> DATA <--

      announcement: {
        title: "Heads up: Prose is still a Work in Progress",

        description:
          "We expect the macOS, Windows and Web apps to be released mid-2023."
      },

      menuItems: [
        {
          id: "downloads",
          label: "Downloads",
          target: "/downloads/"
        },

        {
          id: "usecase",
          label: "Use Cases",

          dropdown: [
            {
              id: "developers",
              title: "Developers",
              label: "Collaborate on open source projects",
              target: "/use-cases/developers/",
              icon: ImageMenuDropdownUseCaseDevelopers
            },

            {
              id: "web3",
              title: "Web3",
              label: "Build & scale Web3 communities",
              target: "/use-cases/web3/",
              icon: ImageMenuDropdownUseCaseWeb3
            },

            {
              id: "ngo",
              title: "Non-Profits",
              label: "Ignite collaboration for social impact",
              target: "/use-cases/non-profits/",
              icon: ImageMenuDropdownUseCaseNonProfits
            },

            {
              id: "remote",
              title: "Remote Teams",
              label: "Enhance remote team collaboration",
              target: "/use-cases/remote-teams/",
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
              label: "Resources for Prose server administrators",
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
    floating() {
      return !this.embedded;
    },

    hasAnnouncement() {
      return this.$config.modifiers.announcement === true;
    },

    currentPageName() {
      // Pick up the parent-most page (segments are separated w/ '-')
      return (this.$route.name || "").split("-")[0] || null;
    }
  },

  beforeMount() {
    // Only bind scroll listener if not floating (and thus should check when \
    //   to force floating mode based on scroll)
    if (!this.floating) {
      // Bind scroll listener
      window.addEventListener("scroll", this.onWindowScroll);
    }
  },

  mounted() {
    // Only process first scroll event if not floating (and thus should check \
    //   when to force floating mode based on scroll)
    if (!this.floating) {
      // Process first scroll event (eg. the page is reloaded on a scrolled \
      //   page, therefore we need to emulate a scroll event to compute first \
      //   state)
      this.onWindowScroll();
    }
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onWindowScroll);
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when window scrolls
     * @public
     * @return {undefined}
     */
    onWindowScroll() {
      const _forceFloating = window.scrollY >= SCROLLED_THRESHOLD_VERTICAL;

      // Update reactive marker? (only if changed)
      if (_forceFloating !== this.forceFloating) {
        this.forceFloating = _forceFloating;
      }
    },

    /**
     * Triggers when action button is clicked
     * @public
     * @return {undefined}
     */
    onActionButtonClick() {
      const _pageEnticeBoxElement = document.querySelector(
        ".js-page-entice-box"
      );

      if (_pageEnticeBoxElement) {
        // Scroll to entice box element
        _pageEnticeBoxElement.scrollIntoView({ behavior: "smooth" });

        // Focus email field
        const _subscribeEmailFieldElement = document.querySelector(
          `input[name="subscribe_email"]`
        );

        if (_subscribeEmailFieldElement) {
          _subscribeEmailFieldElement.focus();
        }
      }

      // Force-close mobile menu (if open)
      this.isMobileMenuOpen = false;
    },

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
$menu-icon-size: 16px;
$icon-width: 18px;

$menu-dropdown-offset-left: 60px;
$hover-transition-duration: 150ms;

.c-page-header {
  #{$c}__sticky,
  #{$c}__ghost {
    border-bottom: 1px solid transparent;
    height: $page-header-height;
  }

  #{$c}__sticky,
  #{$c}__bar {
    transition: all 250ms linear;
    transition-property: background-color, border-color;
  }

  #{$c}__announcement,
  #{$c}__bar {
    display: flex;
    align-items: center;
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
  }

  #{$c}__inner {
    display: flex;
    align-items: center;
  }

  #{$c}__middle,
  #{$c}__right {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
  }

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__middle {
    padding-left: 8px;
  }

  #{$c}__right {
    padding-left: 50px;
  }

  #{$c}__logo {
    margin-top: 4px;
  }

  #{$c}__menu {
    font-size: 14px;
    user-select: none;
    display: flex;
  }

  &,
  a {
    color: $color-base-blue-dark;
    text-decoration: none;
  }

  #{$c}__menu-item {
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }

    #{$c}__menu-icon {
      line-height: 0;
      margin-right: 5px;
      opacity: 0.8;

      svg {
        fill: $color-base-blue-dark;
        width: $menu-icon-size;
      }
    }

    #{$c}__menu-arrow {
      fill: $color-base-blue-dark;
      margin-left: 6px;
      margin-bottom: -1px;
      opacity: 0.35;
      transition: opacity 100ms linear;
    }

    #{$c}__menu-link {
      padding: 5px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;

      &:hover {
        #{$c}__menu-icon {
          opacity: 0.9;
        }

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
        #{$c}__menu-icon {
          opacity: 1;
        }

        #{$c}__menu-arrow {
          opacity: 0.55;
        }
      }

      #{$c}__menu-dropdown {
        min-width: 360px;
        position: absolute;
        left: (-1 * $menu-dropdown-offset-left);
        top: 100%;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-3px);
        transition: all 150ms linear;
        transition-property: opacity, transform;

        #{$c}__menu-dropdown-arrow {
          left: ($menu-dropdown-offset-left + calc($menu-icon-size / 2));
        }
      }
    }

    &--active {
      #{$c}__menu-link {
        text-decoration: underline;
        text-decoration-color: rgba($color-base-blue-dark, 0.2);
        text-decoration-thickness: 2px;
      }
    }
  }

  // --> MOBILE <--

  #{$c}__mobile {
    display: none;
    max-width: 100vw;
    border-top: 1px solid $color-border-secondary;
    padding: 16px 0 40px;
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
        padding: 16px 0;
        font-size: 18px;
        width: 100%;
        margin: 0;
      }
    }

    .disclosure.is-open #{$c}__menu-arrow {
      transform: rotate(180deg);
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
    display: none;
    color: $color-base-blue-dark;
  }

  // --> BOOLEANS <--

  &--floating {
    #{$c}__sticky {
      border-bottom-color: $color-border-secondary;
    }

    #{$c}__bar {
      background-color: rgba($color-background-primary, 0.9);
      backdrop-filter: blur(6px) saturate(160%) contrast(45%) brightness(140%);
    }
  }

  &--announcement {
    #{$c}__sticky,
    #{$c}__ghost {
      height: ($page-header-height + $page-header-announcement-height);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-page-header {
    #{$c}__menu {
      #{$c}__menu-item {
        display: none;
      }
    }

    #{$c}__mobile {
      display: block;
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

@media (max-width: $screen-small-width-breakpoint) {
  .c-page-header {
    #{$c}__menu {
      #{$c}__menu-item {
        #{$c}__menu-link {
          #{$c}__menu-dropdown {
            min-width: 328px;
          }
        }
      }
    }

    #{$c}__left {
      flex: 0 0 auto;
    }

    #{$c}__middle {
      padding: 0 10px;
      flex: 1;
      justify-content: center;
    }

    #{$c}__right {
      padding-left: 0;
      flex: 0 0 auto;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-header {
    #{$c}__announcement {
      #{$c}__announcement-description,
      #{$c}__announcement-separator {
        display: none;
      }
    }

    #{$c}__menu {
      #{$c}__menu-item {
        #{$c}__menu-link {
          #{$c}__menu-dropdown {
            min-width: 214px;
          }
        }
      }
    }

    #{$c}__logo {
      height: 24px;
    }

    #{$c}__middle {
      padding-right: 0;
      justify-content: flex-end;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-header {
    #{$c}__logo {
      height: 22px;
    }

    #{$c}__menu {
      #{$c}__menu-item {
        &:nth-child(2) {
          margin-right: 0;
        }

        &:nth-child(n + 2) {
          display: none;
        }

        &:nth-child(n + 3) {
          display: none;
        }
      }
    }

    #{$c}__middle {
      justify-content: flex-end;
    }
  }
}
</style>
