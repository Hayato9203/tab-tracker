<template>
    <panel title="Search">
        <v-card class="pl-4 pr-4 pt-3 pb-3">
            <v-text-field label="Search by song title, artist, album, or genre" v-model="search"></v-text-field>
        </v-card>
    </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  //   watch可以实时监视form的value
  //  这里是实时生成一个url:route+query模式的songs?search=value,同时地址栏生成url链接
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      //   同时地址栏生成url链接http://localhost:8080/#/songs?search=うたかた花火
      this.$router.push(route)
    //   console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
