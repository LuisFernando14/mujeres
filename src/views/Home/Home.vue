<template>
  <div class="bg-light margin">
    <MegaNoticia class="margin-2" />
    <News class="margin-2"  />
   
    

  </div>
</template>

<script>
import Weather from '@/components/Weather';
import MegaNoticia from '@/components/MegaNoticia';
import News from '@/components/News';
import Prices from '@/components/Prices';

export default {
  name:'Home',
  components: {
    Weather,
    MegaNoticia,
    News,
    Prices
  }
}
</script>
<style>
.margin {
  padding: 5%;
}
.margin-2 {
  padding: 1%;
}
</style>

