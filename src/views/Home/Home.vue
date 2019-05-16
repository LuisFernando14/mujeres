<template>
  <div>
    <Weather />
  </div>
</template>

<script>
import Weather from '@/components/Weather';
import NewsComp from '@/components/NewsComp';
import MainNew from '@/components/MainNew';
export default {
  name:'Home',
  components: {
    Weather,
    NewsComp,
    MainNew,
  }
}
</script>
