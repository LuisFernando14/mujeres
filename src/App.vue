<template>
  <v-app>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout align-center justify-center row fill-height>
          <v-flex xs6>
            <router-link to="Signup">Signup</router-link>
            <router-link to="login">log in</router-link>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
