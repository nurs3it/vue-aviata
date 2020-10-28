<template>
  <v-card elevation="2" class="pa-0">
    <v-row class="tickets__item">
      <v-col class="pa-5 pl-16 pr-16" cols="9">
        <v-row no-gutters class="height-100">
          <v-col cols="12" class="mt-5">
            <v-row>
              <v-col class="align-center d-flex" cols="3">
                <img width="30" height="30" :src="`https://aviata.kz/static/airline-logos/80x80/${ticket.validating_carrier}.png`" alt="icon">
                <h5 class="ml-2">{{ airlines[ticket.validating_carrier] }}</h5>
              </v-col>
              <v-col class="align-center d-flex" cols="9">
                <v-row>
                  <v-col cols="3" class="d-flex justify-center align-center flex-column">
                    <small class="pa-0 ma-0">25 ноя, вс</small>
                    <h2 class="pa-0 ma-0">23:25</h2>
                  </v-col>
                  <v-col cols="6" class="d-flex justify-center align-center">
                    <v-row no-gutters>
                      <v-col cols="12" class="caption d-flex justify-center"><span>4 ч 20 м</span></v-col>
                      <v-col cols="12" class="d-flex justify-center way-map">
                        <span class="way-map__first caption text--disabled">ALA</span>
                        <img width="100%" src="../../assets/icons/hr.png" alt="hr">
                        <span class="way-map__second caption text--disabled">NQZ</span>
                      </v-col>
                      <v-col cols="12" class="caption d-flex justify-center orange--text"><span>через Шымкент, 1 ч 50 м</span>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="d-flex justify-center align-center flex-column">
                    <small class="pa-0 ma-0">25 ноя, вс</small>
                    <h2 class="pa-0 ma-0">03:45</h2>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="mt-auto mb-0 d-flex">
            <a
                color="secondary"
                class="text-decoration-none dashed-link"
            >Детали перетела</a>
            <a
                color="secondary"
                class="text-decoration-none ml-5 dashed-link"
            >Условия тарифа</a>
            <span class="ma-0 ml-5 text--secondary d-flex align-center">
              <img width="20" height="20" src="../../assets/icons/irrevocable.png"
                   alt="невозвартный"><span>невозвартный</span>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-5 secondary-background-color" cols="3">
        <v-row no-gutters class="flex-column pa-0 ma-0">
          <v-col cols="12" class="pa-0 ma-0 mb-3"><h3 align="center">{{ `${ticket.price} ${ticket.currency}` }}</h3></v-col>
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
import { mapState } from "vuex"
export default {
  name: "TicketsItem",
  props: ["ticket"],
  computed: {
    ...mapState(["airlines"])
  }
}
</script>

<style scoped lang="scss">
.tickets__item {
  min-height: 100px;
  height: max-content;
  .way-map {
    position: relative;
    &__first, &__second {
      position: absolute;
    }
    &__first {
      top: -20px;
      left: 0;
    }
    &__second {
      top: -20px;
      right: 0;
    }
  }
}
</style>
