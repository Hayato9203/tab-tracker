<template>
<div>
  <!-- 歌曲信息页 -->
  <v-layout>
    <v-flex xs6>
      <!-- 将song Object传到子组件 -->
      <song-metadata :song="song"></song-metadata>
    </v-flex>
    <!-- youtube部件 -->
    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId"></you-tube>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs6 mt-2>
      <tab :tab="song.tab"></tab>
    </v-flex>
    <!-- 歌词歌谱页 -->
    <v-flex xs6 class="ml-2 mt-2">
      <lyrics :lyrics="song.lyrics"></lyrics>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongMetadata from './SongMetadata'
import Lyrics from './Lyrics'
import Tab from './Tab'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    // 从vuex中获取songId
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    // 查看歌曲的时候，顺便记录查看历史
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
</style>
