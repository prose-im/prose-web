<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-contact-index
  section-contact-main(
    class="p-contact-index__main"
  )

  section-contact-form(
    class="p-contact-index__form"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ContactIndexPage",
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
$c: ".p-contact-index";

.p-contact-index {
  #{$c}__form {
    margin-top: 44px;
  }
}
</style>
