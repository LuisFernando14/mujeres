<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm10>
      <v-card>
        <v-container fluid grid-list-md>
          <v-toolbar color="green" dark>
            <v-toolbar-title class="display-1">Aguacate</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-layout row wrap>
            <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }">
              <v-text>
                <v-flex>
                  <img v-bind:src="card.src" style="width:25%">
                </v-flex>
              </v-text>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Aguascalientes, Aguascalientes",
        src: "//cdn.apixu.com/weather/64x64/day/113.png",
        flex: 3,
        grados: "32°"
      },
      {
        title: "Los Mochis, Sinaloa",
        src: "//cdn.apixu.com/weather/64x64/day/116.png",
        flex: 3,
        grados: "32°"
      },
      {
        title: "La Huacana, Michoacán",
        src: "//cdn.apixu.com/weather/64x64/day/299.png",
        flex: 3,
        grados: "32°"
      },
      {
        title: "AltaMirano, Chiapas",
        src: "//cdn.apixu.com/weather/64x64/day/122.png",
        flex: 3,
        grados: "32°"
      }
    ]
  })
};
</script>