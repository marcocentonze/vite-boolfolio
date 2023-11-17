<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000/',
      projects_api: 'api/projects',
      projects: [],
    }

  },

  methods: {
    getProjects() {
      const url = this.base_url + this.projects_api;
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.result
        })
        .catch(err => {
          console.error(err);
        })
    }
  },

  mounted() {
    this.getProjects();
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
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Custom jumbotron</h1>
      <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous
        versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      <button class="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
  </div>

  <!-- cards -->
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="project in projects.data">
          <div class="card shadow w-100">
            <img
              src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top" alt="Project Image">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped></style>
