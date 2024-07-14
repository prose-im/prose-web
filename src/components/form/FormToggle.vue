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
    "c-form-toggle",
    {
      "c-form-toggle--disabled": disabled,
      "c-form-toggle--loading": loading
    }
  ]`
)
  input(
    @change="onInputChange"
    :name="name"
    :checked="checked"
    class="c-form-toggle__input"
    type="checkbox"
    ref="input"
  )

  a.c-form-toggle__field(
    @click="onFieldClick"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "FormToggle",

  props: {
    modelValue: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      default: null
    },

    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  emits: ["update:modelValue", "change"],

  data() {
    return {
      // --> STATE <--

      checked: false
    };
  },

  watch: {
    modelValue: {
      immediate: true,

      handler(value) {
        this.checked = value;
      }
    }
  },

  methods: {
    updateValue(enabled) {
      this.$emit("update:modelValue", enabled);
      this.$emit("change", enabled);
    },

    // --> EVENT LISTENERS <--

    onInputChange(event) {
      // Update model value?
      if (event.target) {
        this.updateValue(event.target.checked);
      }
    },

    onFieldClick() {
      // Toggle hidden input value
      this.$refs.input.click();
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-toggle";

// VARIABLES
$toggle-width: 36px;
$toggle-height: 22px;

$toggle-handle-offset: 3px;
$toggle-handle-size: ($toggle-height - (2 * $toggle-handle-offset));

$toggle-field-width: ($toggle-width - (2 * $toggle-handle-offset));
$toggle-field-height: ($toggle-height - (2 * $toggle-handle-offset));

#{$c} {
  user-select: none;
  display: inline-block;

  #{$c}__input {
    display: none;

    &:checked + #{$c}__field {
      background-color: $color-base-blue-link;

      &::after {
        margin-inline-start: ($toggle-field-width - $toggle-handle-size);
      }

      &:hover {
        background-color: darken($color-base-blue-link, 8%);
      }

      &:active {
        background-color: darken($color-base-blue-link, 14%);
      }
    }
  }

  #{$c}__field {
    background-color: rgba($color-base-grey-dark, 0.2);
    width: $toggle-field-width;
    height: $toggle-field-height;
    padding: $toggle-handle-offset;
    display: block;
    position: relative;
    border-radius: $toggle-height;
    transition: background-color 100ms linear;

    &::after {
      content: "";
      background-color: $color-white;
      width: $toggle-handle-size;
      height: $toggle-handle-size;
      border-radius: $toggle-height;
      display: block;
      box-shadow: 0 1px 2px 0 rgba($color-black, 0.08);
      transition: all 150ms linear;
      transition-property: margin-inline-start, box-shadow;
    }

    &:hover {
      background-color: rgba($color-base-grey-dark, 0.27);

      &::after {
        box-shadow: 0 1px 2px 0 rgba($color-black, 0.12);
      }
    }

    &:active {
      background-color: rgba($color-base-grey-dark, 0.34);

      &::after {
        box-shadow: 0 1px 2px 0 rgba($color-black, 0.1);
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    cursor: not-allowed;

    &#{$c}--loading {
      cursor: wait;
    }

    #{$c}__field {
      pointer-events: none;
    }
  }
}
</style>
