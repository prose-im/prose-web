<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-base-security-level",
    "c-base-security-level--" + security
  ]`
)
  span.c-base-security-level__steps
    span(
      v-for="step in steps"
      :key="'step_' + step"
      :class=`[
        "c-base-security-level__step",
        {
          "c-base-security-level__step--active": (level >= step)
        }
      ]`
    )

  span.c-base-security-level__label.u-medium
    slot(
      v-if="security === 'bad'"
      name="bad"
    )

    slot(
      v-else-if="security === 'okay'"
      name="okay"
    )

    slot(
      v-else-if="security === 'good'"
      name="good"
    )

    slot(
      v-else
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const LEVEL_STEPS = 4;

const LEVEL_SECURITIES = {
  1: "bad",
  2: "okay",
  3: "good",
  4: "good"
};

export default {
  name: "BaseSecurityLevel",

  props: {
    level: {
      type: Number,
      default: 0,

      validator(x) {
        return x >= 0 && x <= LEVEL_STEPS;
      }
    }
  },

  computed: {
    security() {
      return LEVEL_SECURITIES[this.level] || "none";
    }
  },

  data() {
    return {
      // --> DATA <--

      steps: LEVEL_STEPS
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-security-level";

// VARIABLES
$step-size: 8px;

$securities: (
  good: (
    tint: $color-base-green-mid,
    gradient: linear-gradient(180deg, #00d5b5 0%, #00ab7e 100%)
  ),

  okay: (
    tint: $color-base-yellow-dark,
    gradient: linear-gradient(180deg, #ecd6a4 0%, #d5ad6b 100%)
  ),

  bad: (
    tint: $color-base-red-mid,
    gradient: linear-gradient(180deg, #f05c5c 0%, #dd2f2f 100%)
  )
);

#{$c} {
  align-items: center;
  column-gap: 9px;
  display: inline-flex;

  #{$c}__steps {
    flex: 0 0 auto;
    display: inline-flex;
    column-gap: 3px;

    #{$c}__step {
      flex: 0 0 auto;
    }
  }

  #{$c}__step {
    background-color: transparent;
    border: 1px solid rgba($color-base-grey-dark, 0.35);
    width: $step-size;
    height: $step-size;
    box-sizing: border-box;
    border-radius: $step-size;

    &--active {
      background-color: $color-base-grey-dark;
      background-image: linear-gradient(180deg, #b7becb 0%, #81899b 100%);
      border: 0 none;
    }
  }

  #{$c}__label {
    color: $color-base-grey-dark;
    font-size: 14.5px;
    flex: 1;
  }

  // --> SECURITIES <--

  @each $security, $color in $securities {
    &--#{$security} {
      #{$c}__step {
        &--active {
          background-color: map-get($color, "tint");
          background-image: map-get($color, "gradient");
        }
      }

      #{$c}__label {
        color: map-get($color, "tint");
      }
    }
  }
}
</style>
