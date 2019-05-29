<template>
  <div class="container">
    <div class="container-fluid">
      <div class="card d-none d-sm-block d-none d-sm-block">
        <div class="card-header ">
          <h1 class="h4 ">Climas en Zonas productoras</h1>
        </div>
        <div class="card-header bg-success text-white">
          <h1 class="h4 text-center">Aguacate</h1>
        </div>
        <div class="card-group">
          <div v-for="card in cards" :key="card.city" class="card text-center">
            <div class="card-header">
              <h5>{{card.state}}</h5>
            </div>
            <div class="card-body">
              <img v-bind:src="card.src" style="width:60px">

              <h5 class="card-title">{{card.city}}</h5>
              <p style="font-size:2em;">{{card.grade}}c</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-sm-none">
        <ResponsiveCarousel v-bind:nombre="'weather'" class="d-sm-none" ></ResponsiveCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import ResponsiveCarousel from "@/components/Carousel/ResponsiveCarousel";

export default {
  data: () => ({
    cards: [
      {
        city: "Cd. Guzmán",
        state: "Jalisco",
        src: "//cdn.apixu.com/weather/64x64/day/113.png",
        flex: 3,
        grade: "32°"
      },

      {
        city: "Morelia",
        state: "Michoacán",
        src: "//cdn.apixu.com/weather/64x64/day/299.png",
        flex: 3,
        grade: "20°"
      },
      {
        city: "Uruapan",
        state: "Michoacán",
        src: "//cdn.apixu.com/weather/64x64/day/116.png",
        flex: 3,
        grade: "27°"
      },

      {
        city: "Zamora",
        state: "Michoacán",
        src: "//cdn.apixu.com/weather/64x64/day/122.png",
        flex: 3,
        grade: "16°"
      }
    ],
    
  }),
  components:{
    ResponsiveCarousel

  }
};
</script>