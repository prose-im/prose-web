<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .p-contact
    section-contact-main(
      class="p-contact__main"
    )

    section-contact-form(
      class="p-contact__form"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ContactPage",
  layout: "simple",

  head: {
    title: "Contact the Prose team"
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-contact";

.p-contact {
  #{$c}__form {
    margin-top: 44px;
  }
}
</style>
