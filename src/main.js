import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store.js'
import './style.css'
// main.js
import '@tinymomentum/liquid-glass-vue/dist/liquid-glass-vue.css'


const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
