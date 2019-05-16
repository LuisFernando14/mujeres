<template>
  <div>
    <MegaNoticia />
    <Weather />
  </div>
</template>

<script>
import Weather from '@/components/Weather';
import NewsComp from '@/components/NewsComp';
import MainNew from '@/components/MainNew';
import MegaNoticia from '@/components/MegaNoticia';
export default {
  name:'Home',
  components: {
    Weather,
    NewsComp,
    MainNew,
    MegaNoticia
  }
}
</script>
