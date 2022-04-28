import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Global
import global from "./global";

library.add(fas);

const app = createApp(App);
app.use(router);
app.use(global);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
