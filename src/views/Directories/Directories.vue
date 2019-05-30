<template>
  <div  >
    <br><br><br>
   <NavBar  v-bind:name="'Directorios'"></NavBar>
   <div v-on:click="showOne" @mouseover="overOut" class="container">
     <Empresas></Empresas>
   </div>
   <br><br><br><br><br>

  </div>
  
</template>
<script>

const $ = require('jquery')
import NavBar from "@/components/NavBar";
import Empresas from "@/components/Directories/Empresas";

export default {
  data: () => ({}),
  components:{
    NavBar,
    Empresas
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
  }
};
</script>


