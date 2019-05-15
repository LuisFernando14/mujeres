<template>
  <div>
    
    <Weather />
  </div>
</template>

<script>
import NewsComp from '@/components/NewsComp';
import Weather from '@/components/Weather'
import Weather2 from '@/components/Weather2'
export default {
  name:'Home',
  components: {
    NewsComp,
    Weather,
    Weather2
  }
}
</script>
