import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#5763B3",
        secondary: "#EAF0FA",
        accent: colors.lightGreen,
      },
    },
  },
};

export default new Vuetify(opts);
