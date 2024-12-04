
//import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'

const app = createApp(App)
app.component( 'TheHeader',TheHeader)

app.mount('#app')


//createApp(App).mount('#app')
