<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
        <songs-panel></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
// import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: { },
  components: {
    SongsPanel
  }
}
</script>

<style scoped>

</style>
