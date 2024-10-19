<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-payment-preview
  base-payment-icon(
    :provider="provider"
    :animated="animated"
    height="21px"
    class="c-base-payment-preview__input-preview-brand"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BasePaymentPreview",

  props: {
    provider: {
      type: String,
      default: null
    },

    animated: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-payment-preview";

#{$c} {
  background: $color-white;
  border: 1px solid $color-border-secondary;
  width: 40px;
  height: 30px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;

  #{$c}__input-preview-brand {
    flex: 0 0 auto;
  }
}
</style>
