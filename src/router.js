import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level ocode-aplitting
      // this generates a separate chunk (about.[hash].js) fro this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/** webpackChunkName: 'about' */ "./views/About.vue")
    }
  ]
});
