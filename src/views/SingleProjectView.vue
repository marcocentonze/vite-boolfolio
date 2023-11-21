<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            project: null,
            response: false,
            
        }
    },
    mounted() {
        axios.get(this.base_url + 'api/projects/' + this.$route.params.slug) 
            .then(response => {
                if (response.data.success) {
                    this.project = response.data.result; 
                    this.response = true;
                } else {
                    this.errorMessage = response.data.result; // messaggio di errore dall'API
                }
            })
            .catch(err => {
                console.error(err);
                this.errorMessage = 'Error'; 
            });
    }
}
</script>


<template>
    <div v-if="response">
       
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/projects">Projects</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ project.title }}</li>
            </ol>
        </nav>

        <div class="project-details p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <div class="row">
                    <!-- Dettagli del Progetto -->
                    <div class="col-lg-8 col-md-12">
                        <h1 class="display-5 fw-bold">{{ project.title }}</h1>
                        <span>{{ project.type.name }}</span>
                        <p class="fs-4">{{ project.content }}</p>
                        <!-- Tecnologie -->
                        <div class="technologies d-flex justify-content-center">
                            <div class="badge rounded-pill text-bg-primary mx-1"
                                 v-for="technology in project.technologies">
                                {{ technology.name }}
                            </div>
                        </div>
                    </div>
                    <!-- Immagine del Project -->
                    <div class="col-lg-4 col-md-12">
                        <img class="w-100 m-auto" :src="project.cover_image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <!-- Messaggio di errore-->
        <h1>Ops, something didn't work</h1> 
        <p>Unable to load project details. Please <a href="/projects">go back</a> and try again.</p>
    </div>
</template>


<style></style>