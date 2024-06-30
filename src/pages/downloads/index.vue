<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.p-downloads-index
  section-downloads-main(
    @download="onMainDownload"
    class="p-downloads-index__main"
  )

  section-downloads-platforms(
    :version="version"
    :matrix="matrix"
    class="p-downloads-index__platforms"
    ref="platforms"
  )

  section-downloads-archive(
    class="p-downloads-index__archive"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
// Set page title
useHead({
  title: "Download Prose apps"
});
</script>

<script>
export default {
  name: "DownloadsIndexPage",

  data() {
    return {
      // --> DATA <--

      version: null,
      matrix: {}
    };
  },

  async mounted() {
    await this.fetchLatest();
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers on main download request
     * @public
     * @param  {string} platform
     * @return {undefined}
     */
    onMainDownload(platform) {
      // Trigger download from parent method (on platforms)
      this.$refs.platforms.downloadFromParent(platform);
    },

    // --> HELPERS <--

    async fetchLatest() {
      // Load update manifest to acquire latest available version
      const _latestUpdate = await $fetch(
        `${this.$config.public.url.prose_files}/apps/updates/latest.json`
      );

      this.version = _latestUpdate.version;
      this.matrix = _latestUpdate.platforms;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-downloads-index";

#{$c} {
  #{$c}__platforms {
    margin-top: 90px;
  }

  #{$c}__archive {
    margin-top: 64px;
  }
}
</style>
