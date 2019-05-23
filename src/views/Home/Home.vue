<template>
  <div class="bg-light margin" v-on:click="showOne" @mouseover="overOut">
    <MegaNoticia class="margin-2" />
    <News class="margin-2"  />
    <Weather class="margin-2"  />
    <Prices class="margin-2"  />
    <Ficha class="margin-2"  />
  </div>
</template>

<script>
const $ = require('jquery')
import Weather from '@/components/Weather';
import MegaNoticia from '@/components/MegaNoticia';
import News from '@/components/News';
import Prices from '@/components/Prices';
import Ficha from '@/components/Ficha';

export default {
  name:'Home',
  components: {
    Weather,
    MegaNoticia,
    News,
    Prices,
    Ficha
  },
  methods:{
    showOne() {
    $('.menu').removeClass("menu-show");
      $('#nametitle').css('visibility', 'visible');

    $('.menu-Mobil ').addClass("menu-show-mobil");
    },
    overOut(){
      $('#nametitle').addClass("hidename");   
      
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

