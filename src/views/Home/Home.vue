<template>
  <div class="bg-light margin" v-on:click="showOne" @mouseover="overOut">

  </div>
</template>

<script>
const $ = require('jquery')


export default {
  name:'Home',
  components: {

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

