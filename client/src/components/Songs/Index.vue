<template>
  <v-layout row>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks></songs-bookmarks>
      <recently-viewed-songs class="mt-2"></recently-viewed-songs>
    </v-flex>
    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" ml-2>
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
import {mapState} from 'vuex'

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
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>

</style>
