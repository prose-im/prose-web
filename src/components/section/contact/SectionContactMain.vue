<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-contact-main
  page-wrapper
    base-title(
      level="mini"
      align="center"
      class="c-section-contact-main__title"
    )
      | Contact Us

    .c-section-contact-main__direction
      base-direction(
        :raster-scale="0.5"
        label="Reach out to our team with any question you have."
        description="This sends an email to our team. If we are online, you may chat with us."
        raster="buoy"
        class="c-section-contact-main"
        description-bolder
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionContactMain"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-contact-main";

#{$c} {
  #{$c}__direction {
    margin-top: 22px;
    display: flex;
    justify-content: center;
  }
}
</style>
