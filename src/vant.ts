import Button from 'vant/es/button'
import { App } from '@vue/runtime-core'
const installVant = (app: App) => {
  app.component(Button.name, Button)
  return app
}

export default installVant
