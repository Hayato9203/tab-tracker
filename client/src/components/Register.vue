<template>
  <div>
    <h1>Register</h1>
    <div class="error" v-html="error"></div>
    <input v-model="email" type="email" name="email" placeholder="email">
    <br>
    <input v-model="password" type="password" name="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
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
