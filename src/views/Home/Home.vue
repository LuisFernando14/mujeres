<template>
  <div class="bg-light">
    <MegaNoticia />
    <br>
    <br>
    <News />
    <br>
    <Weather />
    <br><br><br>
    

  </div>
</template>

<script>
import Weather from '@/components/Weather';
import MegaNoticia from '@/components/MegaNoticia';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default {
  name:'Home',
  components: {
    Weather,
    MegaNoticia,
    News,
    Footer
  }
}
</script>
