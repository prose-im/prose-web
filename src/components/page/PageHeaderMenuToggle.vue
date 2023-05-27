<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
svg(
  @click="$emit('click')"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 32 32"
  class="c-page-header-menu-toggle"
)
  g(
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    fill="currentColor"
    stroke="currentColor"
  )
    g(
      :class=`[
        "c-page-header-menu-toggle__icon",
        {
          "c-page-header-menu-toggle__icon--open": isOpen
        }
      ]`
    )
      line(
        fill="none"
        stroke="currentColor"
        x1="2"
        x2="30"
        y1="9"
        y2="9"
      )

      line(
        fill="none"
        x1="30"
        x2="2"
        y1="23"
        y2="23"
      )

      line(
        fill="none"
        stroke="currentColor"
        x1="30"
        x2="2"
        y1="16"
        y2="16"
      )

      line(
        fill="none"
        x1="30"
        x2="2"
        y1="16"
        y2="16"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  title: "PageHeaderMenuToggle",

  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
$c: ".c-page-header-menu-toggle";

.c-page-header-menu-toggle {
  cursor: pointer;

  #{$c}__icon {
    --transition-duration: 0.25s;

    :nth-child(1),
    :nth-child(2) {
      transition: opacity 0s calc(var(--transition-duration) / 2),
        transform calc(var(--transition-duration) / 2)
          calc(var(--transition-duration) / 2) cubic-bezier(0.86, 0, 0.07, 1);
    }

    :nth-child(1) {
      transform-origin: 16px 9px;
    }

    :nth-child(2) {
      transform-origin: 16px 23px;
    }

    :nth-child(3),
    :nth-child(4) {
      opacity: 0;
      transform-origin: 50% 50%;
      transition: transform calc(var(--transition-duration) / 2)
          cubic-bezier(0.86, 0, 0.07, 1),
        opacity 0s calc(var(--transition-duration) / 2);
    }

    &--open {
      :nth-child(1),
      :nth-child(2) {
        transition: transform calc(var(--transition-duration) / 2)
            cubic-bezier(0.86, 0, 0.07, 1),
          opacity 0s calc(var(--transition-duration) / 2);
        opacity: 0;
      }

      :nth-child(1) {
        transform: translateY(7px);
      }

      :nth-child(2) {
        transform: translateY(-7px);
      }

      :nth-child(3),
      :nth-child(4) {
        opacity: 1;
        transition: opacity 0s calc(var(--transition-duration) / 2),
          transform calc(var(--transition-duration) / 2)
            calc(var(--transition-duration) / 2) cubic-bezier(0.86, 0, 0.07, 1);
      }

      :nth-child(3) {
        transform: rotate(45deg);
      }

      :nth-child(4) {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
