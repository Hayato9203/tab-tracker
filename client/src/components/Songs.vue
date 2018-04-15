<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
        <panel title="Songs">
            <div v-for="song in songs" :key="song.title">
                {{song.title}} -
                {{song.album}} -
                {{song.artist}}
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
        {title: 'うたかた花火', album: '星が瞬くこんな夜に', artist: 'supercell'},
        {title: 'ビードロ模様', album: 'ビードロ模様', artist: 'やなぎなぎ'},
        {title: '夏の終わりの雨音が', album: 'デュオトリオコレクション VOL.1 ~SUMMER VACATION~', artist: '伊波杏樹;諏訪ななか'},
        {title: '夜空はなんでも知ってるの？', album: '元気全開DAY！DAY！DAY！', artist: 'CYaRon'},
        {title: 'アクアテラリウム', album: 'アクアテラリウム', artist: 'やなぎなぎ'},
        {title: 'Letter Song', album: 'Letter Song', artist: 'ヲタみん'}
      ]
    }
  },
  async mounted () {
    // 从后台取得所有歌曲
    this.songs = await SongsService.index()
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
