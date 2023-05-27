<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-card
  .c-base-card__image
    img(
      :src="media"
      alt=""
      class="c-base-card__image-inner"
    )

  .c-base-card__content
    .c-base-card__text
      .c-base-card__title.u-medium
        slot(
          name="title"
        )

      .c-base-card__description
        slot(
          name="description"
        )

    .c-base-card__link(
      v-if="$slots.link"
    )
      slot(
        name="link"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseCard",

  props: {
    tint: {
      type: String,
      default: "blue",

      validator(x) {
        return ["blue", "pink", "purple"].includes(x);
      }
    },

    media: {
      type: String,
      default: null
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-card";

.c-base-card {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(246, 247, 251, 0.75) 0%,
    rgba(246, 247, 251, 0.675) 100%
  );
  backdrop-filter: blur(16px);

  #{$c}__image {
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;

    #{$c}__image-inner {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  #{$c}__content {
    padding: 32px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
  }

  #{$c}__text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #{$c}__title {
    color: $color-base-blue-dark;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: -0.015em;
  }

  #{$c}__description {
    color: $color-base-grey-dark;
    font-size: 16px;
    line-height: 26px;
  }

  #{$c}__link {
    margin-top: 16px;
  }
}
</style>
