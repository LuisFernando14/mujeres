<template>
  <div>
    <NewsComp />
    <Weather />
    <NewsComp />
  </div>
</template>

<script>
import Weather from '@/components/Weather';
import NewsComp from '@/components/NewsComp';
export default {
  name:'Home',
  components: {
    Weather,
    NewsComp
  }
}
</script>
