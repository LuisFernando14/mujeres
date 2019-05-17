<template>
  <div class="container">
    <div class="container-fluid">
      <div class="card">
        <div class="row">
          <div class="col-6 col-md-4" style="margin-top: 0; padding-top: 0">
            <img :src="news.img" width="350" class="rounded-lg" style="width: 350px; height: 220px; object-fit: cover; object-position: center; margin-top: 0; padding-top: 0">
          </div>
          <div class="col-12 col-md-8">
            <div class="text-right" style="padding-top: 1em">
              <span style="padding-right: 2em; background-color: yellow; font-size: 1.5em; border-radius: 8px" class="text-right">Lo más leído</span>
            </div>
            <h2>{{news.title}}</h2>
            <p style="top: 12px;">{{news.shortBody}}</p>
          </div>
        </div>
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
.ui.red.labels .label:hover, a.ui.red.label:hover {
    background-color: #d01919!important;
    border-color: #d01919!important;
    color: #fff!important;
}
.ui.red.ribbon.label {
    border-color: #b21e1e!important;
}
a.ui.label:hover, a.ui.labels .label:hover {
    background-color: #e0e0e0;
    border-color: #e0e0e0;
    background-image: none;
    color: rgba(0,0,0,.8);
}
.ui.red.label, .ui.red.labels .label {
    background-color: #db2828!important;
    border-color: #db2828!important;
    color: #fff!important;
}
.ui.ribbon.label {
    left: calc(-1rem - 1.2em);
    margin-right: -1.2em;
    padding-left: calc(1rem + 1.2em);
    padding-right: 1.2em;
}
.ui.ribbon.label {
    position: relative;
    margin: 0;
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    border-radius: 0 .28571429rem .28571429rem 0;
    border-color: rgba(0,0,0,.15);
}
.ui.label:first-child {
    margin-left: 0;
}
a.ui.label {
    cursor: pointer;
}
.ui.label, .ui.labels .label {
    font-size: .85714286rem;
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
.ui.segment, .ui.segments .segment {
    font-size: 1rem;
}.ui.grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 0;
}
.ui.labels a.label:hover:before, a.ui.label:hover:before {
    color: rgba(0,0,0,.8);
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
.centrado{
    position: absolute;
    top: 5%;
    left: 10%;
    transform: translate(12%, 0%);
}
</style>
