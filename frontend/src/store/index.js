import { createStore } from "vuex";

import axios from "axios";
import router from "../router";

const auth = {
  namespaced: true,
  state: { user: {}, url: "http://localhost:8000/api" },
  getters: {},
  mutations: {},
  actions: {
    loginData({ state }, user) {
      axios
        .post(`${state.url}/auth/login`, user)
        .then((res) => {
          router.push({ name: "home" });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.user.status);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    registerData({ state }, user) {
      axios
        .post(`${state.url}/auth/register`, user)
        .then((res) => {
          router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
};

export default createStore({
  modules: { auth: auth },
});
