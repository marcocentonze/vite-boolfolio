<script>
export default {
    name: 'App404'
}
</script>

<template>
    <div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-8 m-auto text-center">
                    <h1 class="text-danger">
                        404 Error
                    </h1>
                    <h3 class="text-uppercase">page not found</h3>
                    
                    <router-link class="btn btn-info text-white" :to="{ name: 'Projects' }">back to the
                        projects</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>