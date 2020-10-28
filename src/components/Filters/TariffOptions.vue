<template>
  <v-card>
    <v-row class="pa-3">
      <v-col cols="12"><h3>Опции тарифа</h3></v-col>
      <v-col cols="12">
        <v-checkbox class="ma-0 pa-0" color="accent" label="Только прямые"/>
        <v-checkbox class="ma-0 pa-0" color="accent" label="Только c багажом"/>
        <v-checkbox class="ma-0 pa-0" color="accent" label="Только возвратные"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TariffOptions"
}
</script>

<style scoped>

</style>
