<template>
  <v-card elevation="2" class="pa-0">
    <v-row class="tickets__item">
      <v-col class="pa-5 pl-8 pl-lg-16 pr-lg-16" cols="9">
        <v-row no-gutters class="height-100">
          <v-col cols="12" class="mt-1">
            <v-row>
              <v-col class="align-center d-flex" cols="3">
                <img width="40" height="40"
                     :src="`https://aviata.kz/static/airline-logos/80x80/${ticket.validating_carrier}.png`" alt="icon">
                <h5 class="ml-2">{{ airlines[ticket.validating_carrier] }}</h5>
              </v-col>
              <v-col class="align-center d-flex" cols="9">
                <v-row>
                  <v-col cols="3" class="d-flex justify-center align-center flex-column">
                    <small class="pa-0 ma-0">{{ formatDate(firstPoint.dep_time_iso) }}</small>
                    <h2 class="pa-0 ma-0">{{ formatTime(firstPoint.dep_time_iso) }}</h2>
                  </v-col>
                  <v-col cols="6" class="d-flex justify-center align-center">
                    <v-row no-gutters>
                      <v-col cols="12" class="caption d-flex justify-center"><span>{{ sec2Time() }}</span></v-col>
                      <v-col cols="12" class="d-flex justify-center way-map">
                        <span class="way-map__first caption text--disabled">
                          {{ firstPoint.origin_code }}
                        </span>
                        <img width="100%" src="../../assets/icons/hr.png" alt="hr">
                        <span class="way-map__second caption text--disabled">
                          {{ lastPoint.dest_code }}
                        </span>
                      </v-col>
                      <v-col cols="12" class="caption d-flex flex-column align-center justify-center">
                        <span class="green--text" v-if="ticket.itineraries[0][0].stops === 0">Прямой рейс</span>
                        <template v-else>
                          <span class="orange--text" v-for="(city, index) in allPoints"
                                :key="`city-${index}`">
                            <template v-if="index !== allPoints.length - 1">
                              {{ `${index === 0 ? 'через' : 'затем'} ${city.airport_dest}, 1 ч 50 м` }}
                            </template>
                          </span>
                        </template>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="3" class="d-flex justify-center align-center flex-column">
                    <small class="pa-0 ma-0">{{ formatDate(lastPoint.arr_time_iso) }}</small>
                    <h2 class="pa-0 ma-0">{{ formatTime(lastPoint.arr_time_iso) }}</h2>
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
            <span class="ma-0 ml-5 text--secondary d-flex align-center" v-if="!ticket.refundable">
              <img width="20" height="20" src="../../assets/icons/irrevocable.png"
                   alt="невозвартный"><span>невозвратный</span>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-5 pa-sm-3 pa-lg-5 secondary-background-color tickets__item__luggage" cols="3">
        <v-row no-gutters class="flex-column pa-0 ma-0">
          <v-col cols="12" class="pa-0 ma-0 mb-3"><h3 align="center">{{ `${ticket.price} ${ticket.currency}` }}</h3>
          </v-col>
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
          <v-col cols="12" class="pa-0 ma-0 d-flex align-center tickets__item__luggage__info">
            <span class="x-small-caption mr-1">
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
import {mapState} from "vuex"
import _ from "moment"

export default {
  name: "TicketsItem",
  props: ["ticket"],
  computed: {
    ...mapState(["airlines"]),
    allPoints() {
      return this.ticket.itineraries[0][0].segments
    },
    firstPoint() {
      return this.ticket.itineraries[0][0].segments[0]
    },
    lastPoint() {
      return this.ticket.itineraries[0][0].segments[this.ticket.itineraries[0][0].segments.length - 1]
    }
  },
  methods: {
    sec2Time() {
      let timeInSeconds = this.ticket.best_time;
      let pad = function (num, size) {
            return ('000' + num).slice(size * -1);
          },
          time = parseFloat(timeInSeconds).toFixed(3),
          hours = Math.floor(time / 60 / 60),
          minutes = Math.floor(time / 60) % 60

      return `${pad(hours, 2)} ч ${pad(minutes, 2)} м`
    },
    formatDate(date) {
      _.locale('ru');
      return _(date).format("DD MMM dd");
    },
    formatTime(date) {
      _.locale('ru');
      return _(date).format("LT");
    }
  },
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
