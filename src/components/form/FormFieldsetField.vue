<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-form-fieldset-field",
    "c-form-fieldset-field--" + align,
    {
      "c-form-fieldset-field--with-for": forName
    }
  ]`
)
  div(
    v-if="$slots['input-before']"
    class="c-form-fieldset-field__input c-form-fieldset-field__input--before"
  )
    slot(
      name="input-before"
    )

  label.c-form-fieldset-field__label(
    :for="forName"
  )
    | {{ label }}

  div(
    v-if="$slots['input-after']"
    class="c-form-fieldset-field__input c-form-fieldset-field__input--after"
  )
    slot(
      name="input-after"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "FormFieldsetField",

  props: {
    label: {
      type: String,
      required: true
    },

    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "right"].includes(x);
      }
    },

    forName: {
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
$c: ".c-form-fieldset-field";

#{$c} {
  display: flex;
  align-items: center;
  column-gap: 8px;

  #{$c}__label {
    color: $color-base-black-mid;
    font-size: 14.5px;
    letter-spacing: 0.1px;
    line-height: 20px;
    width: 100%;
    flex: 0 1 auto;
  }

  #{$c}__input {
    line-height: 0;

    &--before {
      flex: 0 0 auto;
    }

    &--after {
      flex: 1;
    }
  }

  // --> ALIGNS <--

  &--left {
    justify-content: flex-start;
  }

  &--right {
    justify-content: flex-end;
  }

  // --> BOOLEANS <--

  &--with-for {
    #{$c}__label {
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
