<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  @click="$emit('click')"
  :class=`[
    "c-base-icon-card",
    "c-base-icon-card--" + tint,
    {
      "c-base-icon-card--tab": tab,
      "c-base-icon-card--active": active
    }
  ]`
)
  .c-base-icon-card__content
    .c-base-icon-card__icon
      img(
        v-if="tab && !active && !mobile"
        src="@/assets/images/components/base/BaseIconCard/default.svg"
        width="64"
        height="64"
      )

      base-icon(
        v-else
        :icon="icon"
        :tint="tint"
      )

    h3(
      class="c-base-icon-card__title u-medium"
    )
      slot(
        name="title"
      )

    .c-base-icon-card__skeleton-stack(
      v-if="tab && !active && !mobile"
    )
      .c-base-icon-card__skeleton.c-base-icon-card__skeleton--full
      .c-base-icon-card__skeleton.c-base-icon-card__skeleton--half

    p(
      v-else
      class="c-base-icon-card__description"
    )
      slot(
        name="description"
      )

  .c-base-icon-card__image-wrapper(
    v-if="image.length"
  )
    img(
      :src="image"
      class="c-base-icon-card__image"
      alt=""
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseIconCard",

  props: {
    icon: {
      type: String,
      required: true
    },

    tint: {
      type: String,
      required: true
    },

    image: {
      default: "",
      type: String,
      required: false
    },

    active: {
      default: false,
      type: Boolean,
      required: false
    },

    tab: {
      default: false,
      type: Boolean,
      required: false
    }
  },

  emits: ["click"],

  data() {
    return {
      // --> DATA <--

      windowWidth: 1440
    };
  },

  computed: {
    mobile() {
      return this.windowWidth < 880;
    }
  },

  mounted() {
    // Trigger immediate resize event
    this.onResize();

    // Bind event listeners
    window.addEventListener("resize", this.onResize);
  },

  beforeUnmount() {
    // Unbind event listeners
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when resizing window
     * @public
     * @return {undefined}
     */
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-icon-card";

#{$c} {
  display: flex;
  border-radius: 32px;
  background: linear-gradient(
    180deg,
    rgba(246, 247, 251, 0.75) 0%,
    rgba(246, 247, 251, 0.675) 100%
  );
  border: 1px solid #81899b33;
  backdrop-filter: blur(16px);
  overflow: hidden;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  height: 100%;

  #{$c}__content {
    padding: 32px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  #{$c}__image-wrapper {
    flex: 1 0 calc(50% - 40px);
    width: 100%;
  }

  #{$c}__image {
    height: 100%;
    object-fit: cover;
  }

  #{$c}__icon {
    margin-bottom: 24px;
  }

  #{$c}__title {
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: -0.015em;
  }

  #{$c}__description {
    color: $color-base-grey-dark;
    font-size: 16px;
    line-height: 26px;
  }

  #{$c}__skeleton {
    height: 18px;
    background: #e3e8f2;
    border-radius: 4px;

    &--full {
      width: 100%;
      margin-bottom: 10px;
      margin-top: 4px;
    }

    &--half {
      width: 50%;
    }
  }

  &--tab:hover:not(.c-base-icon-card--active) {
    border: 1px solid #81899b67;
    background: linear-gradient(
      180deg,
      rgba(220, 223, 234, 0.4) 0%,
      rgba(220, 223, 234, 0.3) 100%
    );
  }

  // --> BOOLEANS <--

  &--tab {
    #{$c}__image-wrapper {
      display: none;
    }
  }

  &--active {
    &#{$c}--pink {
      border-color: $color-base-pink-light;
      background: linear-gradient(
        180deg,
        rgba(246, 112, 134, 0.18) 0%,
        rgba(246, 112, 134, 0.09) 100%
      );
    }

    &#{$c}--blue {
      border-color: $color-base-blue-mid;
      background: linear-gradient(
        180deg,
        rgba(81, 142, 234, 0.18) 0%,
        rgba(81, 142, 234, 0.09) 100%
      );
    }

    &#{$c}--purple {
      border-color: $color-base-purple-mid;
      background: linear-gradient(
        180deg,
        rgba(100, 78, 180, 0.18) 0%,
        rgba(100, 78, 180, 0.09) 100%
      );
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__image-wrapper {
      flex: 1 0 40%;
      width: auto;
    }

    #{$c}__image {
      width: 100%;
      object-position: left;
    }

    &--active {
      &#{$c}--pink,
      &#{$c}--blue,
      &#{$c}--purple {
        border: 1px solid #81899b33;
        background: linear-gradient(
          180deg,
          rgba(246, 247, 251, 0.75) 0%,
          rgba(246, 247, 251, 0.675) 100%
        );
      }
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    flex-direction: column-reverse;

    #{$c}__image {
      aspect-ratio: 1.43 / 1;
      object-fit: cover;
      object-position: center;
    }

    &--tab {
      #{$c}__image-wrapper {
        display: block;
      }
    }
  }
}
</style>
