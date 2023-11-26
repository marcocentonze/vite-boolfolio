<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {

    return {
      base_url: 'http://127.0.0.1:8000/',
      projects_api: 'api/projects',
      projects: [],
      currentPage: 1,
      totalPages: 0,
      
    }

  },

  methods: {
    getProjects(page = 1) {
      const url = `${this.base_url}${this.projects_api}?page=${page}`;
      axios.get(url)
        .then(response => {
          this.projects = response.data.result;
          this.totalPages = response.data.result.last_page;
          this.currentPage = response.data.result.current_page;
        })
        .catch(err => console.error(err));
    },
    changePage(page) {
      this.getProjects(page);
    },

    goToProject(slug) {
      this.$router.push({ name: 'SingleProjectView', params: { slug: slug } });
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
    this.getProjects(this.currentPage);
  },




}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 d-flex align-items-stretch" v-for="project in projects.data">
          <div class="card shadow w-100">
            <img :src="getCoverImageUrl(project.cover_image)" class="card-img-top" :alt="project.title"
              style="width: 414px; height: 276px;">
            <div class="card-body d-flex flex-column justify-content-between" style="height: 300px;">

              <div>
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ project.description }}</p>
              </div>

              <div class="card-links d-flex justify-content-between">
                <!-- Links e bottoni -->
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
      
      <!-- pagination -->
      <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <!-- // no previus if i am in the first page -->
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </main>

</template>


<style scoped></style>
