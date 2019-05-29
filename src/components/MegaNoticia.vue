<template>
  <div class="container margin-top">
  <div class="card mb-3" style="max-width:100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="news.img" class="card-img" style="width: 360px; height: 420px; object-fit: cover; object-position: center;" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title text-title">{{news.title}}</h5>
        <p class="card-text text-body">{{news.shortBody}}</p>
        <footer class="blockquote-footer text-right">{{news.fuente}} </footer>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        title:
          "Oaxaca está teniendo una exitosa temporada de exportación de mangos a EE. UU",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557935933478_close-up-color-delicious-1137355.jpg",
        shortBody:
          "El estado mexicano de Oaxaca es líder exportador de mangos en el país. Las cifras de exportaciones de 2019 son tremendamente positivas, y están cerca de la meta propuesta al principio de temporada, según datos de la Secretaría de Desarrollo Agropecuario, Pesca y Acuacultura (Sedapa).",
        fuente: "23 de Mayo 2019"
      }
    };
  }
};
</script>
<style>
</style>
