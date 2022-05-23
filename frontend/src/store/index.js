import { createStore } from "vuex";

// Toast Library
import { Eggy } from "@s-r0/eggy-js";

// import window.axios from "window.axios";
import router from "../router";

const auth = {
  namespaced: true,
  state: { user: {}, url: "http://localhost:8000/api", message: "" },
  getters: {},
  mutations: {},
  actions: {
    loginData({ state }, user) {
      window.axios
        .post(`${state.url}/auth/login`, user)
        .then((res) => {
          localStorage.setItem("token", res.data.token);

          window.axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.token}`;

          window.axios.get(`${state.url}/auth/me`).then((res) => {
            localStorage.setItem("role", res.data.status);
            localStorage.setItem("username", res.data.nama);

            router.push({ name: "home" }).then(async () => {
              // Wait for role
              const role = await localStorage.role;
              Eggy({
                title: "Login Success",
                // Display Role
                message: `Logged in as ${role}`,
                type: "success",
                duration: 3000,
              });
            });
          });
        })
        .catch((err) => {
          state.message = err.response.data.message;
          console.log(state.message);
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
