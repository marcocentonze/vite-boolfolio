// 0.Import the createWebHashHistory and createRouter from vue-router
import { createWebHashHistory, createRouter } from "vue-router";

// 1. Define route components.
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from './views/SingleProjectView.vue';

// 2. Define some routes
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  
    {
      path: '/Projects/:slug',
      name: 'SingleProjectView',
      component: SingleProjectView
    },
  { path: "/contacts", component: ContactsView },
  { path: "/projects", component: ProjectsView },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});

// export the vue router instance
export { router };
