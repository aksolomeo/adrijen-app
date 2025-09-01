import "./assets/main.css";

import { createApp } from "vue";

// * Pinia Store
import { createPinia } from "pinia";

// * i18n
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";

// * Ant Design
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

// * Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en",
	messages: { en },
});

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(Antd);

// * Font Awesome
library.add(fas);
library.add(fab);
library.add(far);
app.component("fa-icon", FontAwesomeIcon);

app.mount("#app");
