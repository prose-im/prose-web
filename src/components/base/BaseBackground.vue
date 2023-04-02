<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-background
    div(
        :class=`[
            "c-base-sine",
            "c-base-sine--" + type
        ]`
        v-html="svgHtml"
    )
    slot

</template>

<!-- **********************************************************************
             SCRIPT
             ********************************************************************** -->

<script>
import ImageBg1 from "~/assets/images/components/base/BaseBackground/bg-1.svg?raw";
import ImageBg2 from "~/assets/images/components/base/BaseBackground/bg-2.svg?raw";
import ImageBg3 from "~/assets/images/components/base/BaseBackground/bg-3.svg?raw";
import ImageBg4 from "~/assets/images/components/base/BaseBackground/bg-4.svg?raw";

export default {
  name: "BaseBackground",

  props: {
    type: {
      type: String,
      default: "blue",

      validator(x) {
        return ["pink", "blue", "purple", "navy"].includes(x);
      }
    }
  },

  computed: {
    svgHtml() {
      switch (this.type) {
        case "blue": {
          return ImageBg1;
        }

        case "purple": {
          return ImageBg2;
        }

        case "pink": {
          return ImageBg3;
        }

        case "navy": {
          return ImageBg4;
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
             STYLE
             ********************************************************************** -->

<style lang="scss">
$c: ".c-base-background";

.c-base-background {
  position: relative;

  // --> TYPES <--

  .c-base-sine {
    position: relative;
    width: 100%;
    aspect-ratio: 2.5 / 1;
    overflow: hidden;
    border-radius: 32px;

    &--pink {
      background-color: $color-base-pink-light;
    }

    &--blue {
      background-color: $color-base-blue-mid;
    }

    &--purple {
      background-color: $color-base-purple-mid;
    }

    &--navy {
      background-color: $color-base-blue-dark;
    }
  }

  .c-base-sine svg {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;

    path {
      stroke-dasharray: 2400;
      stroke-dashoffset: 2400;
      pointer-events: none;
      animation: animateDash 1.5s ease-out forwards;
    }
  }

  @media (max-width: $screen-small-width-breakpoint) {
    .c-base-sine {
      border-radius: 16px;
      aspect-ratio: 1.1 / 1;
    }

    .c-base-sine svg {
      position: absolute;
      z-index: 0;
      bottom: 0;
      top: auto;
      right: 0;
    }
  }
}

@keyframes animateDash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
