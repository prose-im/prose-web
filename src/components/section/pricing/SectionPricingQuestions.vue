<!--
 * This file is part of prose-web
 *
 * Copyright 2024, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-pricing-questions
  page-wrapper
    .c-section-pricing-questions__inner
      base-descripted-title(
        level="medium"
        class="c-section-pricing-questions__title"
      )
        template(
          v-slot:title
        )
          | Frequently asked questions

        template(
          v-slot:description
        )
          p
            | Still having questions?

            base-space(
              :repeat="2"
            )

            nuxt-link(
              to="/contact/"
              class="c-section-pricing-questions__link u-medium"
            )
              | Ask us here

      base-expandable(
        :entries="expandableEntries"
        class="c-section-pricing-questions__expandable"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionPricingQuestions",

  data() {
    return {
      // --> DATA <--

      expandableEntries: [
        {
          title: "Can I pay on a monthly basis?",
          content:
            "Yes! It's possible, although you will not benefit from the 20% annual billing discount."
        },

        {
          title: "Can I migrate between Cloud & self-hosted?",

          content:
            "Yes, you can export your whole server data in a single backup file from your Prose Admin Dashboard. Then, you can import it in your new Prose server. You can also use those exported files to keep an offline backup of your data."
        },

        {
          title: "Is VAT included in prices?",

          content:
            "VAT is not included in the price. Since we bill from an EU company, we will apply VAT based on the country you live in. If you are an EU company, make sure to provide a VAT number in your billing settings. If you live outside of the EU, no VAT will be added to your invoices."
        },

        {
          title: "What is your refund policy?",

          content:
            "We can refund any paid subscription within the 1st month after it has been paid, whether it is a monthly or yearly subscription. Please contact us on support to discuss the possibility of getting a refund."
        },

        {
          title: "Do you offer discounts for NGOs?",

          content:
            "We do offer discounts of up to 50% to NGOs and some non-profits. Please contact us on support to check if you are eligible."
        },

        {
          title: "Is there a limit on sent messages and files?",

          content:
            "There are absolutely no limits on sent messages and files. However, you can enforce limits on data expiration in your Prose Admin Dashboard. Note that if you self-host Prose, then you might be limited by the disk capacity of your server."
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
$c: ".c-section-pricing-questions";

#{$c} {
  #{$c}__inner {
    display: flex;
  }

  #{$c}__title {
    max-width: 40%;
    margin-top: 18px;
    padding-right: 80px;

    #{$c}__link {
      text-decoration: underline;
    }
  }

  #{$c}__expandable {
    flex: 1;
  }
}
</style>
