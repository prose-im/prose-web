<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-changelog-year
  section-changelog-main(
    :years="years"
    :active-year="year"
    :sidebar-width="sidebarWidth"
    class="p-changelog-year__main"
    sidebar-class="p-changelog-year__main-sidebar"
    content-class="p-changelog-year__main-content"
  )

  section-changelog-versions(
    :versions="changes.versions"
    :sidebar-width="sidebarWidth"
    class="p-changelog-year__versions"
    sidebar-class="p-changelog-year__versions-sidebar"
    content-class="p-changelog-year__versions-content"
  )

  section-changelog-background(
    :sidebar-width="sidebarWidth"
    class="p-changelog-year__background"
    sidebar-class="p-changelog-year__background-sidebar"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
definePageMeta({
  layout: "simple",

  validate: async ({ params }) => {
    const _yearRegex = /^([12][0-9]{3})$/;

    // Year is set, but not valid?
    if (params.year && _yearRegex.test(params.year) === false) {
      return false;
    }

    // Page parameters are valid
    return true;
  }
});

const _route = useRoute();

// Acquire all available content years
const { data: years } = await useAsyncData(async () => {
  return (await queryContent("changelog").only(["title"]).find())
    .map(yearData => {
      return yearData.title;
    })
    .sort()
    .reverse();
});

// Important: fallback on non-existing year '0000' if no first year is \
//   available, that way 404 errors are generated properly for the root \
//   changelog page.
const year = _route.params.year || years.value[0] || "0000";

// Fetch changes for selected year
const { data: changes } = await useAsyncData(async () => {
  return await queryContent("changelog", year).findOne();
});

// Year does not exist?
if (changes.value === null) {
  throw createError({ statusCode: 404, statusMessage: "Year not found" });
}

// Set page title
useHead({
  title: `Prose version history (${year || "Latest"})`
});
</script>

<script>
export default {
  name: "ChangelogYearPage",

  data() {
    return {
      // --> DATA <--

      sidebarWidth: "185px"
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-changelog-year";

// VARIABLES
$content-padding-left-default: 70px;
$content-padding-left-medium: 52px;
$content-padding-left-small: 42px;
$content-padding-left-tiny: 28px;
$content-padding-left-lilliput: 22px;

#{$c} {
  #{$c}__main,
  #{$c}__versions {
    z-index: 1;
    position: relative;
  }

  #{$c}__main #{$c}__main-content,
  #{$c}__versions #{$c}__versions-content {
    padding-left: $content-padding-left-default;
  }

  #{$c}__versions {
    margin-top: 36px;
  }

  #{$c}__background {
    pointer-events: none;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  #{$c} {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-medium;
    }
  }
}

@media (max-width: $screen-small-width-breakpoint) {
  #{$c} {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-small;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-tiny;
    }

    #{$c}__main #{$c}__main-sidebar,
    #{$c}__versions #{$c}__versions-sidebar,
    #{$c}__background #{$c}__background-sidebar {
      max-width: 150px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__main #{$c}__main-content,
    #{$c}__versions #{$c}__versions-content {
      padding-left: $content-padding-left-lilliput;
    }

    #{$c}__main #{$c}__main-sidebar,
    #{$c}__versions #{$c}__versions-sidebar,
    #{$c}__background #{$c}__background-sidebar {
      max-width: 92px;
    }
  }
}
</style>
