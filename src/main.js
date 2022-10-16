import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Form, Field, Toast, Swipe, SwipeItem,Skeleton, Icon } from 'vant'

import 'lib-flexible/flexible'
import './assets/iconfont/iconfont.css'


const app = createApp(App)

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}


app.use(Button)
  .use(Form)
  .use(Field)
  .use(Swipe)
  .use(SwipeItem)
  .use(Toast)
  .use(Skeleton)
  .use(Icon)
  .use(store)
  .use(router)
  .mount('#app')

