import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import 'vant/es/button/style'
import installVant from './vant'
const app = createApp(App)

installVant(app).mount('#app')
