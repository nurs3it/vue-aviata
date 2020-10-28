<template>
  <v-row class="width-100">
    <v-col cols="12" class="pt-0">
      <TariffOptions/>
    </v-col>
    <v-col cols="12">
      <Airlines/>
    </v-col>
    <v-col cols="12"><a class="dashed-link">Сбросить все фильтры</a></v-col>
  </v-row>
</template>

<script>
import TariffOptions from "@/components/Filters/TariffOptions";
import Airlines from "@/components/Filters/Airlines";

export default {
  name: "Filters",
  components: {Airlines, TariffOptions}
}
</script>

<style scoped>

</style>
