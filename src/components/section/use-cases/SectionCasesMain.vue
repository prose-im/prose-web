<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div
  page-main-title(
    class="c-section-cases-main"
    align="left"
  )

    template(
      slot="overline"
    ) 
      | Prose for Developers

    template(
      slot="title"
    )
      | Connect and collab on
      br
      | open source software

    template(
      slot="action"
    )
      a(
        href="#"
        class=""
        slot="default"
      )
        base-button(
          right-icon="arrow-right"
          tint="fancy"
          size="large"
          class="c-app-download__action-button"
        )
          | Get early access
  
  page-wrapper(
    class="c-page-main-title__wrapper"
  )
    .c-section-cases-main__illustration
      .c-section-cases-main__illustration-center
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
import BaseButton from "../../base/BaseButton.vue";

export default {
  name: "SectionCasesMain",

  components: {
    BaseButton
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-cases-main";

#{$c}__illustration {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 32px;
  margin-top: -32px;
}

#{$c}__illustration-center {
  background-image: url("~/assets/images/components/section/use-cases/SectionCasesMain/developers-main.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>
