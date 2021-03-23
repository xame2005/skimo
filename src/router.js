import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
