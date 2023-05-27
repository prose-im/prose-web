<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-disclosure(
  :class=`{
    "is-open": state.value
  }`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import Vue from "vue";

export default {
  provide() {
    return {
      state: this.state,
      toggle: this.toggleDisclosure
    };
  },

  data() {
    return {
      // --> STATE <--

      state: Vue.observable({
        value: false
      })
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Toggles disclosure
     * @public
     * @return {undefined}
     */
    toggleDisclosure() {
      this.state.value = !this.state.value;
    }
  }
};
</script>

<style lang="scss">
$c: ".c-base-disclosure";

.c-base-disclosure {
  width: 100%;
}
</style>
