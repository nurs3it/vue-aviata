import _ from "moment";
import {mapState} from "vuex";
export const TicketMxn = {
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
  }
}
