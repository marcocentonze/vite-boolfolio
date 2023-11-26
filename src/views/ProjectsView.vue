

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsView',
    components: {
     ProjectCard,
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
<div class="container">
  <h1 class="text-danger text-center py-3">All my projects:</h1>
</div>

<ProjectCard></ProjectCard>


  </template>


<style>
.text-style {
  color: white; 
  text-shadow: 2px 2px 4px #000000; 
}
</style>