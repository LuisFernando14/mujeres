<template>
  <v-app>
    <Navigation v-show="$store.getters.user"/>
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>

import Navigation from './components/Menu/MenuBar';
import Footer from './components/Footer';
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
