<template>
<div>
  <!-- 歌曲信息页 -->
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <v-layout class="song">
          <v-flex xs6>
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <div class="song-genre">{{song.genre}}</div>
          </v-flex>
          <v-flex xs6>
            <img :src="song.albumImageUrl" class="album-image">
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>
  <!-- 歌词歌谱页 -->
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <!-- youtube embeded -->
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
        <textarea readonly class="lyrics" v-model="song.lyrics"></textarea>
      </panel>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
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
src: url(../../static/fonts/sazanami-gothic.ttf);
}
textarea.lyrics{
  font-family: Sazanami;
}
</style>
