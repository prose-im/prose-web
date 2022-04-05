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
        "c-page-header--floating": !embedded
      }
    ]`
  )
    .c-page-header__sticky
      page-wrapper
        .c-page-header__inner
          .c-page-header__left
            nuxt-link(
              to="/"
            )
              base-logo(
                class="c-page-header__logo",
                tint="normal"
                size="large"
              )

          .c-page-header__right
            ul.c-page-header__menu
              li.c-page-header__menu-item(
                v-for="item in menuItems"
                :key="item.id"
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
                  span.c-page-header__menu-icon(
                    v-html="item.icon"
                  )

                  | {{ item.label }}

                  image-menu-dropdown-arrow(
                    class="c-page-header__menu-arrow"
                  )

            base-button(
              class="c-page-header__action"
              right-icon="arrow"
            )
              | Start with Prose

    .c-page-header__ghost(
      v-if="!embedded"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageMenuDropdownArrow from "~/assets/images/components/page/PageHeader/menu-dropdown-arrow.svg?inline";
import ImageMenuItemDownload from "~/assets/images/components/page/PageHeader/menu-item-download.svg?raw";
import ImageMenuItemHelp from "~/assets/images/components/page/PageHeader/menu-item-help.svg?raw";

export default {
  name: "PageHeader",

  components: { ImageMenuDropdownArrow },

  props: {
    embedded: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    menuItems() {
      return [
        {
          id: "downloads",
          icon: ImageMenuItemDownload,
          label: "Downloads",
          target: "/downloads/"
        },

        {
          id: "help",
          icon: ImageMenuItemHelp,
          label: "Get Help",
          dropdown: []
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
$c: ".c-page-header";

.c-page-header {
  #{$c}__sticky,
  #{$c}__ghost {
    border-bottom: 1px solid transparent;
    height: 72px;
  }

  #{$c}__sticky {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  #{$c}__inner {
    display: flex;
    align-items: center;
  }

  #{$c}__left {
    flex: 1;
  }

  #{$c}__right {
    padding-left: 8px;
    flex: 0 1 auto;
    display: flex;
    align-items: center;
  }

  #{$c}__logo {
    height: 32px;
  }

  #{$c}__menu {
    font-size: 13.5px;
    display: flex;

    &,
    a {
      color: $color-base-blue-dark;
      text-decoration: none;
    }

    #{$c}__menu-item {
      margin-right: 24px;

      &:last-child {
        margin-right: 0;
      }

      #{$c}__menu-icon #{$c}__menu-arrow {
        transition: opacity 100ms linear;
      }

      #{$c}__menu-icon {
        line-height: 0;
        margin-right: 5px;
        opacity: 0.8;

        svg {
          fill: #2c245e;
          height: 16px;
        }
      }

      #{$c}__menu-arrow {
        fill: $color-base-blue-dark;
        margin-left: 6px;
        margin-bottom: -1px;
        opacity: 0.35;
      }

      #{$c}__menu-link {
        cursor: pointer;
        display: flex;
        align-items: center;

        &:hover {
          #{$c}__menu-icon {
            opacity: 0.9;
          }

          #{$c}__menu-arrow {
            opacity: 0.45;
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
      }
    }
  }

  #{$c}__action {
    margin-left: 50px;
  }

  // --> BOOLEANS <--

  &--floating {
    #{$c}__sticky {
      background-color: rgba($color-background-primary, 0.9);
      border-bottom-color: $color-border-secondary;
      backdrop-filter: blur(8px) saturate(160%) contrast(45%) brightness(140%);
    }
  }
}
</style>
