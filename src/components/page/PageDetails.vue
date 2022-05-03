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
      "c-page-details",
      "c-page-details--" + align
    ]`
  )
    page-wrapper(
      class="c-page-details__inner"
    )
      .c-page-details__text
        base-title(
          level="mini"
          class="c-page-details__title"
        )
          slot(
            name="title"
          )

        .c-page-details__description(
          v-if="$slots.description"
        )
          slot(
            name="description"
          )

        .c-page-details__actions(
          v-if="$slots.actions"
        )
          slot(
            name="actions"
          )

      .c-page-details__illustration(
        v-if="$slots.illustration"
      )
        slot(
          name="illustration"
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageDetails",

  props: {
    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "right"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-details";

// VARIABLES
$illustration-margin-side: 90px;

.c-page-details {
  #{$c}__inner {
    display: flex;
  }

  #{$c}__text,
  #{$c}__illustration {
    flex: 1;
  }

  #{$c}__description {
    color: $color-black;
    font-size: 15px;
    line-height: 21px;
    margin-top: 26px;

    p {
      margin-bottom: 18px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  #{$c}__actions {
    margin-top: 42px;
  }

  #{$c}__illustration {
    text-align: center;
  }

  // --> ALIGNS <--

  &--left {
    #{$c}__inner {
      flex-direction: row;
    }

    #{$c}__illustration {
      margin-left: $illustration-margin-side;
    }
  }

  &--right {
    #{$c}__inner {
      flex-direction: row-reverse;
    }

    #{$c}__illustration {
      margin-right: $illustration-margin-side;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  .c-page-details {
    #{$c}__inner {
      flex-direction: column;
    }

    #{$c}__text {
      padding: 0 38px;
    }

    #{$c}__title,
    #{$c}__text {
      text-align: center;
    }

    #{$c}__description {
      p {
        margin-bottom: 12px;
      }
    }

    #{$c}__illustration {
      margin-top: 68px;
    }

    &--left {
      #{$c}__illustration {
        margin-left: 0;
      }
    }

    &--right {
      #{$c}__illustration {
        margin-right: 0;
      }
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-details {
    #{$c}__text {
      padding: 0 24px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-details {
    #{$c}__text {
      padding: 0 12px;
    }
  }
}
</style>
