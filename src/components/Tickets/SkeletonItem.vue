<template>
  <v-skeleton-loader
      ref="skeleton"
      :tile="false"
      class="pa-0 ma-0 width-100"
      max-width="100%"
      max-height="190px"
      type="card"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: "SkeletonItem"
}
</script>
