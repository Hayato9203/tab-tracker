<template>
  <v-layout row wrap>
    <!-- 将12格分成6+6，内容总占6，左右分别缩进3格 -->
    <v-flex xs6 offset-xs3>
      <v-card class="white elevation-2">
        <panel title="Register">
          <v-card class="pl-4 pr-4 pt-3 pb-3">
            <form name="tab-tracker-form" autocomplete="off">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <br />
              <v-text-field hint="At least 8 characters" label="Password" autocomplete="new-password" v-model="password" min="8"
              counter></v-text-field>
            </form>
            <br />
            <v-alert outline color="error" v-if="error" icon="warning" :value="true">
              {{error}}
            </v-alert>
            <br>
            <v-btn dark class="cyan" @click="register">Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
