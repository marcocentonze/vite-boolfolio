

<script>
    export default {
        name: 'AppJumbo',
        data() {
            return {
      
    }
    },
    methods: {
        
      },
}
</script>


<template>
   <!-- jumbotron -->

   <div class="p-5 mb-4 bg-light rounded-3 custom-jumbo-img">
    <div class="container-fluid py-5 text-white">
      <h1 class="display-5 fw-bold">My Portfolio</h1>
      <p class="col-md-8 fs-4">This is my portfolio where you will find both front-end and back-end projects for about the last 5 months.</p>
      <button class="btn btn-primary btn-lg" type="button">Discover more!</button>
    </div>
  </div>
 
</template>


<style>
.custom-jumbo-img {
  background-image: url('../assets/images/jumbotron.png');
  background-size: cover;
  background-position: center;
  height: 500px;
}
</style>