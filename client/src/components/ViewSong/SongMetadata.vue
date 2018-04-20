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
        <!-- 如果已登录，而且该项目没有被bookmark则显示bookmark功能按钮 -->
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark class="cyan"
          @click="setAsBookmark">
          Bookmark
        </v-btn>
        <!-- 如果以bookmark则显示unbookmark按钮 -->
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark class="cyan"
          @click="unsetAsBookmark">
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
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  // mapState接管$store.state.isUserLoggedIn,接管store文件中的state属性
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
