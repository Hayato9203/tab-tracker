<template>
    <v-card class="white elevation-2">
    <v-toolbar dark flat dense class="cyan">
        <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <v-card class="pl-4 pr-4 pt-3 pb-3">
        <slot>No slot defined.</slot>
    </v-card>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: 'The Songs'
    }
  }
}
</script>

<style scoped>

</style>
