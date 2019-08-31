<template>
  <v-app>
      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import "./assets/scss/style.scss";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
