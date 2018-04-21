<template>
  <v-layout row>
    <v-flex xs6>
      <songs-bookmarks></songs-bookmarks>
      <recently-viewed-songs class="mt-2"></recently-viewed-songs>
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
import RecentlyViewedSongs from '@/components/Songs/RecentlyViewedSongs'

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
    SongsBookmarks,
    RecentlyViewedSongs
  }
}
</script>

<style scoped>

</style>
