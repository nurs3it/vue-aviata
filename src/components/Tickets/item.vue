<template>
  <v-card elevation="2" class="pa-0">
    <v-row class="tickets__item">
      <v-col class="pa-5" cols="9"></v-col>
      <v-col class="pa-5 secondary-background-color" cols="3">
        <v-row no-gutters class="flex-column pa-0 ma-0">
          <v-col cols="12" class="pa-0 ma-0 mb-3"><h3 align="center">540 000</h3></v-col>
          <v-col cols="12" class="pa-0 ma-0 mb-3">
            <v-btn block color="accent">
              Выбрать
            </v-btn>
          </v-col>
          <v-col cols="12" class="pa-0 ma-0">
            <p align="center" class="text--secondary caption">
              Цена за всех пассажиров
            </p>
          </v-col>
          <v-col cols="12" class="pa-0 ma-0 d-flex align-center">
            <span class="x-small-caption">
              Нет багажа
            </span>
            <v-btn
                text
                x-small
                color="primary"
            >
              + Добавить богаж
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TicketsItem"
}
</script>

<style scoped lang="scss">
.tickets__item {
  min-height: 100px;
  height: max-content;
}
</style>