import { createApp } from 'vue'
import { VueEditor } from "vue2-editor";
import App from './App.vue'
import store from '../src/store/index.js'
import router from './router/index.js'
import './style.css'


createApp(App).use(app).use(VueEditor).use(store).use(router).mount('#app')
