

<script>
import axios from 'axios';
export default {
    name: 'HomeView',
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
    <div class="container text-center mb-5">
        <h2 class="text-primary mb-3 text-style">Hey there.</h2>
        <h2 class="text-style">Welcome to my Portfolio</h2>
        <h4 class="mt-4 text-style">
            I will show you what I have learned in these 5 months with Boolean, experimenting with both front-end and
            back-end technologies.
        </h4>
    </div>

    <div class="container">
        <div class="row">
            <!-- Front-End Technologies -->
            <div class="col-md-6">
                <h2 class="mb-4 text-style text-danger">Front-End Technologies</h2>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-html5 icon-html"></i> HTML</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-css3-alt icon-css"></i> CSS/SCSS</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-bootstrap icon-bootstrap"></i> Bootstrap</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-js-square icon-javascript"></i> JavaScript</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-vuejs icon-vuejs"></i> Vue.js</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743" style="width: 18px; height: auto;" alt="Vite Logo"> Vite</h5>
                    </div>
                </div>

            </div>

            <!-- Back-End Technologies -->
            <div class="col-md-6">
                <h2 class="mb-4 text-style text-danger">Back-End Technologies</h2>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-php icon-php"></i> PHP</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fab fa-laravel icon-laravel"></i> Laravel</h5>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fas fa-database icon-mysql"></i> MySQL</h5>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<style>
/* icon colors */
.icon-html {
    color: #E34F26;
}

.icon-css {
    color: #1572B6;
}

.icon-bootstrap {
    color: #7952B3;
}

.icon-javascript {
    color: #F7DF1E;
}

.icon-vuejs {
    color: #4FC08D;
}

.icon-php {
    color: #777BB4;
}

.icon-laravel {
    color: #FF2D20;
}

.icon-mysql {
    color: #4479A1;
}
.text-style {
  color: white; 
  text-shadow: 2px 2px 4px #000000; 
}
</style>