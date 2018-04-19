<template>
  <v-layout row wrap>
    <v-flex xs6 offset-xs3>
      <v-card class="white elevation-2">
        <panel title="Login">
          <v-card class="pl-4 pr-4 pt-3 pb-3">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field label="Password" type="password" v-model="password"></v-text-field>
            <br />
            <v-alert outline color="error" v-if="error" icon="warning" :value="true">
              {{error}}
            </v-alert>
            <br>
            <v-btn dark class="cyan" @click="login">Login</v-btn>
          </v-card>
        </panel>
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // 调用store的setToken方法,将返回的jwt的token保存到store中
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
