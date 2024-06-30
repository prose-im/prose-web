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

  props: {
    speed: {
      type: Number,
      default: 0.5
    }
  },

  data() {
    return {
      // --> STATE <--

      observer: null,

      isVisible: false,

      initialScroll: 0,
      currentTranslation: 0
    };
  },

  mounted() {
    // Start observer
    this.startObserver();

    // Bind scroll event
    window.addEventListener("scroll", this.onWindowScroll);
  },

  beforeUnmount() {
    // Stop observer
    this.stopObserver();

    // Unbind scroll event
    window.removeEventListener("scroll", this.onWindowScroll);
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

      if (this.$refs.parallax) {
        this.observer.observe(this.$refs.parallax);
      }
    },

    /**
     * Stops intersection observer
     * @public
     * @return {undefined}
     */
    stopObserver() {
      this.observer?.disconnect();
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
        // Mark visible only once
        if (entry.isIntersecting === true) {
          this.isVisible = true;
        }
      });
    },

    /**
     * Triggers when a window scroll occurs
     * @public
     * @return {undefined}
     */
    onWindowScroll() {
      if (this.isVisible === true) {
        // Update current translation
        this.currentTranslation +=
          (window.scrollY - this.initialScroll) * 0.1 * this.speed;

        // Update translate transform style?
        if (this.$refs.parallax) {
          this.$refs.parallax.style.transform =
            "translateY(" + this.currentTranslation + "px)";
        }

        // Store current scroll vertical position
        this.initialScroll = window.scrollY;
      }
    }
  }
};
</script>
