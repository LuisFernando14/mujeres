<template>
  <v-content>
    <v-container grid-list-md text-xs-center>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs4>
          <Login />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Login from '@/components/Login.vue';
export default {
    components: {
        Login
    }
}
</script>

