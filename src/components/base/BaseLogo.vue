<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  image-logo-large-normal(
    class="c-base-logo"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageLogoLargeNormal from "~/assets/images/components/base/BaseLogo/logo-large-normal.svg?inline";

export default {
  name: "BaseLogo",

  components: { ImageLogoLargeNormal }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-logo";

.c-base-logo {
  height: 48px;
  width: auto;
}
</style>
