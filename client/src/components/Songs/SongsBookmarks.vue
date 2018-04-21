<template>
    <panel title="Bookmarks">
        <!-- 将bookmarks赋予items供给table遍历 -->
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :loading="loading"
      :items="bookmarks"
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
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      //   加载栏
      loading: true,
      bookmarks: [],
      // 分页
      pagination: {
        sortBy: 'date',
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
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index({
        userId: this.user.id
      })).data
      this.loading = false
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
