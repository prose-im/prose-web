<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.disclosure(:class="{ 'is-open': state.value }")
    slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
import Vue from "vue";

export default {
  data() {
    return {
      state: Vue.observable({
        value: false
      })
    };
  },
  provide() {
    return {
      state: this.state,
      toggle: this.toggleDisclosure
    };
  },
  methods: {
    toggleDisclosure() {
      this.state.value = !this.state.value;
    }
  }
};
</script>

<style>
.disclosure {
  width: 100%;
}
</style>
