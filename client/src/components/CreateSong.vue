<template>
<v-layout>
    <v-flex xs4>
        <v-card class="white elevation-2">
            <panel title="Song Metadata">
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Title" v-model="song.title"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Artist" v-model="song.artist"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Genre" v-model="song.genre"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album" v-model="song.album"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album Image Url" v-model="song.albumImageUrl"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Youtube Id" v-model="song.youtubeId"></v-text-field>
                </v-card>
            </panel>
        </v-card>
    </v-flex>
    <v-flex xs8 class="ml-2">
        <v-card class="white elevation-2">
            <panel title="Song Structure">
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Tab" multi-line v-model="song.tab"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Lyrics" multi-line v-model="song.lyrics"></v-text-field>
                </v-card>
            </panel>
        </v-card>
        <v-btn dark class="cyan" @click="create">Create the Song</v-btn>
    </v-flex>
</v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      // call API
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
