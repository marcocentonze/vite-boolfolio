<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppJumbo from './components/AppJumbo.vue';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppJumbo,

  },
  data() {
    return {

    }

  },

  methods: {

  },

  mounted() {

  }

}
</script>

<template>
  <!-- header -->
  <AppHeader></AppHeader>

  <!-- jumbotron -->
  <AppJumbo></AppJumbo>

  <!-- cards -->
  <main>
    <router-view></router-view>
  </main>


  <!-- footer -->
  <AppFooter></AppFooter>
</template>

<style>
main {
  background-image: url('./assets/images/sfondo-portfolio.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
