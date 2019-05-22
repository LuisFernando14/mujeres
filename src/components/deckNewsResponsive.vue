<template>
  <div class="container">
    <div id="carouselExampleInterval" class="carousel slide" data-interval="false" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" >
          <div class="card-deck card bg-light" style="padding-top:2%;padding-bottom:2%">
            <div class="card border-light">
              <img v-bind:src="img" class="card-img-top news-img" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <p class="card-text">{{short}}</p>
                <p class="card-text">
                  <small class="text-muted">{{date}}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-for="card in new1" :key="card.city" class="carousel-item" data-interval="false">
          <div class="card-deck card bg-light" style="padding-top:2%;padding-bottom:2%">
            <div class="card border-light">
              <img v-bind:src="card.img" class="card-img-top news-img" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.short}}</p>
                <p class="card-text">
                  <small class="text-muted">{{card.date}}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        style="border-radius:500px;width:40px;height:40px; "
        class="news-btn carousel-control-prev align-self-center mr-3 btn-info"
        href="#carouselExampleInterval"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        style="border-radius:500px;width:50px;height:50px; "
        class="news-btn carousel-control-next btn-info"
        href="#carouselExampleInterval"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: "EE. UU. comienza a importar el chile más picante",
    short:
      "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
    date: "17 de Mayo",
    body:
      "Han comenzado las importaciones de chile Carolina Reaper en Estados Unidos.",
    img:
      "https://portal-data1.storage.googleapis.com/news/1558026964728_background-cayenne-chili-1091778.jpg"
  }),
  props: ["new1"]
};
</script>
<style >
</style>