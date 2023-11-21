// 0.Import the createWebHashHistory and createRouter from vue-router
import { createWebHashHistory, createRouter } from "vue-router";

// 1. Define route components.
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactsView from "./views/ContactsView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import App404 from "./views/App404.vue";

// 2. Define some routes
const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/about", name: "About", component: AboutView },

  {
    path: "/Projects/:slug",
    name: "SingleProjectView",
    component: SingleProjectView,
  },
  { path: "/contacts", name: "Contacts", component: ContactsView },
  { path: "/projects", name: "Projects", component: ProjectsView },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: App404 },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});

// export the vue router instance
export { router };
