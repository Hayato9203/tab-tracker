<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
        <panel title="Songs">
          <router-link slot="action" :to="{name: 'songs-create'}">
            <v-btn class="cyan accent-2" light fab small absolute right middle>
              <v-icon>add</v-icon>
            </v-btn>
          </router-link>
          <div v-for="song in songs" :key="song.id" class="song">
            <v-layout>
              <v-flex xs6 >
                <div class="song-title">{{song.title}}</div>
                <div class="song-artist">{{song.artist}}</div>
                <div class="song-genre">{{song.genre}}</div>
                <!-- 定义v-on:click中带有参数的route -->
                <v-btn
                  dark class="cyan"
                  @click="navigateTo({
                    name: 'song',
                    params: {songId: song.id}
                  })">
                  View this song
                </v-btn>
              </v-flex>
              <v-flex xs6 >
                <img :src="song.albumImageUrl" class="album-image">
              </v-flex>
            </v-layout>
          </div>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: [
        {title: 'うたかた花火', album: '星が瞬くこんな夜に', artist: 'supercell', albumImageUrl: ''},
        {title: 'ビードロ模様', album: 'ビードロ模様', artist: 'やなぎなぎ', albumImageUrl: ''},
        {title: '夏の終わりの雨音が', album: 'デュオトリオコレクション VOL.1 ~SUMMER VACATION~', artist: '伊波杏樹;諏訪ななか', albumImageUrl: ''},
        {title: '夜空はなんでも知ってるの？', album: '元気全開DAY！DAY！DAY！', artist: 'CYaRon', albumImageUrl: ''},
        {title: 'アクアテラリウム', album: 'アクアテラリウム', artist: 'やなぎなぎ', albumImageUrl: ''},
        {title: 'Letter Song', album: 'Letter Song', artist: 'ヲタみん', albumImageUrl: ''}
      ]
    }
  },
  async mounted () {
    // 从后台取得所有歌曲
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
