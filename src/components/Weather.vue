<template>
  <div class="container">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header bg-success text-white">
          <h1 class="h1 text-center">Aguacate</h1>
        </div>
        <div class="card-group">
          <div v-for="card in cards" :key="card.title" class="card text-center">
            <div class="card-header">
              <h4>{{card.state}}</h4>
            </div>
            <div class="card-body">
              <img v-bind:src="card.src" style="width:80px">

              <h5 class="card-title">{{card.title}}</h5>
              <h1 class="display-4">{{card.grade}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Los Mochis",
        state: "Sinaloa",
        src: "//cdn.apixu.com/weather/64x64/day/116.png",
        flex: 3,
        grade: "27°"
      },
      {
        title: "La Huacana",
        state: "Michoacán",
        src: "//cdn.apixu.com/weather/64x64/day/299.png",
        flex: 3,
        grade: "20°"
      },
      {
        title: "AltaMirano",
        state: "Chiapas",
        src: "//cdn.apixu.com/weather/64x64/day/122.png",
        flex: 3,
        grade: "16°"
      },
      {
        title: "Obregón",
        state: "Sonora",
        src: "//cdn.apixu.com/weather/64x64/day/113.png",
        flex: 3,
        grade: "32°"
      }
    ]
  })
};
</script>