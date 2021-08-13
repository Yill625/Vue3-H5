import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import 'vant/es/button/style'
import Button from 'vant/es/button'
const app = createApp(App)

app.component(Button.name, Button)

app.mount('#app')
