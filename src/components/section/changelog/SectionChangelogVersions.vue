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
    template(
      v-slot:sidebar
    )
      .c-section-changelog-versions__version-sidebar
        .c-section-changelog-versions__version-sidebar-wrapped
          .c-section-changelog-versions__version-tag
            span.c-section-changelog-versions__version-label
              | Version

            span.c-section-changelog-versions__version-number.u-title.u-semibold
              | {{ version.version }}

          .c-section-changelog-versions__version-downloads(
            v-if="versionsDownloadsDropdown[version.version].length > 0"
          )
            base-dropdown(
              :items="versionsDownloadsDropdown[version.version]"
              class="c-section-changelog-versions__version-dropdown"
            )

            base-button(
              right-icon="chevron-down"
              tint="light"
              class="c-section-changelog-versions__version-button"
              bolder
            )
              | Downloads

    template(
      v-slot:content
    )
      div(
        :class=`[
          "c-section-changelog-versions__version-content",
          {
            [contentClass]: contentClass
          }
        ]`
      )
        .c-section-changelog-versions__version-metas
          h4.c-section-changelog-versions__version-date.u-title.u-medium
            | {{ $filters.formatDate(version.date) }}

          a.c-section-changelog-versions__version-target.u-semibold(
            v-if="versionsFullChangesUrls[version.version]"
            :href="versionsFullChangesUrls[version.version]"
            target="_blank"
          )
            | Full changes on GitHub

            image-icon-version-target(
              class="c-section-changelog-versions__version-target-icon"
            )

        .c-section-changelog-versions__changelog(
          v-for="changes, changesGroup in version.changelog"
          :key="'changelog_' + version.version + '_' + changesGroup"
        )
          h6.c-section-changelog-versions__changelog-group.u-title.u-semibold
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
import ImageIconVersionTarget from "@/assets/images/components/section/changelog/SectionChangelogVersions/icon-version-target.svg?component";

// CONSTANTS
const VERSIONED_PLATFORMS = {
  macos: "macOS",
  windows: "Windows",
  linux: "Linux"
};

export default {
  name: "SectionChangelogVersions",

  components: { ImageIconVersionTarget },

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
        const _platforms = version.platforms || {};

        // Append all dropdown items
        const _dropdownItems = [];

        for (const _platform in _platforms) {
          const _architectures = _platforms[_platform];

          this.downloadUrls(_platform, _architectures, _version).forEach(
            downloadUrl => {
              _dropdownItems.push({
                id: _platform,

                title: `${
                  VERSIONED_PLATFORMS[_platform] || _platform
                } v${_version} (${downloadUrl.platform})`,

                target: downloadUrl.target
              });
            }
          );

          _versionDropdowns[_version] = _dropdownItems;
        }
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
     * Generates download URLs for platform and version
     * @public
     * @param  {string} platform
     * @param  {object} architectures
     * @param  {string} version
     * @return {string} Download URL
     */
    downloadUrls(platform, architectures, version) {
      // Acquire file extension (based on platform)
      let _extension;

      switch (platform) {
        case "macos": {
          _extension = "dmg";

          break;
        }

        case "windows": {
          _extension = "msi";

          break;
        }

        default: {
          _extension = "zip";
        }
      }

      // Generate download URLs
      return architectures.map(architecture => {
        const _downloadUrl = this.$filters.formatDownloadUrl(
          version,
          platform,
          _extension,
          this.$config.public.downloads.app.architectures[architecture]
        );

        return {
          platform: _downloadUrl.name,
          target: _downloadUrl.url
        };
      });
    },

    /**
     * Generates full changes URL for version
     * @public
     * @param  {string} version
     * @return {string} Full changes URL
     */
    fullChangesUrl(version) {
      return (
        `${this.$config.public.url.github_prose}/` +
        `${this.$config.public.downloads.app.project}/releases/tag/${version}`
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

#{$c} {
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
        color: $color-base-grey-dark;
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
        left: -8px;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        transition: opacity 75ms linear;
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
  #{$c} {
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
