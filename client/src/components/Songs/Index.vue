<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
        <songs-panel></songs-panel>
        <songs-search-panel></songs-search-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
// import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: { },
  components: {
    SongsPanel,
    SongsSearchPanel
  }
}
</script>

<style scoped>

</style>
