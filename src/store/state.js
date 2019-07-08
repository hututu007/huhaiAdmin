// 项目的所有全局变量
import Cookies from 'js-cookie'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  sidebar: {
    opened: !+Cookies.get('sidebarStatus'), //记录上次菜单是打开与否
    withoutAnimation: false
  },
  avatar: '',
  name: '',
  token: getToken(),
  roles: [],
  device: 'desktop' //控制菜单的模态框显示与否
}
export default state