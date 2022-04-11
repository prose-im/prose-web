<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-changelog-versions
    page-split-view(
      v-for="version in versions"
      :key="'version_' + version.version"
      class="c-section-changelog-versions__version"
    )
      div(
        slot="sidebar"
        class="c-section-changelog-versions__version-sidebar"
      )
        .c-section-changelog-versions__version-tag
          | Version

          | {{ version.version }}

        .c-section-changelog-versions__version-downloads
          base-button(
            right-icon="chevron-down"
            tint="light"
            class="c-section-changelog-versions__version-button"
            bolder
          )
            | Downloads

      div(
        slot="content"
        class="c-section-changelog-versions__version-content"
      )
        .c-section-changelog-versions__version-metas
          h4.c-section-changelog-versions__version-date.u-title.u-medium
            | {{ formatDate(version.date) }}

          a.c-section-changelog-versions__version-target.u-bold(
            href="#"
            target="_blank"
          )
            | Full changes on GitHub

            image-version-target-icon(
              class="c-section-changelog-versions__version-target-icon"
            )

        .c-section-changelog-versions__changelog(
          v-for="changes, changesGroup in version.changelog"
          :key="'changelog_' + version.version + '_' + changesGroup"
        )
          h6.c-section-changelog-versions__changelog-group.u-title.u-bold
            | {{ (groupNames[changesGroup] || changesGroup) }}

          .c-section-changelog-versions__changelog-changes
            li.c-section-changelog-versions__changelog-change(
              v-for="change in changes"
            )
              | {{ change[0] }}: {{ change[1] }}.
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageVersionTargetIcon from "~/assets/images/components/section/changelog/SectionChangelogVersions/version-target-icon.svg?inline";

// CONSTANTS
const FORMAT_DATE_AREA = "en-US";

const FORMAT_DATE_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric"
};

export default {
  name: "SectionChangelogVersions",

  components: { ImageVersionTargetIcon },

  data() {
    return {
      groupNames: {
        features: "New Features",
        changes: "Changes",
        fixes: "Bug Fixes"
      },

      versions: [
        {
          version: "231.1",
          date: "2022-03-27",

          changelog: {
            features: [
              ["Messaging", "Ability to remove messages from history"],
              ["Preferences", "Microphone sound level tester"]
            ],

            changes: [["Interface", "Color adjustments in Dark Mode"]],

            fixes: [
              ["Protocol", "Fixed issues reconnecting over WebSocket"],
              ["Notifications", "Fixed some missed Desktop notifications"]
            ]
          }
        },

        {
          version: "231",
          date: "2022-03-10",

          changelog: {
            features: [
              ["Messaging", "Ability to remove messages from history"],
              ["Preferences", "Microphone sound level tester"]
            ],

            changes: [["Interface", "Color adjustments in Dark Mode"]],

            fixes: [
              ["Protocol", "Fixed issues reconnecting over WebSocket"],
              ["Notifications", "Fixed some missed Desktop notifications"]
            ]
          }
        },

        {
          version: "230",
          date: "2022-02-03",

          changelog: {
            features: [
              ["Messaging", "Ability to remove messages from history"],
              ["Preferences", "Microphone sound level tester"]
            ],

            changes: [["Interface", "Color adjustments in Dark Mode"]],

            fixes: [
              ["Protocol", "Fixed issues reconnecting over WebSocket"],
              ["Notifications", "Fixed some missed Desktop notifications"]
            ]
          }
        }
      ]
    };
  },

  methods: {
    // --> HELPERS <--

    /**
     * Formats date
     * @public
     * @param  {string} dateString
     * @return {string} Formatted date
     */
    formatDate(dateString) {
      const _date = new Date(dateString);

      // Parsed date is valid? Format.
      if (isNaN(_date.getTime()) === false) {
        return _date.toLocaleDateString(FORMAT_DATE_AREA, FORMAT_DATE_OPTIONS);
      }

      // Parsed date is invalid, mirror raw date string
      return dateString;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-changelog-versions";

.c-section-changelog-versions {
  #{$c}__version {
    border-top: 1px solid $color-border-secondary;
    padding-top: 24px;
    padding-bottom: 34px;

    #{$c}__version-sidebar {
      // TODO
    }

    #{$c}__version-content {
      // TODO
    }

    #{$c}__version-tag {
      // TODO
    }

    #{$c}__version-downloads {
      // TODO

      #{$c}__version-button {
      }
    }

    #{$c}__version-metas {
      display: flex;
      align-items: center;

      #{$c}__version-date {
        color: $color-base-black-mid;
        font-size: 18px;
        flex: 1;
      }

      #{$c}__version-target {
        color: $color-base-blue-link;
        flex: 0 0 auto;
        display: flex;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }

        #{$c}__version-target-icon {
          fill: $color-base-blue-link;
          width: auto;
          height: 13px;
          margin-left: 5px;
          flex: 0 0 auto;
        }
      }
    }

    #{$c}__changelog {
      // TODO

      #{$c}__changelog-group {
        // TODO
      }

      #{$c}__changelog-changes {
        // TODO

        #{$c}__changelog-change {
          // TODO
        }
      }
    }
  }
}
</style>
