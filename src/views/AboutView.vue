

<script>
import axios from 'axios';
export default {
    name: 'AboutView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            projects_api: 'api/projects',
            project_latest: '/latest',
            projects: [],
            url_latest: null,
            latest_projects:[],
        }
    },
    methods: {
        getLatest() {
        const url_latest = this.base_url + this.projects_api + this.project_latest;
        axios
            .get(url_latest)
            .then(response => {
                this.latest_projects = response.data.result;
                console.log('LATEST PROJECTS:', this.latest_projects);
            }).catch(err => {
                console.error(err);
            })
    },
    getCoverImageUrl(imagePath) {
            if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
                // Se il percorso inizia con 'http' o / lo usa
                return imagePath;
            } else {
                // Altrimenti, aggiunge 'this.base_url + 'storage/''
                return this.base_url + 'storage/' + imagePath;
            }
        }
    },
    mounted() {
        this.getLatest();
    }
}
</script>


<template> 
<div class="container">
    <div class="text-style">
        <h2>About me:</h2>
        <h2>Lorem</h2>
        <h2>Lorem</h2>
        <h2>Lorem</h2>
        <h2>Lorem</h2>
    </div>
    
    <div class="row">
      <h2 class="text-style text-danger text-center">My latest projects:</h2>
      <div class="col-md-4 mb-4" v-for="project in latest_projects" :key="project.id">
        <div class="card shadow h-100"> 
          <img :src="getCoverImageUrl(project.cover_image)" class="card-img-top" :alt="project.title" style="width: 414px; height: 276px;">
          <div class="card-body d-flex flex-column justify-content-between"> 
            <div>
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text">{{ project.description }}</p>
            </div>
            <div class="mt-auto pt-3"> 
              <a :href="project.github_link" class="card-link btn btn-dark">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
              <a :href="project.website_link" class="card-link btn" style="background-color: #e9ecef">
                <i class="fas fa-globe" style="color:#007bff"></i> Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>


<style>
.text-style {
  color: white; 
  text-shadow: 2px 2px 4px #000000; 
}
</style>