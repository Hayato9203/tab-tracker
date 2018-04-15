<template>
  <v-layout row wrap>
    <!-- 将12格分成6+6，内容总占6，左右分别缩进3格 -->
    <v-flex xs6 offset-xs3>
      <v-card class="white elevation-2">
        <v-toolbar dark flat dense class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-card class="pl-4 pr-4 pt-3 pb-3">
          <form action="" method="post" name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field label="Password" autocomplete="new-password" v-model="password"></v-text-field>
          </form>
          <br />
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="cyan" @click="register">Register</v-btn>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
