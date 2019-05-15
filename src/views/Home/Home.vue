<template>
  <div>
    <Weather />
    <NewsComp />
  </div>
</template>

<script>
import NewsComp from '@/components/NewsComp';
import Weather from '@/components/Weather'
export default {
  name:'Home',
  components: {
    NewsComp,
    Weather,
  }
}
</script>
