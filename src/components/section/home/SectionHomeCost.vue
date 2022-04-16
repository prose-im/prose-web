<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-cost
    page-details
      template(
        slot="title"
      )
        | Host a Prose server yourself for free,

        br

        | or let us handle this for you.

      template(
        slot="description"
      )
        p
          | Install a Prose server on your company’s premises for free.

        p
          | If you are not technical, we can provide you with a one-click Prose server, hosted on our platform.

        p.u-medium
          | Easily migrate your data later between one and the other.

      template(
        slot="actions"
      )
        a.c-section-home-cost__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            class="c-section-home-cost__action-button"
          )
            | Read our docs on how to setup a Server

      template(
        slot="illustration"
      )
        //- TODO
        | TODO Image
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionHomeCost",

  data() {
    return {
      // --> DATA <--

      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-cost";

.c-section-home-cost {
  padding-top: 75px;
  padding-bottom: 100px;
}
</style>
