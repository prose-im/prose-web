<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-partial-pricing-compare-foot
  p.c-partial-pricing-compare-foot__title
    template(
      v-if="isSelfHosted"
    )
      span.c-partial-pricing-compare-foot__title-single
        | Self-hosted

    template(
      v-else
    )
      span.c-partial-pricing-compare-foot__title-price.u-semibold
        | 5€

      base-space

      span.c-partial-pricing-compare-foot__title-label
        | /user/month

  .c-partial-pricing-compare-foot__action
    a
      template(
        v-if="isSelfHosted"
      )
        base-button(
          tint="dark"
          size="small"
          reverse
        )
          | Self-Host Prose

      template(
        v-else
      )
        base-button(
          right-icon="arrow-right"
          tint="dark"
          size="small"
        )
          | Try for free
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PartialPricingCompareFoot",

  props: {
    mode: {
      type: String,
      required: true,

      validator(x) {
        return ["community", "business"].includes(x);
      }
    }
  },

  computed: {
    isSelfHosted() {
      return this.mode === "community";
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-partial-pricing-compare-foot";

#{$c} {
  #{$c}__title {
    color: $color-base-grey-dark;
    margin-top: -8px;
    text-align: center;

    #{$c}__title-single,
    #{$c}__title-price {
      line-height: 34px;
    }

    #{$c}__title-single {
      font-size: 19px;
      letter-spacing: 0.2px;
    }

    #{$c}__title-price {
      color: $color-base-blue-dark;
      font-size: 32px;
      letter-spacing: 0.33px;
    }

    #{$c}__title-label {
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.17px;
    }
  }

  #{$c}__action {
    margin-top: 18px;
  }
}
</style>
