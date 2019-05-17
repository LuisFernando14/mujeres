<template>
  <div id="app" >
    <component :is="'slide'">
      <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>Noticias</span>
      </a>
      <a href="#">
        <i class="fa fa-fw fa-bell-o"></i>
        <span>Clima</span>
      </a>
      <a href="#">
        <i class="fa fa-fw fa-envelope-o"></i>
        <span>Precios</span>
      </a>
      <a href="#">
        <i class="fa fa-fw fa-comment-o"></i>
        <span>Clasificados</span>
      </a>
      <a href="#">
        <i class="fa fa-fw fa-bar-chart-o"></i>
        <span>Empresas</span>
      </a>
      <a href="#">
        <i class="fa fa-fw fa-newspaper-o"></i>
        <span>Productos</span>
      </a>
    </component>
  </div>
</template>

<script>
import slide from './slide';
import Menu from './Menu';
import { mapState } from 'vuex';

export default {
  components: {
    slide,
    Menu
  }
};
</script>
