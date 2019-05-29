<template>
  <div>
    <a
      style="border-radius:500px;width:50px;height:50px; margin-left:16px; "
      class="news-btn carousel-control-prev align-self-center mr-3 btn-info"
      v-bind:href="'#'+nombre"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
  
      <a
      style="border-radius:500px;width:50px;height:50px;"
      class="news-btn derecha carousel-control-next align-self-center mr-3 btn-info"
      v-bind:href="'#'+nombre"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
  </div>
  
</template>
<script>
import Deck from "@/components/Carousel/Deck";

export default {
  data: () => ({}),
  props: ["nombre"]
};
</script>
<style>
.news-btn {
  margin-top: 20%;
}
@media only screen and (max-width: 600px) {
  .news-btn {
    margin-top: 35%;
  }
}


</style>
