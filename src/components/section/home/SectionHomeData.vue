<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-home-data
    page-details(
      align="right"
    )
      template(
        slot="title"
      )
        | Your chat data. On your own domain.

        br

        | All encrypted. You own it.

      template(
        slot="description"
      )
        p
          | Nowadays, all modern messaging services store all their user messages in a huge database, in the clear.

        p
          | Not only is the data centralized in a single geographic location, but those services are also more prone to wide-scale outages, should something go wrong with the servers.

        p.u-medium
          | With Prose, you host the server, on your terms.

      template(
        slot="actions"
      )
        a.c-section-home-data__action(
          :href="actionTarget"
        )
          base-button(
            right-icon="arrow-right"
            class="c-section-home-data__action-button"
          )
            | Read how Prose secures your Data

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
  name: "SectionHomeData",

  data() {
    return {
      // --> DATA <--

      // TODO: bind proper page
      actionTarget: `${this.$config.url.prose_docs}/guides/`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-data";

.c-section-home-data {
  padding-top: 75px;
  padding-bottom: 45px;
}
</style>
