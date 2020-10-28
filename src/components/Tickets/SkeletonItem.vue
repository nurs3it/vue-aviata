<template>
  <v-skeleton-loader
      ref="skeleton"
      transition="scale-transition"
      :tile="false"
      class="mx-auto"
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
