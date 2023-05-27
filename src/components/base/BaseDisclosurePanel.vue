<!--
 * This file is part of prose-web
 *
 * Copyright 2022, Prose Foundation
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
transition(
  name="fadeHeight"
  mode="out-in"
)
  slot(
    v-if="state.value"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDisclosurePanel",

  inject: ["state"]
};
</script>

<style lang="scss">
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 300px;
}

.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
