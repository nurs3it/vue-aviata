<template>
  <v-row no-gutters class="height-100">
    <v-col cols="12" class="mt-1">
      <v-row>
        <v-col class="align-center d-flex" cols="3">
          <LogoAirline :ticket="ticket" />
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
                  <img width="100%" src="../../../assets/icons/hr.png" alt="hr">
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
      <LinksActions :ticket="ticket" />
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";
import {TicketMxn} from "@/mixins/TicketMxn";
import LogoAirline from "@/components/Tickets/Item/LogoAirline";
import LinksActions from "@/components/Tickets/Item/LinksActions";

export default {
  name: "Way",
  components: {LinksActions, LogoAirline},
  mixins: [TicketMxn],
  computed: {
    ...mapState(["airlines"]),
  }
}
</script>

<style scoped>

</style>
