import "./assets/main.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import DataV from '@kjgl77/datav-vue3'

const app = createApp(App)

app.use(createPinia())
app.use(DataV);


app.mount('#app')
