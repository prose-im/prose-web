<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-compare
  page-wrapper
    base-descripted-title(
      level="medium"
      align="center"
    )
      template(
        v-slot:title
      )
        | Compare our plans

      template(
        v-slot:description
      )
        p
          | See what you get, in details, whether you opt for a free or paid Prose setup.

    base-table(
      :table="tableEntries"
      class="c-section-pricing-compare__table"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionPricingCompare",

  data() {
    return {
      // --> DATA <--

      tableEntries: {
        head: [
          { text: "Community" },
          { text: "Business", badge: { text: "Best", color: "green" } }
        ],

        body: [
          {
            section: null,

            items: [
              [
                { text: "Workspace members" },
                { text: "100 users maximum" },
                { text: "Unlimited users", emphasis: true }
              ],

              [
                { text: "Server hosting" },
                { text: "You host everything yourself" },
                { text: "We host Prose for you", emphasis: true }
              ]
            ]
          },

          {
            section: "App Features",

            items: [
              [
                { text: "Personal messaging (DMs)" },
                { included: true },
                { included: true }
              ],

              [
                { text: "Group messaging (private & public)" },
                { included: true },
                { included: true }
              ],

              [
                { text: "End-to-end encryption" },
                { included: true },
                { included: true }
              ],

              [{ text: "Threads" }, { included: true }, { included: true }],

              [
                { text: "Voice messages" },
                { included: true },
                { included: true }
              ],

              [
                { text: "Audio & Video calls" },
                { text: "Peer-to-peer only" },
                { included: true }
              ],

              [
                { text: "Connect with other teams" },
                { included: true },
                { included: true }
              ]
            ]
          },

          {
            section: "Data Storage",

            items: [
              [
                { text: "Message history storage" },
                { text: "Your server disk size" },
                { text: "Unlimited messages", emphasis: true }
              ],

              [
                { text: "Uploaded files storage" },
                { text: "Your server disk size" },
                { text: "Unlimited data quota", emphasis: true }
              ],

              [
                { text: "Server migration (data export)" },
                { included: true },
                { included: true }
              ],

              [
                { text: "Data residency" },
                { text: "Your server location" },
                { text: "Your choice (EU or US)", emphasis: true }
              ]
            ]
          },

          {
            section: "Advanced Benefits",

            items: [
              [
                { text: "Administration dashboard" },
                { included: true },
                { included: true }
              ],

              [
                { text: "Retention policies" },
                { text: "Not configurable" },
                { text: "Data can be auto-removed", emphasis: true }
              ],

              [
                { text: "Auditing & Reporting" },
                { text: "No audit log" },
                { included: true }
              ],

              [
                { text: "Single Sign-On" },
                { text: "Password login only" },
                { included: true }
              ],

              [
                { text: "File antivirus" },
                { text: "No virus scanning" },
                { included: true }
              ],

              [
                { text: "Custom DNS domain" },
                { included: true },
                { included: true }
              ]
            ]
          }
        ],

        foot: [{ text: "Self-hosted" }, { text: "$5 /user/month" }]
      }
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-pricing-compare";

#{$c} {
  #{$c}__table {
    margin-top: 54px;
  }
}
</style>
