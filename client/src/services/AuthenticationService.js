import Api from '@/services/Api'

export default {
  // register函数接收post请求的credentials(证书)参数
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// AuthenticationService.register({
//     email:`testing@gmail.com`,
//     passworf:`123456`
// })

// implement a UI to be to use for them this authentication service
