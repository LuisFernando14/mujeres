<template>
  <v-app>
    <Navigation />
    <router-view/>
  </v-app>
</template>

<script>

import Navigation from './components/Menu/MenuBar';
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Navigation
  }
}
</script>
