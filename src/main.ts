import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .use(ElementPlus, { zIndex: 800 })
  .mount('#app')
