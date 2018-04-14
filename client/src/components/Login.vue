<template>
    <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-card class="white elevation-2">
        <v-toolbar dark flat dense class="cyan">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card class="pl-4 pr-4 pt-3 pb-3">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br />
          <v-text-field label="Password" v-model="password"></v-text-field>
          <br />
          <v-btn dark class="cyan" @click="login">Login</v-btn>
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
    async login () {
      try {
        await AuthenticationService.login({
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

</style>
