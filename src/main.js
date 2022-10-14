import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant'

import 'lib-flexible/flexible'
import './assets/iconfont/iconfont.css'




createApp(App)
.use(Button)
.use(store)
.use(router)
.mount('#app')

