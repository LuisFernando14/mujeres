<template>
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-6 col-md-4">
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
