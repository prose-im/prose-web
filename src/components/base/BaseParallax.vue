<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-parallax(
  ref="parallax"
)
  slot(
    v-if="isVisible"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseParallax",

  data() {
    return {
      // --> STATE <--

      observer: null,

      isVisible: false
    };
  },

  mounted() {
    // Start observer
    this.startObserver();
  },

  beforeDestroy() {
    // Stop observer
    this.observer.disconnect();
  },

  methods: {
    // --> HELPERS <--

    /**
     * Starts intersection observer
     * @public
     * @return {undefined}
     */
    startObserver() {
      this.observer = new IntersectionObserver(this.onIntersection);

      this.observer.observe(this.$refs.parallax);
    },

    // --> EVENT LISTENERS <--

    /**
     * Triggers when an intersection occurs
     * @public
     * @param  {object} entries
     * @return {undefined}
     */
    onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting === true) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      });
    }
  }
};
</script>
