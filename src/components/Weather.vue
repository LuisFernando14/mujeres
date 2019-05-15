<template>
  <div class="container">
    <table class="table">
      <thead class="thead-dark">
        <tr class>
          <th scope="col" colspan="4" class="bg-success">
            <h1 class="display-1">Aguacate</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="card in cards" :key="card.title">
            <div class="card text-center">
              <div class="card-header">
                <h4>{{card.state}}</h4>
              </div>

              <div class="card-body">
                <img v-bind:src="card.src" style="width:80px">

                <h5 class="card-title">{{card.title}}</h5>
                <h1 class="display-1">{{card.grade}}</h1>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!---->
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