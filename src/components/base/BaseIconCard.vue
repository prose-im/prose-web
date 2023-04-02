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
    :class=`[
      "c-base-icon-card", 
      "c-base-icon-card--" + tint,
      {
        "c-base-icon-card--tab": tab,
        "c-base-icon-card--active": active
      }
    ]`
    @click="$emit('click')"
)
    div(
        class="c-base-icon-card__content"
    )   

        div(
            class="c-base-icon-card__icon"
        ) 
          img(v-if="tab && !active && !mobile" src="@/assets/images/components/base/BaseIcon3D/default.svg" width="64" height="64")
          base-icon-avatar(
            v-else
              :icon="icon"
              :tint="tint"
          )
            
        h3(
          class="c-base-icon-card__title"
        )
          slot(
            name="title"
          )

        .c-base-icon-card__skeleton-stack(v-if="tab && !active && !mobile")
          .c-base-icon-card__skeleton.c-base-icon-card__skeleton-full
          .c-base-icon-card__skeleton.c-base-icon-card__skeleton-half
        p(
          v-else
          class="c-base-icon-card__description"
        ) 
          slot(
            
            name="description"
          )

    div(
        class="c-base-icon-card__image-wrapper"
        v-if="image.length"
    )   
        img(
            class="c-base-icon-card__image"
            :src="image"
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

  data() {
    return {
      windowWidth: 1440
    };
  },

  computed: {
    mobile() {
      return this.windowWidth < 880;
    }
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
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

.c-base-icon-card {
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

  &--tab:hover:not(.c-base-icon-card--active) {
    border: 1px solid #81899b67;
    background: linear-gradient(
      180deg,
      rgba(220, 223, 234, 0.4) 0%,
      rgba(220, 223, 234, 0.3) 100%
    );
  }

  &--tab {
    #{$c}__image-wrapper {
      display: none;
    }
  }

  &.c-base-icon-card--active {
    &.c-base-icon-card--pink {
      border-color: $color-base-pink-light;
      background: linear-gradient(
        180deg,
        rgba(246, 112, 134, 0.18) 0%,
        rgba(246, 112, 134, 0.09) 100%
      );
    }

    &.c-base-icon-card--blue {
      border-color: $color-base-blue-mid;
      background: linear-gradient(
        180deg,
        rgba(81, 142, 234, 0.18) 0%,
        rgba(81, 142, 234, 0.09) 100%
      );
    }

    &.c-base-icon-card--purple {
      border-color: $color-base-purple-mid;
      background: linear-gradient(
        180deg,
        rgba(100, 78, 180, 0.18) 0%,
        rgba(100, 78, 180, 0.09) 100%
      );
    }
  }

  &__content {
    padding: 32px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  &__image-wrapper {
    flex: 1 0 calc(50% - 40px);
    width: 100%;
  }

  &__image {
    height: 100%;
    object-fit: cover;
  }

  &__icon {
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 10px;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: -0.015em;
    font-weight: $font-weight-medium;
  }

  &__description {
    color: $color-base-grey-dark;
    font-size: 16px;
    line-height: 26px;
  }

  &__skeleton {
    height: 18px;
    background: #e3e8f2;
    border-radius: 4px;
  }

  &__skeleton-full {
    width: 100%;
    margin-bottom: 10px;
    margin-top: 4px;
  }

  &__skeleton-half {
    width: 50%;
  }

  @media (max-width: $screen-medium-width-breakpoint) {
    &__image-wrapper {
      flex: 1 0 40%;
      width: auto;
    }

    &__image {
      width: 100%;
      object-position: left;
    }

    &.c-base-icon-card--active {
      &.c-base-icon-card--pink,
      &.c-base-icon-card--blue,
      &.c-base-icon-card--purple {
        border: 1px solid #81899b33;
        background: linear-gradient(
          180deg,
          rgba(246, 247, 251, 0.75) 0%,
          rgba(246, 247, 251, 0.675) 100%
        );
      }
    }
  }

  @media (max-width: $screen-small-width-breakpoint) {
    flex-direction: column-reverse;

    &__image {
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
