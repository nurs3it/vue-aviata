<template>
  <v-row class="width-100">
    <v-col cols="12" class="pt-0 pb-0">
      <TariffOptions/>
    </v-col>
    <v-col cols="12" class="pb-0">
      <Airlines/>
    </v-col>
    <v-col cols="12"><a @click="resetFilterAirlines" class="dashed-link">Сбросить все фильтры</a></v-col>
  </v-row>
</template>

<script>
import TariffOptions from "@/components/Filters/TariffOptions";
import Airlines from "@/components/Filters/Airlines";
import { mapActions } from "vuex";
export default {
  name: "Filters",
  components: {Airlines, TariffOptions},
  methods: {
    ...mapActions(["resetFilterAirlines"])
  },
}
</script>

<style scoped>

</style>
