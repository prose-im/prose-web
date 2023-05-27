<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
    TEMPLATE
    ********************************************************************** -->

<template lang="pug">
.p-use-case
    section-use-cases-main(
      :use-case="useCase"
      class="p-cases-index__main"
    )

    section-use-cases-bento(
      :use-case="useCase"
    )

    section-use-cases-tabs(
      :use-case="useCase"
    )

    section-use-cases-discover(
      :other-cases="otherCases"
    )

</template>

<!-- **********************************************************************
    SCRIPT
    ********************************************************************** -->

<script>
// CONSTANTS
const USE_CASES = [
  {
    slug: "developers",
    title: "Developers",
    description:
      "Collaborate and innovate on open source projects with like-minded " +
      "developers.",
    url: "/use-cases/developers/",

    media: require("~/assets/images/components/section/use-cases/" +
      "SectionUseCasesDiscover/developers.webp")
  },

  {
    slug: "remote-teams",
    title: "Remote Teams",
    description:
      "Know for certain who you’re talking to even if you’ve never met IRL.",
    url: "/use-cases/remote-teams/",

    media: require("~/assets/images/components/section/use-cases/" +
      "SectionUseCasesDiscover/remote-teams.webp")
  },

  {
    slug: "non-profits",
    title: "Non Profits",
    description:
      "Communicate efficiently even in low bandwidth regions of the world.",
    url: "/use-cases/non-profits/",

    media: require("~/assets/images/components/section/use-cases/" +
      "SectionUseCasesDiscover/non-profits.webp")
  },

  {
    slug: "web3",
    title: "Web3",
    description:
      "Prevent scams, spam, and other unwanted interactions on your server.",
    url: "/use-cases/web3/",

    media: require("~/assets/images/components/section/use-cases/" +
      "SectionUseCasesDiscover/web3.webp")
  }
];

export default {
  name: "UseCasesCasePage",
  layout: "simple",

  validate({ params }) {
    // Case is set, but not valid?
    const _useCase =
      USE_CASES.find(useCase => useCase.slug === params.case) || null;

    if (_useCase === null) {
      return false;
    }

    // Page parameters are valid
    return true;
  },

  async asyncData({ $content, params, error }) {
    // Fetch content for selected case
    const _case = await $content("use-cases", params.case)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const _otherCases = USE_CASES.filter(
      useCase => useCase.slug !== params.case
    );

    return { useCase: _case, otherCases: _otherCases };
  },

  head() {
    return {
      title: `${this.useCase.overline}`,
      meta: [
        {
          hid: "description",
          name: "description",

          content: `${this.useCase.metaDescription}`
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
$c: ".p-use-case";
</style>
