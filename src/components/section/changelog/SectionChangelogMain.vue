<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
page-split-view(
  :sidebar-width="sidebarWidth"
  :sidebar-class="sidebarClass"
  class="c-section-changelog-main"
)
  template(
    v-slot:sidebar
  )
    .c-section-changelog-main__sidebar
      base-raster(
        :scale="0.85"
        name="clock"
        class="c-section-changelog-main__sidebar-raster"
      )

  template(
    v-slot:content
  )
    div(
      :class=`[
        "c-section-changelog-main__content",
        {
          [contentClass]: contentClass
        }
      ]`
    )
      base-descripted-title(
        align="left"
        level="normal"
        class="c-section-changelog-main__title"
      )
        template(
          v-slot:title
        )
          | Version History

        template(
          v-slot:description
        )
          p
            | Prose apps are actively maintained. Major new versions are released periodically.

          p.u-medium
            | This history is a ledger of all downloadable Prose versions, since day one.

      .c-section-changelog-main__navigate(
        v-if="navigateYears.length > 0"
      )
        h6.c-section-changelog-main__navigate-label.u-title.u-medium
          | Years:

        base-navigate(
          class="c-section-changelog-main__navigate-years"
          :choices="navigateYears"
          :value="activeYear"
        )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionChangelogMain",

  props: {
    sidebarWidth: {
      type: String,
      required: true
    },

    activeYear: {
      type: String,
      default: null
    },

    years: {
      type: Array,

      default() {
        return [];
      }
    },

    sidebarClass: {
      type: String,
      default: null
    },

    contentClass: {
      type: String,
      default: null
    }
  },

  computed: {
    navigateYears() {
      return this.years.map(year => {
        return {
          name: year,
          target: `/changelog/${year}/`
        };
      });
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-changelog-main";

#{$c} {
  #{$c}__sidebar {
    text-align: left;
    padding-right: 18px;
  }

  #{$c}__content {
    text-align: left;
  }

  #{$c}__navigate {
    margin-top: 20px;
    display: flex;
    align-items: center;

    #{$c}__navigate-label {
      color: $color-base-black-mid;
      font-size: 15px;
      line-height: 20px;
    }

    #{$c}__navigate-years {
      margin-left: 14px;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__sidebar {
      #{$c}__sidebar-raster {
        display: none;
      }
    }
  }
}
</style>
