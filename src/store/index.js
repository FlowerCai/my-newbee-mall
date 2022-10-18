import { createStore } from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'


export default createStore({
  state,
  mutations,
  actions,
  // actions: {
  //   async updateCart(ctx) {
  //     const { data } = await getCart()
  //     ctx.commit('addCart', {
  //       count: data.length || 0,
  //     })
  //   },
  // },
  modules: {},
})


