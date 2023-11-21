<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
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
    },
    goToProject(slug) {
  this.$router.push({ name: 'SingleProjectView', params: { slug: slug } });
}
  },

  mounted() {
    this.getProjects();
  }

}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="project in projects.data">
          <div class="card shadow w-100">
            <img :src="project.cover_image" class="card-img-top" :alt="project.title">
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text">{{ project.description }}</p>

              <div class="card-links d-flex justify-content-between">
                <div>
                  <a :href="project.github_link" class="card-link btn btn-dark">
                    <i class="fa-brands fa-github"></i> GitHub
                  </a>
                  <a :href="project.website_link" class="card-link btn" style="background-color: #e9ecef">
                    <i class="fas fa-globe" style="color:#007bff"></i> Website
                  </a>
                </div>
                <button class="btn btn-primary" @click="goToProject(project.slug)">Show</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped></style>
