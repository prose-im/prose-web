<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-section-terms-main
    page-wrapper
      base-title(
        level="small"
        class="c-section-terms-main__title"
      )
        | Terms of Use

        base-space

        span.c-section-terms-main__title-connector.u-light
          | &

        base-space

        | Privacy Policy

      p.c-section-terms-main__subtitle
        | Applies to all Prose online services. Last updated on {{ lastUpdated }}.

      .c-section-terms-main__disclaimer-wrap
        base-disclaimer(
          :raster-scale="0.62"
          raster="stickies"
          class="c-section-terms-main__disclaimer"
        )
          p.c-section-terms-main__disclaimer-line.u-bold
            | The Prose Foundation may revise these terms at any time without notice.

          p.c-section-terms-main__disclaimer-line
            | By using this service you agree to be bound by the current version of these Terms of Use.

          p.c-section-terms-main__disclaimer-line.c-section-terms-main__disclaimer-line--spaced
            span.u-medium
              | Please read these terms of use carefully

            base-space

            | before starting using our software and/or services.
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionTermsMain",

  data() {
    return {
      // --> DATA <--

      lastUpdated: "21st March 2022"
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-terms-main";

.c-section-terms-main {
  text-align: center;

  #{$c}__title {
    #{$c}__title-connector {
      font-size: 0.8em;
      margin: 0 6px;
      opacity: 0.65;
    }
  }

  #{$c}__subtitle {
    font-size: 14.5px;
    color: $color-base-grey-dark;
    line-height: 22px;
    font-style: italic;
    margin-top: 1px;
  }

  #{$c}__disclaimer-wrap {
    margin-top: 46px;
    display: flex;
    justify-content: center;

    #{$c}__disclaimer {
      #{$c}__disclaimer-line {
        &--spaced {
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
