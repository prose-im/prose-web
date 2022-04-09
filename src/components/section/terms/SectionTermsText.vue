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
          title: "Purpose",

          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Ac turpis egestas integer eget aliquet nibh praesent tristique. Dui accumsan sit amet nulla facilisi morbi tempus. Interdum posuere lorem ipsum dolor. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Diam maecenas ultricies mi eget. Pretium fusce id velit ut tortor pretium viverra. Leo vel fringilla est ullamcorper eget nulla facilisi. Egestas sed tempus urna et pharetra pharetra massa massa. Mi quis hendrerit dolor magna eget. Eu mi bibendum neque egestas congue quisque egestas. Amet massa vitae tortor condimentum lacinia quis vel. Vitae aliquet nec ullamcorper sit. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Lectus proin nibh nisl condimentum id venenatis a condimentum. Ultricies leo integer malesuada nunc vel. Pharetra vel turpis nunc eget. Ac ut consequat semper viverra nam libero justo laoreet sit.",

            "Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nunc mattis enim ut tellus elementum sagittis vitae. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Aenean vel elit scelerisque mauris pellentesque. Vestibulum lectus mauris ultrices eros in cursus turpis. Pulvinar elementum integer enim neque volutpat. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Volutpat blandit aliquam etiam erat. Sit amet facilisis magna etiam tempor orci eu. Morbi leo urna molestie at elementum eu facilisis."
          ]
        },

        {
          title: "Acceptance of Terms - Changes of Terms",

          paragraphs: [
            "Amet venenatis urna cursus eget nunc. Interdum velit euismod in pellentesque. Luctus venenatis lectus magna fringilla. Purus non enim praesent elementum facilisis leo vel fringilla est. Nulla aliquet enim tortor at auctor urna. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Posuere ac ut consequat semper viverra nam libero. A erat nam at lectus urna duis. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Risus feugiat in ante metus dictum at tempor commodo.",

            "Suspendisse ultrices gravida dictum fusce. Nulla at volutpat diam ut venenatis tellus in. Tellus orci ac auctor augue mauris. Quis hendrerit dolor magna eget est lorem ipsum. Nibh tellus molestie nunc non blandit massa enim. Nec feugiat nisl pretium fusce id velit. Aliquam sem fringilla ut morbi tincidunt augue interdum. Auctor elit sed vulputate mi sit amet mauris commodo. Nulla aliquet porttitor lacus luctus accumsan tortor. Etiam non quam lacus suspendisse faucibus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec."
          ]
        },

        {
          title: "Provisions of and Access to Features",

          paragraphs: [
            "Sit amet purus gravida quis blandit turpis cursus. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Viverra accumsan in nisl nisi scelerisque eu. Id ornare arcu odio ut sem. Diam sit amet nisl suscipit adipiscing bibendum est. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Sed pulvinar proin gravida hendrerit lectus. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Id velit ut tortor pretium viverra suspendisse potenti nullam ac."
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

.c-section-terms-text {
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
      font-size: 14px;
      line-height: 21px;
      text-align: justify;
      margin-bottom: 22px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
