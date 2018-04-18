<template>
<div>
  <!-- 歌曲信息页 -->
  <v-layout>
    <v-flex xs6>
      <!-- 将song Object传到子组件 -->
      <song-metadata :song="song"></song-metadata>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId"></you-tube>
    </v-flex>
  </v-layout>
  <!-- 歌词歌谱页 -->
  <!-- <v-layout>
    <v-flex xs6>
      <panel title="Youtube Video">
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea readonly class="lyrics" v-model="song.lyrics"></textarea>
      </panel>
    </v-flex>
  </v-layout> -->
</div>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    // 从vuex中获取songId
    const songId = this.$store.state.route.params.songId
    // console.log(songId)
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>
textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
@font-face {
font-family: Sazanami;
src: url(../../../static/fonts/sazanami-gothic.ttf);
}
textarea.lyrics{
  font-family: Sazanami;
}
</style>
