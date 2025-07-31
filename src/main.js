import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store.js'
import './style.css'
import { createGtag } from 'vue-gtag'
// main.js
import '@tinymomentum/liquid-glass-vue/dist/liquid-glass-vue.css'


const app = createApp(App);


const gtag = createGtag({
  tagId: "G-JKFCXERMCK"
})

app.use(store);
app.use(router);
app.use(gtag);
app.mount('#app');
