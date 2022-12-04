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
      :sidebar-width="sidebarWidth"
      :sidebar-class="sidebarClass"
      class="c-section-changelog-versions__version"
    )
      div(
        slot="sidebar"
        class="c-section-changelog-versions__version-sidebar"
      )
        .c-section-changelog-versions__version-sidebar-wrapped
          .c-section-changelog-versions__version-tag
            span.c-section-changelog-versions__version-label
              | Version

            span.c-section-changelog-versions__version-number.u-title.u-bold
              | {{ version.version }}

          .c-section-changelog-versions__version-downloads(
            v-if="versionsDownloadsDropdown[version.version].length > 0"
          )
            base-dropdown(
              :items="versionsDownloadsDropdown[version.version]"
              arrow-class="c-section-changelog-versions__version-dropdown-arrow"
              class="c-section-changelog-versions__version-dropdown"
            )

            base-button(
              right-icon="chevron-down"
              tint="light"
              class="c-section-changelog-versions__version-button"
              bolder
            )
              | Downloads

      div(
        slot="content"
        :class=`[
          "c-section-changelog-versions__version-content",
          {
            [contentClass]: contentClass
          }
        ]`
      )
        .c-section-changelog-versions__version-metas
          h4.c-section-changelog-versions__version-date.u-title.u-medium
            | {{ formatDate(version.date) }}

          a.c-section-changelog-versions__version-target.u-bold(
            v-if="versionsFullChangesUrls[version.version]"
            :href="versionsFullChangesUrls[version.version]"
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

const VERSIONED_PLATFORMS = {
  macos: "macOS",
  windows: "Windows",
  linux: "Linux"
};

export default {
  name: "SectionChangelogVersions",

  components: { ImageVersionTargetIcon },

  props: {
    sidebarWidth: {
      type: String,
      required: true
    },

    versions: {
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

  data() {
    return {
      // --> DATA <--

      groupNames: {
        features: "New Features",
        changes: "Changes",
        fixes: "Bug Fixes"
      }
    };
  },

  computed: {
    versionsDownloadsDropdown() {
      const _versionDropdowns = {};

      this.versions.forEach(version => {
        const _version = version.version;

        _versionDropdowns[_version] = (version.platforms || []).map(
          platform => {
            return {
              id: platform,

              title: `${
                VERSIONED_PLATFORMS[platform] || platform
              } v${_version}`,

              target: this.downloadUrl(platform, _version)
            };
          }
        );
      });

      return _versionDropdowns;
    },

    versionsFullChangesUrls() {
      const _versionFullChanges = {};

      this.versions.forEach(version => {
        const _version = version.version;

        _versionFullChanges[_version] = this.fullChangesUrl(_version);
      });

      return _versionFullChanges;
    }
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
    },

    /**
     * Generates download URL for platform and version
     * @public
     * @param  {string} platform
     * @param  {string} version
     * @return {string} Download URL
     */
    downloadUrl(platform, version) {
      // Acquire file extension (based on platform)
      let _extension;

      switch (platform) {
        case "macos": {
          _extension = "dmg";

          break;
        }

        default: {
          _extension = "zip";
        }
      }

      // Generate download URL
      return (
        `${this.$config.url.prose_files}/apps/releases/` +
        `${version}/prose-v${version}-${platform}.${_extension}`
      );
    },

    /**
     * Generates full changes URL for version
     * @public
     * @param  {string} version
     * @return {string} Full changes URL
     */
    fullChangesUrl(version) {
      return (
        `${this.$config.url.github_prose}/prose-core-client/` +
        `releases/tag/v${version}`
      );
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-changelog-versions";

// VARIABLES
$version-dropdown-offset-left: 8px;

.c-section-changelog-versions {
  #{$c}__version {
    border-top: 1px solid $color-border-secondary;
    padding-top: 28px;
    padding-bottom: 44px;

    &:last-child {
      padding-bottom: 22px;
    }

    #{$c}__version-sidebar {
      padding-right: 12px;
      display: flex;
      justify-content: flex-start;

      #{$c}__version-sidebar-wrapped {
        text-align: left;
      }
    }

    #{$c}__version-tag {
      #{$c}__version-label,
      #{$c}__version-number {
        display: block;
      }

      #{$c}__version-label {
        color: $color-base-grey-mid;
        font-size: 15px;
        line-height: 16px;
        text-transform: lowercase;
        letter-spacing: 0;
      }

      #{$c}__version-number {
        color: $color-base-blue-mid;
        font-size: 38px;
        line-height: 36px;
        letter-spacing: -0.3px;
        margin-top: 4px;
      }
    }

    #{$c}__version-downloads {
      margin-top: 24px;
      position: relative;

      &:hover {
        #{$c}__version-dropdown {
          opacity: 1;
          visibility: visible;
        }
      }

      #{$c}__version-dropdown {
        min-width: calc(100% + 70px);
        position: absolute;
        top: 100%;
        left: (-1 * $version-dropdown-offset-left);
        opacity: 0;
        visibility: hidden;
        transition: opacity 75ms linear;

        #{$c}__version-dropdown-arrow {
          left: (42px + $version-dropdown-offset-left);
        }
      }
    }

    #{$c}__version-metas {
      display: flex;
      align-items: center;
      margin-top: 20px;

      #{$c}__version-date {
        color: $color-base-black-mid;
        font-size: 16px;
        flex: 1;
      }

      #{$c}__version-target {
        color: $color-base-blue-link;
        font-size: 14px;
        margin-left: 14px;
        flex: 0 0 auto;
        display: flex;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }

        #{$c}__version-target-icon {
          fill: $color-base-blue-link;
          width: auto;
          height: 12px;
          margin-left: 5px;
          margin-bottom: -1px;
          flex: 0 0 auto;
        }
      }
    }

    #{$c}__changelog {
      margin-top: 32px;

      #{$c}__changelog-group {
        color: $color-base-black-mid;
        font-size: 19px;
      }

      #{$c}__changelog-changes {
        list-style-type: none;
        margin-top: 18px;
        padding-left: 7px;

        #{$c}__changelog-change {
          color: $color-black;
          font-size: 15px;
          line-height: 24px;
          letter-spacing: -0.14px;

          &::before {
            content: "—";
            color: $color-base-grey-mid;
            margin-right: 7px;
          }
        }
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-section-changelog-versions {
    #{$c}__version {
      #{$c}__version-downloads {
        display: none;
      }

      #{$c}__version-metas {
        #{$c}__version-target {
          display: none;
        }
      }
    }
  }
}
</style>
