<template>
<v-content>
<v-container grid-list-xl text-xs-center>
  <v-layout row wrap justify-center >
    <v-flex v-for="i in 4" :key="`3${i}`" xs2>
      <v-card>
        <v-img :aspect-ratio="16/9" src="https://portal-data1.storage.googleapis.com/news/1557528571941_descarga.jpg">
          <v-layout pa-2 column fill-height class="lightbox white--text">
          </v-layout>
        </v-img>
        <v-card-title primary-title>
          <div>
            <div class="headline">Dean Taylor Highlights SUNSET® MAP English Cucumbers for Foodservice</div>
 v-       </div>
        </v-card-title>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>

        <v-card-actions>
          <v-btn flat>Compartir</v-btn>
          <v-btn flat color="purple">Ver más</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</v-content>
</template>

<script>

export default {
  name: 'NewsComp',
    data: () => ({
      show: true
    })
  }
</script>
