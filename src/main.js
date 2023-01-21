import { createApp } from 'vue'
import './assets/styles/css/styles.css'
import store from "./store/index.js";
import router from "./router/index.js";
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
