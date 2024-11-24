<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-form-labelled-field
  form-label(
    :for-name="name"
    class="c-form-labelled-field__label"
  )
    | {{ label }}

  .c-form-labelled-field__field
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "FormLabelledField",

  props: {
    label: {
      type: String,
      required: true
    },

    name: {
      type: String,
      default: null
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-labelled-field";

#{$c} {
  #{$c}__label {
    margin-bottom: 10px;
    display: block;
  }
}
</style>
