import { ConfigProvider, Button } from 'vant'
import { App } from '@vue/runtime-core'
import 'vant/es/button/style'
const installVant = (app: App) => {
  app.component(Button.name, Button)
  app.use(ConfigProvider)
  return app
}

export default installVant
