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
          v-if="isUserLoggedIn && !isBookmarked"
          dark class="cyan"
          @click="unbookmark">
          Bookmark
        </v-btn>
        <!-- 如果以bookmark则显示unbookmark按钮 -->
        <v-btn
          v-if="isUserLoggedIn && isBookmarked"
          dark class="cyan"
          @click="bookmark">
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
      isBookmarked: false
    }
  },
  // mapState接管$store.state.isUserLoggedIn,接管store文件中的state属性
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    // 如果用户已登录就不需要mounted的方法了
    if (!this.isUserLoggedIn) {
      return
    }
    try {
      const bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      // 这个歌曲是否被该用户bookmark了
      this.isBookmarked = !!bookmark
      // console.log('bookmarks', this.isBookmarked)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
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
