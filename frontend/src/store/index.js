import { createStore } from "vuex";

// import window.axios from "window.axios";
import router from "../router";

const auth = {
  namespaced: true,
  state: { user: {}, url: "http://localhost:8000/api" },
  getters: {},
  mutations: {},
  actions: {
    loginData({ state }, user) {
      window.axios
        .post(`${state.url}/auth/login`, user)
        .then((res) => {
          router.push({ name: "home" });
          localStorage.setItem("token", res.data.token);

          window.axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.token}`;

          window.axios.get(`${state.url}/auth/me`).then((res) => {
            localStorage.setItem("username", res.data.nama);
            localStorage.setItem("status", res.data.status);
          });
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    registerData({ state }, user) {
      window.axios
        .post(`${state.url}/auth/register`, user)
        .then((res) => {
          router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
    logoutData({ state }) {
      window.axios
        .post(`${state.url}/auth/logout`)
        .then((res) => {
          localStorage.clear();
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
