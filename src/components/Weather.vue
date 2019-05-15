<template>
<v-layout align-center justify-center row fill-height>
    <v-flex xs12 sm10>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
        <v-toolbar color="green" dark>
        <v-toolbar-title class="display-1">Aguacate</v-toolbar-title>
        <v-spacer></v-spacer>
        
      </v-toolbar>

          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card >
             
                <!---->
                <v-card-title class="headline font-weight-bold">
                    {{card.title}}
                </v-card-title>
                <v-card-text>
               <!--<v-img :src="card.src"></v-img>-->
               <v-container>
                   <v-layout>
                       <v-flex><img v-bind:src="card.src" style="width:70%"></v-flex>
                       <v-flex><h2 class="display-3"> {{card.grados}}</h2></v-flex>
                   </v-layout>
               </v-container>

 
                </v-card-text>
                
                <!---->
                
                

              </v-card>
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
        { title: 'Aguascalientes, Aguascalientes', src: '//cdn.apixu.com/weather/64x64/day/113.png', flex: 3,grados:'32°' },
        { title: 'Los Mochis, Sinaloa', src: '//cdn.apixu.com/weather/64x64/day/116.png', flex: 3 ,grados:'32°'},
        { title: 'La Huacana, Michoacán', src: '//cdn.apixu.com/weather/64x64/day/299.png', flex: 3 ,grados:'32°'},
        { title: 'AltaMirano, Chiapas', src: '//cdn.apixu.com/weather/64x64/day/122.png', flex: 3 ,grados:'32°'}
      ]
    })
  }
</script>