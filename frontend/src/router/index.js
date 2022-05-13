import { createRouter, createWebHistory } from "vue-router";

// Components
import Home from "@/views/Home";
import Login from "@/views/Auth/Login";
import Register from "@/views/Auth/Register";
import Dashboard from "@/views/Dashboard";
import Profile from "@/views/Profile";
import NotFound from "@/views/Action/404";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      auth: true,
      permission: "admin",
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      auth: true,
    },
  },
  {
    path: "/error",
    name: "404",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/error",
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
