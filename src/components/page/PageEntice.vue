<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
  .c-page-entice
    page-wrapper
      .c-page-entice__box
        .c-page-entice__content
          .c-page-entice__content-inner
            h1.c-page-entice__title.u-title.u-bold
              | Get started with Prose for free

            .c-page-entice__text
              p
                | Join a growing decentralized messaging network of 100M+ users.

              p.u-bold
                | Create your server in a few clicks. Invite your team in no more.

            .c-page-entice__actions
              base-button(
                class="c-page-entice__actions"
                right-icon="arrow"
              )
                | Start with Prose

        .c-page-entice__illustration
          .c-page-entice__logo
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageEntice"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-entice";

.c-page-entice {
  background-color: $color-background-primary;
  padding-top: 20px;
  padding-bottom: 120px;

  #{$c}__box {
    background-image: radial-gradient(
        circle at 45% -7.5e-15%,
        rgba(#b3358b, 0.4) 0%,
        rgba(#bf4598, 0.4) 41%,
        rgba($color-white, 0) 223%
      ),
      linear-gradient(
        -55deg,
        rgba($color-white, 0) 0%,
        rgba(#294f94, 0.75) 74%,
        rgba(#051d46, 0.91) 100%
      ),
      linear-gradient(133deg, #3e4d80 0%, #415587 44%, #6edafd 100%);

    min-height: 320px;
    display: flex;
    border-radius: 22px;
  }

  #{$c}__content {
    padding: 0 60px;
    flex: 1;
    display: flex;
    align-items: center;

    #{$c}__content-inner {
      color: $color-white;
      padding-top: 42px;
      padding-bottom: 54px;
    }

    #{$c}__title {
      font-size: 30px;
      letter-spacing: -0.25px;
      line-height: 42px;
    }

    #{$c}__text {
      font-size: 15.5px;
      letter-spacing: -0.15px;
      line-height: 26px;
      text-align: justify;
      margin-top: 20px;
    }

    #{$c}__actions {
      margin-top: 24px;
    }
  }

  #{$c}__illustration {
    width: 35%;
    flex: 0 0 auto;
    position: relative;

    #{$c}__logo {
      position: absolute;
    }
  }
}
</style>
