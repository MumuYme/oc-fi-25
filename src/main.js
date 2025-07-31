import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store.js'
import './style.css'
import VueGtag  from 'vue-gtag-next'
// main.js
import '@tinymomentum/liquid-glass-vue/dist/liquid-glass-vue.css'


const app = createApp(App);

app.use(VueGtag, {
  property: [
    {
      id: 'G-JKFCXERMCK' // ← あなたのGA4測定ID
    }
  ]
})

app.use(store);
app.use(router);
app.mount('#app');
