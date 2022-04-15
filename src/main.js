import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

const app = createApp(App)
app.use(store)
app.use(router)

// Globally auto-register Base components
const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  app.component(baseComponentName, baseComponentConfig)
})
app.mount('#app')
