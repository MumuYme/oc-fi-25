import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store.js'
import './style.css'
import '@tinymomentum/liquid-glass-vue/dist/liquid-glass-vue.css'

// vue-gtag をインポート
import VueGtag from 'vue-gtag'

// アプリ作成
const app = createApp(App)

// vue-gtagをrouterと共に設定（GA4用）
app.use(VueGtag, {
  config: { id: 'G-JKFCXERMCK' }  // ← ここに **実際のGA4測定ID（G-で始まる）** を入力
}, router)

app.use(store)
app.use(router)
app.mount('#app')
