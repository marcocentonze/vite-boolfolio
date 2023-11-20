

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
        <a class="navbar-brand text-danger" href="#">Boolfolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/" aria-current="page">Home <span
                  class="visually-hidden">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
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
</template>


<style lang="scss" scoped>

</style>