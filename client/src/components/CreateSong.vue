<template>
    <v-flex xs6 offset-xs3>
        <v-card class="white elevation-2">
            <panel title="Song Metadata">
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Title" v-model="title"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Artist" v-model="artist"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Genre" v-model="genre"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album" v-model="album"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Album Image Url" v-model="albumImageUrl"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Youtube Id" v-model="youtubeId"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Lyrics" v-model="lyrics"></v-text-field>
                </v-card>
                <v-card class="pl-4 pr-4 pt-3 pb-3">
                    <v-text-field label="Tab" v-model="tab"></v-text-field>
                </v-card>
            </panel>
        </v-card>
    </v-flex>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
