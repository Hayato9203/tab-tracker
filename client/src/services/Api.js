import axios from 'axios'
import store from '@/store/store'

// 供给跨域-服务端用的路由前缀
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
