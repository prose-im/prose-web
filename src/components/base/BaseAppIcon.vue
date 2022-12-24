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
  :style="style"
  :class=`[
    "c-base-app-icon",
    "c-base-app-icon--background-" + backgroundColor
  ]`
)
  .c-base-app-icon__inner(
    v-if="$slots.default"
  )
    slot

  image-logo(
    class="c-base-app-icon__logo"
  )

  .c-base-app-icon__background(
    :style="backgroundStyle"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageLogo from "~/assets/images/components/base/BaseAppIcon/logo.svg?inline";

export default {
  name: "BaseAppIcon",

  components: { ImageLogo },

  props: {
    size: {
      type: String,
      default: "120px"
    },

    radius: {
      type: String,
      default: "24px"
    },

    backgroundColor: {
      type: String,
      default: "primary",

      validator(x) {
        return ["primary", "secondary"].includes(x);
      }
    },

    backgroundBlend: {
      type: Number,
      default: 1.0,

      validator(x) {
        return x >= 0.0 && x <= 1.0;
      }
    }
  },

  computed: {
    style() {
      return {
        borderRadius: this.radius,
        width: this.size,
        height: this.size
      };
    },

    backgroundStyle() {
      return {
        borderRadius: this.radius,
        opacity: this.backgroundBlend
      };
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-app-icon";

.c-base-app-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #{$c}__inner,
  #{$c}__background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  #{$c}__inner {
    z-index: 2;
  }

  #{$c}__logo {
    width: 72%;
    height: auto;
    margin-right: -2%;
    margin-bottom: -5%;
    position: relative;
    z-index: 1;
  }

  #{$c}__background {
    background-image: url("~/assets/images/components/base/BaseAppIcon/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }

  // --> BACKGROUND COLORS <--

  &--background-primary {
    background-color: $color-background-primary;
  }

  &--background-secondary {
    background-color: $color-background-secondary;
  }
}
</style>
