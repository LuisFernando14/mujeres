<template>
  <div class="bg-light margin" v-on:click="showOne" @mouseover="overOut">
    <MegaNoticia class="margin-2" />
    <News class="margin-2"  />
    <Weather class="margin-2"  />
    <Prices class="margin-2"  />
    
    
    
  </div>
</template>

<script>
const $ = require('jquery')
import Weather from '@/components/Weather';
import MegaNoticia from '@/components/MegaNoticia';
import News from '@/components/News/News';
import Prices from '@/components/Prices';
import Carousel from '@/components/Carousel/Carousel';



export default {
  name:'Home',
  components: {
    Weather,
    MegaNoticia,
    News,
    Prices,
    Carousel,
    
  },
  methods:{
    showOne() {
        $('.menu').removeClass("menu-show");
        $('.menu-Mobil ').addClass("menu-show-mobil");
        },
    overOut(){
        $('.menu').removeClass("menu-show");
        $('.menu-Mobil ').addClass("menu-show-mobil");
        $('#nametitle').addClass("hidename");
        }
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: {
    inner: 'Bienvenido',
    separator: '-',
  },

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

