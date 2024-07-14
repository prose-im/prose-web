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
    "c-form-increment",
    {
      "c-form-increment--disabled": disabled
    }
  ]`
)
  base-button(
    @click="onControlClick(-1)"
    :height="controlHeight"
    tint="gradient"
    class="c-form-increment__control"
    squared
    flat
  )
    image-control-decrease

  input(
    :name="name"
    :value="count"
    :min="minimum"
    step="1"
    type="number"
    ref="input"
    class="c-form-increment__input u-medium"
  )

  base-button(
    @click="onControlClick(1)"
    :height="controlHeight"
    tint="gradient"
    class="c-form-increment__control"
    squared
    flat
  )
    image-control-increase
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageControlDecrease from "@/assets/images/components/form/FormIncrement/control-decrease.svg?component";
import ImageControlIncrease from "@/assets/images/components/form/FormIncrement/control-increase.svg?component";

export default {
  name: "FormIncrement",

  components: { ImageControlDecrease, ImageControlIncrease },

  props: {
    modelValue: {
      type: Number,
      default: 0
    },

    name: {
      type: String,
      default: null
    },

    minimum: {
      type: Number,
      default: 0
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ["update:modelValue", "change"],

  data() {
    return {
      // --> DATA <--

      controlHeight: "34px",

      // --> STATE <--

      count: 0
    };
  },

  watch: {
    modelValue: {
      immediate: true,

      handler(value) {
        this.count = value;
      }
    }
  },

  methods: {
    // --> HELPERS <--

    /**
     * Updates value
     * @public
     * @param  {number} count
     * @return {undefined}
     */
    updateValue(count) {
      if (count >= this.minimum) {
        this.$emit("update:modelValue", count);
        this.$emit("change", count);
      }
    },

    // --> EVENT LISTENERS <--

    /**
     * Triggers button is clicked
     * @public
     * @param  {number} [increment]
     * @return {undefined}
     */
    onControlClick(increment = 1) {
      this.updateValue(this.count + increment);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-increment";

// VARIABLES
$control-icon-size: 18px;

#{$c} {
  background: $color-background-primary;
  border: 1px solid rgba($color-base-grey-dark, 0.2);
  padding: 6px 7px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  column-gap: 5px;

  #{$c}__control {
    flex: 0 0 auto;

    svg {
      fill: $color-white;
      width: $control-icon-size;
      height: $control-icon-size;
    }
  }

  #{$c}__input {
    background-color: transparent;
    border: 0 none;
    outline: 0 none;
    color: $color-base-black-mid;
    font-size: 15.5px;
    letter-spacing: 0.1px;
    line-height: 28px;
    text-align: center;
    max-width: 74px;
    padding: 0;
    appearance: textfield;
    flex: 1;

    @include input-number-buttons {
      appearance: none;
      margin: 0;
    }
  }
}
</style>
