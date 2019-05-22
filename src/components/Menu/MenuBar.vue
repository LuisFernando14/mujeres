<template>
<div>
  <header>
<div class="d-flex">
  <div class="mr-auto">
    <label class="lnr lnr-menu" v-on:click="onItemClick"></label>
    <img src="./../../assets/logo_banner.png" alt="Agrimercante.com" width="190" style="margin-left: 10px;">

  </div>
  <div class="p-2">
    <button type="button" class="btn btn-secondary">Registrate</button>
    
  </div>
</div>

  </header>

  <div class="d-none d-sm-block">
    <div class="menu"  @mouseover="hoverr">
        <router-link to="/"><div class="line"><label class="lnr lnr-home" to="/"><font>Inicio</font></label></div></router-link>
        <router-link to="/"><div class="line"><label class="lnr lnr-briefcase"><font>Noticias</font></label></div></router-link>
        <router-link to="/classifieds/add"><div class="line"><label class="lnr lnr-briefcase"><font>Clasificados</font></label></div></router-link>
        <div class="line"><label class="lnr lnr-calendar-full"><font>Eventos</font></label></div>
        <div class="line"><label class="lnr lnr-chart-bars"><font>Precios</font></label></div>
        <div class="line"><label class="lnr lnr-cloud"><font>climas</font></label></div>
    </div>
  </div>
  <div class="d-sm-none">
    <div class="menu-Mobil menu-show-mobil" v-on:click="onItemClick">
        <router-link to="/"><div class="line"><label class="lnr lnr-home"><font>Inicio</font></label></div></router-link>
        <router-link to="/"><div class="line"><label class="lnr lnr-briefcase"><font>Noticias</font></label></div></router-link>
        <router-link to="/classifieds/add"><div class="line"><label class="lnr lnr-briefcase"><font>Clasificados</font></label></div></router-link>
        <div class="line"><label class="lnr lnr-calendar-full"><font>Eventos</font></label></div>
        <div class="line"><label class="lnr lnr-chart-bars"><font>Precios</font></label></div>
        <div class="line"><label class="lnr lnr-cloud"><font>climas</font></label></div>
    </div>
  </div>

</div>
</template>
 
<script>
const $ = require('jquery')
$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.cancel').click(); $('.menu').removeClass("menu-show"); // esc
});



const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
    export default {
  name: 'App',
  data () {
    return {
      menu: [
        {
          href: '/Noticias',
          title: 'Noticias',
          icon: 'fa fa-code'
        },
        {
          href: '/Precios',
          title: 'Precios',
          icon: 'fa fa-cogs'
        },
        {
          href: '/CLima',
          title: 'Clima',
          icon: 'fa fa-bell'
        },
        {
          href: '/Clasificados',
          title: 'Clasificados',
          icon: 'fa fa-palette'
        },
        {
          header: true,
          component: separator,
          visibleOnCollapse: true
        }
      ],
      collapsed: true,
    }
  },
  methods: {
    onCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
    $('.menu').toggleClass("menu-show");
    $('.menu-Mobil').toggleClass("menu-show-mobil");
    },
    hide(){
      $('.menu').removeClass("menu-show");
      $('.menu-Mobil ').addClass("menu-show-mobil");
    },
    hoverr(){
      $('.menu').addClass("menu-show");
      $('.menu-Mobil ').removeClass("menu-show-mobil");
    }
  }
}
</script> 
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}


header{
    width: 100%;
    height: 50px;
    background: #000000;
    position: fixed;
    z-index: 10;
}

.lnr-menu{
    font-size: 30px;
    position: relative;
    top: 10px;
    left: 10px;
    color: white;
    border: 1px solid transparent;
    transition: all 300ms;
    padding: 2px;
    cursor: pointer;
}

.lnr-menu:hover{
    border: 1px solid white;
}







/*Menu*/


.menu{
    width: 60px;
    height: 100vh;
    background: #363636;
    overflow: hidden;
    position: fixed;
    top: 50px;
    transition: all 300ms;
    z-index: 9;
    overflow: auto;
    opacity:0.95;
}
.menu-Mobil{
    width: 60px;
    height: 100vh;
    background: #363636;
    overflow: hidden;
    position: fixed;
    top: 50px;
    transition: all 300ms;
    z-index: 9;
    overflow: auto;
}
.menu-show-mobil{
    width: 0px;
}
.menu-show{
    width: 240px;
}

.line{
    margin-top: 10px;
    padding: 10px;
    transition: all 300ms;
}


.line:hover{
    background: #188fe6; 
    cursor: pointer;
}
.line label{
    color: white;
    font-size: 30px;
    cursor: pointer;
}

.line font{
    margin-left: 40px;
    font-size: 18px;
    font-weight: 100;
    cursor: pointer;
}


/*Articulo*/


main{
    position: absolute;
    top: 50px;
    left: 60px;
    padding: 20px;
    transition: all 300ms;
}

.main-move{
    left: 240px;
}

article h1{
    font-size: 40px;
}

article p{
    font-size: 20px;
    margin-top: 20px;
    font-weight: 100;
}









</style>
