import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  // update歌曲信息
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
