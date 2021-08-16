import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import router from './router'
import installVant from './vant'
const app = createApp(App)
app.use(router)
installVant(app).mount('#app')
