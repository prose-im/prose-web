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
        "c-base-icon-card--active": active
      }
    ]`
)
    div(
        class="c-base-icon-card__content"
    )   

        div(
            class="c-base-icon-card__icon"
        )
            base-icon-avatar(
                :icon="icon"
                :tint="tint"
            )
    
        h3(
            class="c-base-icon-card__title"
        )
            slot(
                name="title"
            )

        p(
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
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
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

  &--active {
    border-color: #f67086;
    background: linear-gradient(
      180deg,
      rgba(246, 112, 134, 0.18) 0%,
      rgba(246, 112, 134, 0.09) 100%
    );
  }

  &__content {
    padding: 32px;
    flex: 0 1 auto;
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
}
</style>
