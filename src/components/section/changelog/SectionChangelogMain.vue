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
    class="c-section-changelog-main"
  )
    div(
      slot="sidebar"
      class="c-section-changelog-main__sidebar"
    )
      base-raster(
        :scale="0.85"
        name="clock"
        class="c-section-changelog-main__sidebar-raster"
      )

    div(
      slot="content"
      class="c-section-changelog-main__content"
    )
      base-descripted-title(
        class="c-section-changelog-main__title"
      )
        template(
          slot="title"
        )
          | Version History

        template(
          slot="description"
        )
          p
            | Prose apps are actively maintained. Major new versions are released periodically.

          p.u-medium
            | This history is a ledger of all downloadable Prose versions, since day one.

      .c-section-changelog-main__navigate
        h6.c-section-changelog-main__navigate-label.u-title.u-medium
          | The Time Machine:

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
    activeYear: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      // --> DATA <--

      navigateYears: [
        {
          name: "2022",
          target: "/changelog/2022/"
        },

        {
          name: "2021",
          target: "/changelog/2021/"
        },

        {
          name: "2020",
          target: "/changelog/2020/"
        },

        {
          name: "2019",
          target: "/changelog/2019/"
        },

        {
          name: "2018",
          target: "/changelog/2018/"
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-changelog-main";

.c-section-changelog-main {
  #{$c}__sidebar {
    text-align: right;
    padding-right: 46px;
  }

  #{$c}__content {
    text-align: left;
    padding-left: 72px;
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
</style>
