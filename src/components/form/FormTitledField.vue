<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-form-titled-field
  base-title(
    level="lilliput"
    tint="black"
    class="c-form-titled-field__title"
  )
    | {{ title }}

  .c-form-titled-field__field
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "FormTitledField",

  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-titled-field";

#{$c} {
  #{$c}__title,
  #{$c}__field > * {
    margin-bottom: 18px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
