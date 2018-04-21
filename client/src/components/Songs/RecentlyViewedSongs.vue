<template>
  <panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :loading="loading"
      :items="histories"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">{{ props.item.artist }}</td>
        <td class="text-xs-right">{{ props.item.album }}</td>
        <td class="text-xs-right">{{ props.item.genre }}</td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'
export default {
  data () {
    return {
      //   加载栏
      loading: true,
      histories: [],
      search: '',
      // 分页
      pagination: {
        sortBy: 'createAt',
        descending: true
      },
      //   表头
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        {
          text: 'Artist', value: 'artist'
        },
        {
          text: 'Album', value: 'album'
        },
        {
          text: 'Genre', value: 'genre'
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  //   如果用户已登录，则后台加载该用户的bookmarks数据
  mounted () {
    if (this.isUserLoggedIn) {
      setTimeout(async () => {
        this.loading = false
        this.histories = (await SongHistoryService.index({
          userId: this.user.id
        })).data
      }, 1000)
    } else {
      setTimeout(async () => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
