<template>
  <panel title="Song Metadata">
    {{song.title}}
    {{song.artist}}
    {{song.genre}}
  </panel>
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

</style>
