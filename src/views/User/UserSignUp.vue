<template>
<v-content>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs4>
        <Signup />
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>
import Signup from '@/components/Signup.vue';
export default {
    components: {
        Signup
    }
}
</script>
