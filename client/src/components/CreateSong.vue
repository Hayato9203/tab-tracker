<template>
<v-layout>
    <v-flex xs4>
        <v-card class="white elevation-2">
            <panel title="Song Metadata">
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Genre" v-model="song.genre" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album Image Url" v-model="song.albumImageUrl" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Youtube Id" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
                </v-card>
            </panel>
        </v-card>
    </v-flex>
    <v-flex xs8 class="ml-2">
        <v-card class="white elevation-2">
            <panel title="Song Structure">
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Tab" multi-line v-model="song.tab" required :rules="[required]"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Lyrics" multi-line v-model="song.lyrics" required :rules="[required]"></v-text-field>
                </v-card>
            </panel>
        </v-card>
        <div class="danger-alert" v-if="error">{{error}}</div>
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
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = `Please fill in all the required fields.`
        return
      }
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
.danger-alert{
    color: red;
}
</style>
