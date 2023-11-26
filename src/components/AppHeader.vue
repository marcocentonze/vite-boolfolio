

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
      
    }
    },
    methods: {
        
      },
}
</script>


<template>
     <!-- navbar -->
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item px-2">
              <router-link class="nav-link active nav-link-custom" to="/" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></router-link>
            </li>
            <li class="nav-item px-2">
              <router-link class="nav-link nav-link-custom" to="/about">About</router-link>
            </li>

            <li class="nav-item px-2">
              <router-link class="nav-link nav-link-custom" to="/contacts">Contacts</router-link>
            </li>
            
            <li class="nav-item px-2">
              <router-link class="nav-link nav-link-custom" to="/projects">Projects</router-link>
            </li>
           
          </ul>
        
          <!-- Pulsante Admin -->
          <div class="ms-auto">
            <a href="http://127.0.0.1:8000/" class="btn btn-primary btn-primary-custom">Admin</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
.nav-link-custom {
  transition: 0.3s ease;
  background: linear-gradient(to right, #6dd5ed, #2193b0); 
  color: white; 
  border-radius: 5px; 
  padding: 5px 10px; 
}

.nav-link-custom:hover {
  transform: scale(1.05); 
  background: linear-gradient(to left, #6dd5ed, #2193b0); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* style for admin button */
.btn-primary-custom {
  background-color: #ff416c; 
  background-image: linear-gradient(to right, #ff4b2b, #ff416c); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.btn-primary-custom:hover {
  background-image: linear-gradient(to left, #ff4b2b, #ff416c); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>