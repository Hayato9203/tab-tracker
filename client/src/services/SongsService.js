import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    console.log(song)
    return Api().post('songs', song)
  }
}
