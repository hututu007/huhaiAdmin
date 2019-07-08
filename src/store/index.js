import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'//测试你是否用mutaiton提交？？

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'///???

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,//在项目发布的时候一定要关掉！！！！！！
  plugins: debug ? [createLogger()] : []
})