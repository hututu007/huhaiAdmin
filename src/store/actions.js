
/*这里我会对一个动作有多个commit提交的时候，
*或者有多个页面用到一个提交的时候，会在这里定义方法，但我不建议直接在这里调用api
*/
import { getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'



// 获取用户信息
export const GetInfo = function ({ commit, state }) {
    return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
}
// 登出
export const LogOut = function({ commit}) {
  commit('SET_TOKEN', '')
  commit('SET_ROLES', [])
  removeToken()
}

// 前端 登出
export const FedLogOut = function ({ commit}) {
    return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
}




