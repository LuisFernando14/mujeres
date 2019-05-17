<template>
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-6 col-md-4">
    <a class="ui red ribbon label">Overview</a>
      <img :src="news.img" width="350" height="350">
    </div>
    <div class="col-12 col-md-8" style="top: 36px;">
      <h2>{{news.title}}</h2>
      <p style="top: 12px;">{{news.shortBody}}</p>
        <h4 class="primary">Lo mas leido </h4>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data () {
      return {
        news: {
          title: 'Oaxaca está teniendo una exitosa temporada de exportación de mangos a EE. UU',
          img: 'https://portal-data1.storage.googleapis.com/news/1557935933478_close-up-color-delicious-1137355.jpg',
          shortBody: 'El estado mexicano de Oaxaca es líder exportador de mangos en el país. Las cifras de exportaciones de 2019 son tremendamente positivas, y están cerca de la meta propuesta al principio de temporada, según datos de la Secretaría de Desarrollo Agropecuario, Pesca y Acuacultura (Sedapa).',
          fuente: 'www.freshplaza.es'
        }
      }
    }
}
</script>

<style>
.ui.ribbon.label {
    left: calc(-1rem - 1.2em);
    margin-right: -1.2em;
    padding-left: calc(1rem + 1.2em);
    padding-right: 1.2em;
}
.ui.ribbon.label:after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    background-color: transparent!important;
    border-style: solid;
    border-width: 0 1.2em 1.2em 0;
    border-color: transparent;
    border-right-color: inherit;
    width: 0;
    height: 0;
}
.ui.label {
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    margin: 0 .14285714em;
    background-color: #e8e8e8;
    background-image: none;
    padding: .5833em .833em;
    color: rgba(0,0,0,.6);
    text-transform: none;
    font-weight: 700;
    border: 0 solid transparent;
    border-radius: .28571429rem;
    -webkit-transition: background .1s ease;
    transition: background .1s ease;
}
.ui.ribbon.label {
    position: relative;
    /* margin: 0; */
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    border-radius: 0 .28571429rem .28571429rem 0;
    border-color: rgba(0,0,0,.15);
}
.ui.red.label, .ui.red.labels .label {
    background-color: #db2828!important;
    border-color: #db2828!important;
    color: #fff!important;
}
.ui.red.ribbon.label {
    border-color: #b21e1e!important;
}
</style>
