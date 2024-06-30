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

<script setup>
// CONSTANTS
const USE_CASES = [
  {
    slug: "developers",
    title: "Developers",
    description:
      "Collaborate and innovate on open source projects with like-minded " +
      "developers.",
    url: "/usecases/developers/",
    media: "/usecases/developers/banner.webp"
  },

  {
    slug: "remote-teams",
    title: "Remote Teams",
    description:
      "Know for certain who you’re talking to even if you’ve never met IRL.",
    url: "/usecases/remote-teams/",
    media: "/usecases/remote-teams/banner.webp"
  },

  {
    slug: "non-profits",
    title: "Non Profits",
    description:
      "Communicate efficiently even in low bandwidth regions of the world.",
    url: "/usecases/non-profits/",
    media: "/usecases/non-profits/banner.webp"
  },

  {
    slug: "web3",
    title: "Web3",
    description:
      "Prevent scams, spam, and other unwanted interactions on your server.",
    url: "/usecases/web3/",
    media: "/usecases/web3/banner.webp"
  }
];

definePageMeta({
  layout: "simple"
});

const _route = useRoute();

// Acquire use case page
const { data: useCase } = await useAsyncData(async () => {
  return await queryContent("usecases", _route.params.case).findOne();
});

// Article does not exist?
if (useCase.value === null) {
  throw createError({ statusCode: 404, statusMessage: "Use case not found" });
}

// Stamp use case with its slug (from path)
useCase.value.slug = useCase.value._path.split("/").slice(-1)[0];

// Acquire other use cases
const otherCases = USE_CASES.filter(
  otherCase => otherCase.slug !== _route.params.case
);

// Set page title & metadata
useHead({
  title: useCase.value.overline,

  meta: [
    {
      hid: "description",
      name: "description",
      content: useCase.value.metaDescription
    }
  ]
});
</script>
