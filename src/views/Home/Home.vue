<template>
  <div class="bg-light margin" v-on:click="showOne">
    <MegaNoticia class="margin-2" />
    <News class="margin-2"  />
  </div>
</template>

<script>
const $ = require('jquery')
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
  },
  methods:{
    showOne() {
    $('.menu').removeClass("menu-show");
    $('.menu-Mobil ').addClass("menu-show-mobil");

    }
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

