import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Form, Field, Toast, Swipe, SwipeItem,Skeleton, Icon, SwipeCell, ActionBarButton, ActionBarIcon, ActionBar, Divider, Popup, Overlay, Loading, Dialog, ContactCard, AddressEdit, AddressList, CellGroup, Cell, Stepper, Card, CheckboxGroup, Checkbox, SubmitBar, Tabs, Tab, List, PullRefresh,
        } from 'vant'

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


app.use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Divider)
  .use(Popup)
  .use(Overlay)
  .use(Loading)
  .use(Dialog)
  .use(Toast)
  .use(ContactCard)
  .use(Form)
  .use(AddressEdit)
  .use(AddressList)
  .use(Field)
  .use(CellGroup)
  .use(Cell)
  .use(SwipeCell)
  .use(Icon)
  .use(Stepper)
  .use(Card)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Skeleton)
  .use(router)
  .use(store)
  .mount('#app')

