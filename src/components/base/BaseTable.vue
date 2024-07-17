<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-base-table
  .c-base-table__head
    .c-base-table__row
      .c-base-table__column.u-semibold(
        v-for="entry in table.head"
      )
        | {{ entry.text }}

        base-badge(
          v-if="entry.badge"
          :color="entry.badge.color"
        )
          | {{ entry.badge.text }}

  .c-base-table__body
    template(
      v-for="section in table.body"
    )
      .c-base-table__row.c-base-table__row--title(
        v-if="section.section"
      )
        .c-base-table__column.u-medium
          | {{ section.section }}

      .c-base-table__row(
        v-for="entry in section.items"
      )
        div(
          v-for="(entryLine, entryIndex) in entry"
          :class=`[
            "c-base-table__column",
            {
              "c-base-table__column--title": (entryIndex === 0),
              "c-base-table__column--value": (entryIndex > 0),
              "c-base-table__column--emphasis": entryLine.emphasis,
              "u-medium": entryLine.emphasis
            }
          ]`
        )
          span.c-base-table__text(
            v-if="entryLine.text"
          )
            | {{ entryLine.text }}

          image-entry-line-value-included(
            v-if="entryLine.included"
            class="c-base-table__image c-base-table__image--included"
          )

          image-entry-line-title-information(
            v-if="entryIndex === 0"
            class="c-base-table__image c-base-table__image--information"
          )

  .c-base-table__foot
    .c-base-table__row
      .c-base-table__column(
        v-for="entry in table.foot"
      )
        component(
          v-if="entry.component"
          v-bind="entry.properties"
          :is="entry.component"
        )

        template(
          v-else-if="entry.text"
        )
          | {{ entry.text }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageEntryLineTitleInformation from "@/assets/images/components/base/BaseTable/entry-line-title-information.svg?component";
import ImageEntryLineValueIncluded from "@/assets/images/components/base/BaseTable/entry-line-value-included.svg?component";

export default {
  name: "BaseTable",

  components: { ImageEntryLineTitleInformation, ImageEntryLineValueIncluded },

  props: {
    table: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
$c: ".c-base-table";

// VARIABLES
$table-spacing: 15px;
$table-content-border-width: 1px;

$column-title-width: 40%;
$column-padding-sides: 24px;

#{$c} {
  color: $color-base-blue-dark;

  #{$c}__head,
  #{$c}__body,
  #{$c}__foot {
    background-color: rgba($color-white, 0.9);
    border: $table-content-border-width solid $color-border-primary;
    border-radius: 8px;
    box-shadow: 0 6px 3px -3px rgba($color-black, 0.02);
  }

  #{$c}__head,
  #{$c}__foot {
    margin-left: calc($column-title-width - $table-content-border-width);
  }

  #{$c}__head #{$c}__column,
  #{$c}__body #{$c}__column:nth-child(n + 2),
  #{$c}__foot #{$c}__column {
    justify-content: center;
  }

  #{$c}__head {
    font-size: 17.5px;
    margin-bottom: $table-spacing;

    #{$c}__column {
      min-height: 54px;
      padding: 6px $column-padding-sides;
    }
  }

  #{$c}__body {
    font-size: 14.5px;
    line-height: 18px;

    #{$c}__row {
      &--title {
        #{$c}__column {
          font-size: 15px;
          min-height: 44px;
        }
      }
    }

    #{$c}__column {
      min-height: 42px;
      padding: 4px $column-padding-sides;
    }
  }

  #{$c}__foot {
    font-size: 19px;
    margin-top: $table-spacing;

    #{$c}__column {
      min-height: 60px;
      padding: 22px $column-padding-sides;
    }
  }

  #{$c}__row {
    display: flex;
    align-items: center;

    &--title {
      background-color: $color-background-secondary;
      border-color: $color-border-primary;
      border-width: $table-content-border-width 0;
      border-style: solid;
    }

    #{$c}__column {
      border-right: $table-content-border-width solid $color-border-primary;
      flex: 1;

      &:last-child {
        border-right: 0 none;
      }
    }
  }

  #{$c}__column {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    column-gap: 10px;

    &--title {
      color: $color-base-blue-dark;
      min-width: $column-title-width;

      #{$c}__text {
        flex: 1;
      }

      #{$c}__image {
        flex: 0 0 auto;
      }
    }

    &--value {
      color: $color-base-grey-dark;
    }

    &--emphasis {
      color: $color-base-blue-dark;
    }
  }

  #{$c}__image {
    &--included {
      width: 18px;
      aspect-ratio: 1;
    }

    &--information {
      width: 14px;
      aspect-ratio: 1;
    }
  }
}
</style>
