import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Form, Field, Toast } from 'vant'

import 'lib-flexible/flexible'
import './assets/iconfont/iconfont.css'




createApp(App)
.use(Button)
.use(store)
.use(router)
.use(Form)
.use(Field)
.use(Toast)
.mount('#app')

