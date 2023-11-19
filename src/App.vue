<script>
import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios';

export default {
  name: 'App',
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
  <!-- navbar -->
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <!-- Pulsante Admin -->
          <div class="ms-auto">
            <a href="http://127.0.0.1:8000/" class="btn btn-primary">Admin</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <!-- jumbotron -->

  <div class="p-5 mb-4 bg-light rounded-3 custom-jumbo-img">
    <div class="container-fluid py-5 text-white">
      <h1 class="display-5 fw-bold">My Portfolio</h1>
      <p class="col-md-8 fs-4">This is my portfolio where you will find both front-end and back-end projects for about the last 5 months.</p>
      <button class="btn btn-primary btn-lg" type="button">Discover more!</button>
    </div>
  </div>
 
  <!-- cards -->
 <ProjectCard></ProjectCard>
  <!-- footer -->
  

  <footer class="bg-dark text-white pt-4">
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left">
        <!-- First column -->
        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold ">About Me</h5>
          <p>I am a passionate Junior Full Stack Web Developer, committed to crafting unique and responsive web solutions.
            This portfolio is all about my adventure with Boolean, diving into loads of cool projects. It's where I got to
            really play around with and sharpen my skills in both front-end and back-end tech. Check out what I've been up
            to!</p>
        </div>

        <!-- Second column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Projects</h5>
          <p><a href="#!" class="text-white">Project 1</a></p>
          <p><a href="#!" class="text-white">Project 2</a></p>
          <p><a href="#!" class="text-white">Project 3</a></p>
          <p><a href="#!" class="text-white">Project 4</a></p>
        </div>

        <!-- Third column -->
        <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>
          <p><i class="fas fa-home mr-3"></i> Lecce</p>
          <p><i class="fas fa-envelope mr-3"></i> marco.centonze27@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 123 32 23 531</p>

        </div>
      </div>

      <hr class="mb-4">

      <!-- Social media links -->
      <div class="row align-items-center">
        <div class="col-md-7 col-lg-8">
          <p>&copy; 2023 Marco Centonze. All Rights Reserved.</p>
        </div>

        <div class="col-md-5 col-lg-4">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                    class="fab fa-facebook-f"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                    class="fab fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                    class="fab fa-instagram"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="btn-floating btn-sm text-white" style="font-size: 23px;"><i
                    class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.custom-jumbo-img {
  background-image: url('./assets/images/jumbotron.png');
  background-size: cover;
  background-position: center;
  height: 500px;
}
</style>
