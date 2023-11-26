

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

   <div class="p-5 bg-light rounded-3 custom-jumbo-img">
    <div class="container-fluid py-5 text-white">
      <h1 class="display-5 fw-bold text-style">My Portfolio</h1>
      <p class="col-md-8 fs-4 text-style">This is my portfolio where you will find both front-end and back-end projects for about the last 5 months.</p>
      <button class="btn btn-primary btn-lg text-style jumbo-btn" type="button">Discover more!</button>
    </div>
  </div>
 
</template>


<style>
.custom-jumbo-img {
  background-image: url('../assets/images/banner-portfolio.png');
  background-size: cover;
  background-position: center;
  height: 500px;
}

.text-style {
  color: white; 
  text-shadow: 2px 2px 4px #000000; 
}

.jumbo-btn {
  transition: 0.3s ease;
  background: linear-gradient(to right, #20bf6b, #01baef); /* Gradiente da verde acqua a blu */
  color: white; /* Colore del testo */
  border-radius: 5px; /* Angoli arrotondati */
  padding: 10px 20px; /* Spaziatura */
  border: none; /* Nessun bordo */
}

.jumbo-btn:hover {
  transform: scale(1.05); /* Ingrandimento leggero al passaggio del mouse */
  background: linear-gradient(to left, #20bf6b, #01baef); /* Cambio direzione gradiente al passaggio del mouse */
}

</style>