export default {
  install(app, options) {
    app.config.globalProperties.url = "http://localhost:8000/api";
  },
};
