<template>
  <v-app>
    
    <router-view/>
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation';
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
