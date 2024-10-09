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
    "c-form-field",
    "c-form-field--" + type,
    "c-form-field--" + size,
    "c-form-field--" + align,
    {
      "c-form-field--focused": isFocused,
      "c-form-field--disabled": disabled,
      "c-form-field--loading": loading
    }
  ]`
)
  slot

  input(
    @keypress.stop
    @keydown.stop="onFieldKeyDown"
    @keyup.stop="onFieldKeyUp"
    @input="onFieldInput"
    @focus="onFieldFocus"
    @blur="onFieldBlur"
    :type="type"
    :name="name"
    :id="name"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :autocomplete="autocomplete"
    :class=`[
      "c-form-field__inner",
      {
        [innerClass]: innerClass
      }
    ]`
    ref="field"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import { codes as keyCodes } from "keycode";

export default {
  name: "FormField",

  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },

    type: {
      type: String,
      default: "text",
      required: true,

      validator(x) {
        return ["text", "password", "number", "email", "url"].includes(x);
      }
    },

    size: {
      type: String,
      default: "large",

      validator(x) {
        return ["medium", "large", "mid-large"].includes(x);
      }
    },

    align: {
      type: String,
      default: "center",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    },

    name: {
      type: String,
      default: null
    },

    placeholder: {
      type: String,
      default: null
    },

    autocomplete: {
      type: String,
      default: null
    },

    submittable: {
      type: Boolean,
      default: false
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    },

    innerClass: {
      type: String,
      default: null
    }
  },

  emits: [
    "update:modelValue",
    "keyup",
    "keystroke",
    "focus",
    "change",
    "submit"
  ],

  data() {
    return {
      // --> STATE <--

      isFocused: false,

      value: ""
    };
  },

  watch: {
    modelValue: {
      immediate: true,

      handler(value) {
        // Update value in the state
        this.updateStateValue(value);
      }
    }
  },

  mounted() {
    // Apply auto-focus?
    // Notice: delay focus, otherwise the focus might not work in certain \
    //   circumstances.
    if (this.autofocus === true) {
      setTimeout(() => {
        this.focusField();
      });
    }
  },

  methods: {
    // --> HELPERS <--

    focusField() {
      // Attempt to focus? (not already focused)
      if (this.isFocused !== true) {
        const fieldElement = this.$refs.field || null;

        if (fieldElement !== null) {
          fieldElement.focus();
        }
      }
    },

    updateStateValue(value) {
      this.value = value;
    },

    updateModelValue(value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
    },

    // --> EVENT LISTENERS <--

    onFieldKeyDown(event) {
      const keyCode = event.keyCode;

      switch (keyCode) {
        // Enter
        case keyCodes.enter: {
          // Handle 'Enter' key press? (if not new line and submittable field)
          if (event.shiftKey !== true && this.submittable === true) {
            event.preventDefault();

            // Trigger field submit event
            this.$emit("submit");
          }

          break;
        }
      }
    },

    onFieldKeyUp(event) {
      const inputElement = event.target;

      // Handle key event
      const keyCode = event.keyCode;

      switch (keyCode) {
        // Escape
        case keyCodes.esc: {
          // De-focus from input
          inputElement?.blur();

          break;
        }
      }

      // Propagate key events
      this.$emit("keyup", event);
      this.$emit("keystroke", inputElement?.value || "");
    },

    onFieldInput() {
      let inputValue = this.$refs.field.value || "";

      // Convert raw input value to number?
      if (inputValue && this.type === "number") {
        inputValue = Number(inputValue);
      }

      // Update model value and send change event
      this.updateModelValue(inputValue);
    },

    onFieldFocus() {
      this.isFocused = true;

      // Propagate focus event
      this.$emit("focus", true);
    },

    onFieldBlur() {
      this.isFocused = false;

      // Propagate focus event
      this.$emit("focus", false);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-field";

// VARIABLES
$field-padding-block: 1px;
$field-outline-width: 2px;
$field-border-radius: 10px;
$field-suggest-block-origin-offset: 5px;

$field-medium-padding-sides: 10px;
$field-large-padding-sides: 18px;
$field-mid-large-padding-sides: 22px;

$field-medium-input-line-height: 25px;
$field-large-input-line-height: 42px;
$field-mid-large-input-line-height: 48px;

#{$c} {
  position: relative;

  #{$c}__inner {
    background-color: $color-background-secondary;
    border: 1px solid $color-border-secondary;
    outline: 0 solid rgba($color-base-purple-mid, 0);
    color: $color-base-black-mid;
    font-family: inherit;
    width: 100%;
    padding-block: $field-padding-block;
    transition-property: border-color, outline-color, outline-width;
    transition-duration: 150ms;
    transition-timing-function: linear;
    border-radius: $field-border-radius;
    display: inline-block;
    box-sizing: border-box;

    &::placeholder {
      color: $color-base-grey-dark;
      opacity: 1;
    }

    &:hover {
      border-color: $color-border-primary;
    }

    &:focus {
      border-color: $color-base-purple-mid;
    }
  }

  // --> SIZES <--

  &--medium {
    #{$c}__inner {
      font-size: 11px;
      line-height: $field-medium-input-line-height;
      letter-spacing: 0.05px;
      padding-inline-start: $field-medium-padding-sides;
      padding-inline-end: $field-medium-padding-sides;
    }
  }

  &--large {
    #{$c}__inner {
      font-size: 14px;
      line-height: $field-large-input-line-height;
      letter-spacing: 0.1px;
      padding-inline-start: $field-large-padding-sides;
      padding-inline-end: $field-large-padding-sides;
    }
  }

  &--mid-large {
    #{$c}__inner {
      font-size: 16px;
      line-height: $field-mid-large-input-line-height;
      letter-spacing: 0.125px;
      padding-inline-start: $field-mid-large-padding-sides;
      padding-inline-end: $field-mid-large-padding-sides;
    }
  }

  // --> ALIGNS <--

  &--left {
    #{$c}__inner {
      text-align: left;
    }
  }

  &--center {
    #{$c}__inner {
      text-align: center;
    }
  }

  &--right {
    #{$c}__inner {
      text-align: right;
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    cursor: not-allowed;

    &#{$c}--loading {
      cursor: wait;
    }

    #{$c}__inner {
      color: $color-base-grey-mid;
      pointer-events: none;

      &::placeholder {
        color: rgba($color-base-grey-mid, 0.5);
      }
    }
  }

  &--focused {
    #{$c}__inner {
      outline-color: rgba($color-base-purple-mid, 0.2);
      outline-width: $field-outline-width;
    }
  }
}
</style>
