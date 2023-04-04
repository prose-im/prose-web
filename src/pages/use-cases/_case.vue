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
    section-cases-main(
      class="p-cases-index__main"
      :useCase="useCase"
    )

    section-cases-bento(
      :useCase="useCase"
    )

    section-cases-tabs(
      :useCase="useCase"
    )

    section-discover(
      :useCase="useCase", :otherCases="otherCases"
    )

</template>

<!-- **********************************************************************
    SCRIPT
    ********************************************************************** -->

<script>
const CASE_REGEX = /(developers|web3|non-profits|remote-teams)/;

const USE_CASES = [
  {
    slug: "developers",
    title: "Developers",
    description:
      "Know for certain who you’re talking to even if you’ve never met IRL.",
    url: "/use-cases/developers/",
    media: require("~/assets/images/components/section/use-cases/SectionDiscover/developers.png")
  },
  {
    slug: "remote-teams",
    title: "Remote Teams",
    description:
      "Know for certain who you’re talking to even if you’ve never met IRL.",
    url: "/use-cases/remote-teams/",
    media: require("~/assets/images/components/section/use-cases/SectionDiscover/remote-teams.png")
  },
  {
    slug: "non-profits",
    title: "Non Profits",
    description:
      "Communicate efficiently even in low bandwidth regions of the world.",
    url: "/use-cases/non-profits/",
    media: require("~/assets/images/components/section/use-cases/SectionDiscover/non-profits.png")
  },
  {
    slug: "web3",
    title: "Web3",
    description:
      "Prevent scams, spam, and other unwanted interactions on your server.",
    url: "/use-cases/web3/",
    media: require("~/assets/images/components/section/use-cases/SectionDiscover/web3.png")
  }
];

export default {
  name: "UseCases",
  layout: "usecase",

  validate({ params }) {
    // Case is set, but not valid?
    if (params.case && CASE_REGEX.test(params.case) === false) {
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
      title: `Prose for ${this.useCase.target}`
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
