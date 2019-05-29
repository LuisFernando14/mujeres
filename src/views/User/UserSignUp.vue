<template>
  <Signup />
</template>

<script>
import Signup from '@/components/Signup.vue';
export default {
  components: {
      Signup
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: {
    inner: 'Regístrate',
    separator: '-',
    }
  } 
}
</script>
