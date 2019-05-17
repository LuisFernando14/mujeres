<template>
  <v-app>
    <Navigation/>
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
