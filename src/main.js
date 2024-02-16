import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather'

const app = createApp(App)

app.component(VueFeather.name, VueFeather)
app.use(router).mount('#app')
