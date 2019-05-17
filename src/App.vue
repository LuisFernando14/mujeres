<template>
  <div id="app">
    <Navigation v-show="$store.getters.user"/>
    <router-view/>
    <Footer />
  </div>
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
