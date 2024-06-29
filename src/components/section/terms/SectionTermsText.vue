<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-terms-text
  page-wrapper
    .c-section-terms-text__sections(
      v-if="sections.length > 0"
    )
      .c-section-terms-text__section(
        v-for="section, sectionIndex in sections"
        :key="'section_' + sectionIndex"
      )
        .c-section-terms-text__title.u-title.u-medium
          | {{ (sectionIndex + 1) }}.

          base-space(
            :repeat="2"
          )

          | {{ section.title }}

        .c-section-terms-text__paragraphs(
          v-if="section.paragraphs.length > 0"
        )
          p(
            v-for="paragraph, paragraphIndex in section.paragraphs"
            :key="'section_' + sectionIndex + '_paragraph_' + paragraphIndex"
            class="c-section-terms-text__paragraph"
          )
            | {{ paragraph }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionTermsText",

  data() {
    return {
      // --> DATA <--

      sections: [
        {
          title: "Terms",

          paragraphs: [
            `By accessing the website at ${this.$config.url.prose_web}, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.`
          ]
        },

        {
          title: "Use License",

          paragraphs: [
            "Permission is granted to temporarily download one copy of the materials (information or software) on Prose's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",

            "— Modify or copy the materials;",
            "— Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);",
            "— Attempt to decompile or reverse engineer any software contained on Prose's website;",
            "— Remove any copyright or other proprietary notations from the materials;",
            "— Transfer the materials to another person or 'mirror' the materials on any other server.",

            "This license shall automatically terminate if you violate any of these restrictions and may be terminated by Prose at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format."
          ]
        },

        {
          title: "Disclaimer",

          paragraphs: [
            "The materials on Prose's website are provided on an 'as is' basis. Prose makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",

            "Further, Prose does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
          ]
        },

        {
          title: "Limitations",

          paragraphs: [
            "In no event shall Prose or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prose's website, even if Prose or a Prose authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
          ]
        },

        {
          title: "Accuracy of Materials",

          paragraphs: [
            "The materials appearing on Prose's website could include technical, typographical, or photographic errors. Prose does not warrant that any of the materials on its website are accurate, complete or current. Prose may make changes to the materials contained on its website at any time without notice. However Prose does not make any commitment to update the materials."
          ]
        },

        {
          title: "Links",

          paragraphs: [
            "Prose has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Prose of the site. Use of any such linked website is at the user's own risk."
          ]
        },

        {
          title: "Modifications",

          paragraphs: [
            "Prose may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
          ]
        },

        {
          title: "Governing Law",

          paragraphs: [
            "These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
          ]
        },

        {
          title: "Privacy Policy",

          paragraphs: [
            "Prose Cloud user data is safely stored in Europe, and may be replicated across different countries within the EU. We do not transfer user data outside of the EU. In the event you are hosting a Prose Pod server, then this privacy policy does not apply as we are not bound to it: you are responsible for the data that your Prose server hosts, as well as any data leak due to server misconfiguration, security vulnerabilities or failure to keep your Prose Pod up-to-date.",

            "Here's what we do to protect data privacy:",

            "— Before or at the time of collecting personal information, we will identify the purposes for which information is being collected;",
            "— We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law;",
            "— We will only retain personal information as long as necessary for the fulfillment of those purposes;",
            "— We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned;",
            "— Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date;",
            "— We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification;",
            "— We will make readily available to customers information about our policies and practices relating to the management of personal information."
          ]
        },

        {
          title: "Data Protection",

          paragraphs: [
            "The term 'personal data' refers to such information which, directly or indirectly, may refer to individuals. Examples of such data are name, image, contact details, behaviour or IP address. Personal data processing refers to any action that we or a third party that we have engaged take with the personal data, such as collection, registration and storage.",

            "Personal data may only be processed for specified and explicitly stated purposes and may not be subsequently processed for any purpose that goes beyond these purposes. At Prose, we process personal data for the purpose of providing the Features. Personal data may also be used for marketing and follow up as well as for our sales and product development with the aim of improving our products and services.",

            "Prose safeguards personal data with a high level of security and has to this end taken appropriate technical and security measures to protect personal data from unauthorised access, amendment, dissemination or destruction."
          ]
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
$c: ".c-section-terms-text";

#{$c} {
  #{$c}__sections {
    width: 100%;
    max-width: 740px;
    margin: 0 auto;

    #{$c}__section {
      padding-bottom: 38px;

      &::after {
        content: "";
        background-color: rgba($color-base-grey-mid, 0.2);
        height: 1px;
        margin: 40px 140px 0;
        display: block;
      }

      &:last-child {
        padding-bottom: 0;

        &::after {
          display: none;
        }
      }
    }
  }

  #{$c}__title {
    color: $color-base-blue-dark;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.18px;
  }

  #{$c}__paragraphs {
    margin-top: 13px;

    #{$c}__paragraph {
      color: $color-black;
      font-size: 15px;
      line-height: 21px;
      text-align: justify;
      margin-bottom: 22px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__sections {
      #{$c}__section {
        &::after {
          margin-left: 46px;
          margin-right: 46px;
        }
      }
    }
  }
}
</style>
