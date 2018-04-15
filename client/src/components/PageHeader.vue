<template>
    <v-toolbar fixed class="teal accent-2" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" @click="navigateTo({name: 'root'})">
                TabTracker
            </span>
        </v-toolbar-title>

        <!-- TODO: Implement Me -->
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="login">
                Log In
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}
.home:hover {
    color: rgb(255, 255, 255);
}
</style>
