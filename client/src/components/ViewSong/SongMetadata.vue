<template>
<panel title="Song Metadata">
    <v-layout class="song">
      <v-flex xs6>
        <div class="song-title">{{song.title}}</div>
        <div class="song-artist">{{song.artist}}</div>
        <div class="song-genre">{{song.genre}}</div>
        <v-btn
          dark class="cyan"
          v-bind:to="{
            name: 'song-edit',
            params: {songId: song.id}
          }">
          Edit this song
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn"
          dark class="cyan"
          @click="bookmark">
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn"
          dark class="cyan"
          @click="unbookmark">
          Unbookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
      <img :src="song.albumImageUrl" class="album-image">
      <br>
      {{song.album}}
      </v-flex>
    </v-layout>
</panel>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [
    'song'
  ],
  // mapState接管$store.state.isUserLoggedIn,接管store文件中的state属性
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    bookmark () {
      console.log('bookmark')
    },
    unbookmark () {
      console.log('unbookmark')
    }
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
</style>
