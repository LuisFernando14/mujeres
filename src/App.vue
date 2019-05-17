<template>
  <v-app>
    <Navigation v-show="$store.getters.user"/>
    <router-view/>
  </v-app>
</template>

<script>

import Navigation from './components/Menu/MenuBar';
import {store} from'./store/index';
export default {
  components: {
    Navigation
  }
}
</script>
