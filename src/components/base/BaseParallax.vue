<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template>
  <div ref="parallax" class="parallax">
    <slot></slot>
  </div>
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
      observer: null,
      isVisible: false,
      initialScroll: 0,
      currentTranslation: 0
    };
  },
  mounted() {
    this.initObserver();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.observer.disconnect();
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    onIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.initialScroll = window.scrollY;
        } else {
          this.isVisible = false;
        }
      });
    },
    initObserver() {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(this.$refs.parallax);
    },
    handleScroll() {
      if (this.isVisible) {
        const deltaY = (window.scrollY - this.initialScroll) * 0.1 * this.speed;
        this.currentTranslation += deltaY;
        this.$refs.parallax.style.transform = `translateY(${this.currentTranslation}px)`;
        this.initialScroll = window.scrollY;
      }
    }
  }
};
</script>
