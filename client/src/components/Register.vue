<template>
  <div>
    <h1>Register</h1>
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
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
