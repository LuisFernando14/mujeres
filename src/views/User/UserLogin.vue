<template>
  <Login />
</template>

<script>
import Login from '@/components/Login.vue';
export default {
  components: {
      Login
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: {
    inner: 'Iniciar sesión',
    separator: '-',
  },
  }
}
</script>

