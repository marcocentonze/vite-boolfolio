<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppJumbo from './components/AppJumbo.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
        ProjectCard,
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
 <AppHeader></AppHeader>

  <!-- jumbotron -->
  <AppJumbo></AppJumbo>
 
  <!-- cards -->
 <ProjectCard></ProjectCard>
 
  <!-- footer -->
  <AppFooter></AppFooter>

</template>

<style>

</style>
