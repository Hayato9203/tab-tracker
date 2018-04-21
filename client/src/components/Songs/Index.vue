<template>
  <v-layout row>
    <v-flex xs6>
      <songs-bookmarks></songs-bookmarks>
    </v-flex>
    <v-flex xs6 ml-2>
        <songs-search-panel></songs-search-panel>
        <songs-panel class="mt-2"></songs-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from '@/components/Songs/SongsBookmarks'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: { },
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  }
}
</script>

<style scoped>

</style>
