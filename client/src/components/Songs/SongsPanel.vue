<template>
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
            :to="{
              name: 'song',
              params: {songId: song.id}
            }">
            View this song
        </v-btn>
        </v-flex>
        <v-flex xs6 >
        <img :src="song.albumImageUrl" class="album-image">
        </v-flex>
    </v-layout>
    </div>
</panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  // 不需要mounted,因为watch时会做取得歌曲的步骤(并有筛选功能)
  // async mounted () {
  //   // 从后台取得所有歌曲
  //   this.songs = (await SongsService.index()).data
  // },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
