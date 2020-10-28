<template>
  <v-app id="app">
    <v-main class="main-background-color">
      <v-app-bar elevation="0" class="pa-0 mb-10 white-background-color">
        <HeaderBar />
      </v-app-bar>
      <v-container class="d-flex justify-center align-center flex-column pa-0">
        <MainContent />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import MainContent from "./components/MainContent";
import {mapActions} from "vuex"
export default {
  name: "App",
  components: {MainContent, HeaderBar},
  created() {
    this.init();
  },
  methods: {
    ...mapActions(['init']),
  },
};
</script>

<style lang="scss">
@import "assets/styles/main";
</style>
