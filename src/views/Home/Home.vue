<template>
  <div>
    <News />
  </div>
</template>

<script>
import Weather from '@/components/Weather';
import NewsComp from '@/components/NewsComp';
import MainNew from '@/components/MainNew';
import News from '@/components/News';
export default {
  name:'Home',
  components: {
    Weather,
    NewsComp,
    MainNew,
    News,
  }
}
</script>
