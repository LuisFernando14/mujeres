<template>
<div>
  <v-toolbar color="teal" dark>
    <v-toolbar-side-icon @click.stop=""></v-toolbar-side-icon>
    <img src="@/assets/logo_banner.png" alt="">
  </v-toolbar>
  <Navigation ref="date" />
</div>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  components: {
    Navigation
  },
  mounted () {
    const cmp = this.$$refs.date.drawer
  }
}
</script>
