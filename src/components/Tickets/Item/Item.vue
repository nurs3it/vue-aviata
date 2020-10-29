<template>
  <v-card elevation="2" class="pa-0">
    <v-row class="tickets__item">
      <v-col class="pa-5 pl-8 pl-lg-16 pr-lg-16" cols="9">
        <Way :ticket="ticket" />
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
import Way from "@/components/Tickets/Item/Way";
import {TicketMxn} from "@/mixins/TicketMxn";

export default {
  name: "TicketsItem",
  components: {Way},
  mixins: [TicketMxn],
}
</script>

<style lang="scss">
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
