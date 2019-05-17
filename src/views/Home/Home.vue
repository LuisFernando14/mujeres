<template>
  <div class="bg-light">
    <MegaNoticia />
    <br>
    <br>
    <News />
    <br>
    <Weather />
    <br>
    <Prices />
    <br><br><br>
    

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
