<template>
    <panel title="Bookmarks">
      <v-card-title>
        Filter
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :loading="loading"
        :items="bookmarks"
        :search="search"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.artist }}</td>
          <td class="text-xs-right">{{ props.item.album }}</td>
          <td class="text-xs-right">{{ props.item.genre }}</td>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{search}}" found no results.
        </v-alert>
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
    //   this.bookmarks = (await BookmarksService.index({
    //     userId: this.user.id
    //   })).data
      setTimeout(async () => {
        this.loading = false
        this.bookmarks = (await BookmarksService.index({
          userId: this.user.id
        })).data
      }, 1000)
    } else {
      setTimeout(async () => {
        this.loading = false
      }, 1000)
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
