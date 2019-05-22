<template>
  <div id="app">
    <Navigation id="menu"/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
const $ = require('jquery')
import Navigation from './components/Menu/MenuBar';
import Footer from './components/Footer';
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>


