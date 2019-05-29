<template>
  <div>
    <div class="d-none d-sm-block">
      <header>
        <div class="d-flex">
          <div class="mr-auto">
            <label v-show="token" class="lnr lnr-menu" v-on:click="onItemClick"></label>
            <a href="/" style="padding-left: 97px;">
              <img
                v-if="token"
                src="./../../assets/logo_banner.png"
                class
                alt="Agrimercante.com"
                width="190"
                style="margin-left: 1.8em;"
              >
            </a>
            <a href="/">
              <img
                v-if="!token"
                src="./../../assets/logo_banner.png"
                class
                alt="Agrimercante.com"
                width="190"
                style="margin-left: 10px;padding-top: 10px;"
              >
            </a>
          </div>
          <div class="p-2">
            <div v-if="token" style="padding-right: 156px;">
              <router-link to="/"><button type="button" class="btn btn-outline-dark" v-on:click="cerrarSesion">Cerrar sesión</button></router-link>
            </div>
            <div v-else>
              <router-link to="/login"><a href style="padding-right: 5px; color: #6c757d">Iniciar sesión</a></router-link>
              <router-link to="/signup"><button type="button" class="btn btn-outline-dark">Regístrate</button></router-link>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="d-sm-none">
      <header>
        <div class="d-flex">
          <div class="mr-auto">
            <label class="lnr lnr-menu" v-on:click="onItemClick"></label>
            <a href="/">
              <img
                src="./../../assets/loguito.png"
                class
                alt="Agrimercante.com"
                width="45"
                style="margin-left: 10px;"
              >
            </a>
          </div>
          <div class="p-2">
            <div v-if="token">
              <button type="button" class="btn btn-outline-dark" v-on:click="cerrarSesion">Cerrar sesión</button>
            </div>
            <div v-else>
              <router-link to="/login"><a href style="padding-right: 5px; color: #6c757d">Iniciar sesión</a></router-link>
              <router-link to="/signup"><button type="button" class="btn btn-outline-dark">Regístrate</button></router-link>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="d-none d-sm-block">
      <div v-if="token" class="menu" @mouseover="hoverr">
        <div class="line" style="padding-left: 6px;">
          <div class="circulo">
            <h2>{{letraName}}{{letraApellido}}</h2>
          </div>
          <a class="title" href="/">
            <h4 id="nametitle" class="hidename title">{{username}}</h4>
          </a>
        </div>
        <router-link to="/">
          <div class="line">
            <label class="lnr lnr-home" to="/">
              <font>Inicio</font>
            </label>
          </div>
        </router-link>
        <router-link to="/">
          <div class="line">
            <label class="lnr lnr-earth">
              <font>Noticias</font>
            </label>
          </div>
        </router-link>
        <router-link to="/classifieds/add">
          <div class="line">
            <label class="lnr lnr-cart">
              <font>Clasificados</font>
            </label>
          </div>
        </router-link>
        <router-link to="/Directories">
          <div class="line">
            <label class="lnr lnr-phone-handset">
              <font>Directorios</font>
            </label>
          </div>
        </router-link>
        <div class="line">
          <label class="lnr lnr-calendar-full">
            <font>Eventos</font>
          </label>
        </div>
        <router-link to="/Prices">        
        <div class="line">
          <label class="lnr lnr-chart-bars">
            <font>Precios</font>
          </label>
        </div>
        </router-link>
        <div class="line">
          <label class="lnr lnr-cloud">
            <font>Climas</font>
          </label>
        </div>
      </div>
    </div>
    <div class="d-sm-none">
      <div  v-if="token" class="menu-Mobil menu-show-mobil" v-on:click="onItemClick">
        <div class="line" style="padding-left: 6px;">
          <div class="circulo">
            <h2>{{letraName}}{{letraApellido}}</h2>
          </div>
        </div>
        <router-link to="/">
          <div class="line">
            <label class="lnr lnr-home" to="/">
              <font>Inicio</font>
            </label>
          </div>
        </router-link>
        <router-link to="/">
          <div class="line">
            <label class="lnr lnr-earth">
              <font>Noticias</font>
            </label>
          </div>
        </router-link>
        <router-link to="/classifieds/add">
          <div class="line">
            <label class="lnr lnr-cart">
              <font>Clasificados</font>
            </label>
          </div>
        </router-link>
        <router-link to="/Directories">
          <div class="line">
            <label class="lnr lnr-phone-handset">
              <font>Directorios</font>
            </label>
          </div>
        </router-link>
        <div class="line">
          <label class="lnr lnr-calendar-full">
            <font>Eventos</font>
          </label>
        </div>
        <router-link to="/Prices">        
        <div class="line">
          <label class="lnr lnr-chart-bars">
            <font>Precios</font>
          </label>
        </div>
        </router-link>
        <div class="line">
          <label class="lnr lnr-cloud">
            <font>Climas</font>
          </label>
        </div>
      </div>
    </div>
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
const $ = require("jquery");
import 'vue-loading-overlay/dist/vue-loading.css';
$(document).keyup(function(e) {
  if (e.keyCode === 27) $(".cancel").click();
  $(".menu").removeClass("menu-show"); // esc
});

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
};
export default {
  name: "App",
  components:{
    Loading
  }, 
  data() {
    return {
      token: localStorage.getItem("token") || 0,
      username: localStorage.getItem("token"),
      letraName: localStorage.getItem("token").charAt(0),
      letraApellido: localStorage.getItem("token").charAt(0),
      menu: [
        {
          href: "/Noticias",
          title: "Noticias",
          icon: "fa fa-code"
        },
        {
          href: "/Precios",
          title: "Precios",
          icon: "fa fa-cogs"
        },
        {
          href: "/CLima",
          title: "Clima",
          icon: "fa fa-bell"
        },
        {
          href: "/Clasificados",
          title: "Clasificados",
          icon: "fa fa-palette"
        },
        {
          header: true,
          component: separator,
          visibleOnCollapse: true
        }
      ],
      isLoading: false,
      fullPage: true,
      collapsed: true
    };
  },
  methods: {
    cerrarSesion () {
      this.isLoading = true
      localStorage.removeItem("token");
      setTimeout(() => {
        this.isLoading = false
        window.location.replace('/');
      },300)
    },
    onCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    onItemClick(event, item) {
      if ($("#nametitle").css("visibility") != "hidden")
        $("#nametitle").addClass("hidename");
      else $("#nametitle").removeClass("hidename");
      $(".menu").toggleClass("menu-show");
      $(".menu-Mobil").toggleClass("menu-show-mobil");
    },
    hoverr() {
      $(".menu").addClass("menu-show");
      $(".menu-Mobil ").removeClass("menu-show-mobil");
      $("#nametitle").removeClass("hidename");
    }
  }
};
</script>
