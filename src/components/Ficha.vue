<template>
  <div class="container">
    <div class="container-fluid">
      <div class="card">
        
        <div class="card-header bg-primary text-white">
          <h1 class="h4 text-center">{{cards.product}} </h1>
        </div>
        <div class="card-group">
          <div  class="card text-center">
            <div class="card-header h4">Clima </div>
            <div class="card-body">
              <img v-bind:src="cards.clima.src" style="width:60px">

              <h5 class="card-title">{{cards.clima.city}}</h5>
              <p style="font-size:2em;">{{cards.clima.grade}}c</p>
            </div>
          </div>
          <div class="card text-center">
            <div class="card-header h4">Precios </div>
            <div class="card-body">
              
              <h5 class="card-title display-4">{{cards.precio.mx}} </h5>
              <div class="row">
                <div class="col"><img v-bind:src="cards.precio.img_product" style="width:60px"></div>
                <div class="col"><img v-bind:src="cards.precio.img_price" style="width:15%" alt=""> </div>
              </div>
            </div>
          </div>
          <div  class="card text-center">
            <div class="card-header h4">Clima </div>
            <div class="card-body">
              <img v-bind:src="cards.clima.src" style="width:60px">

              <h5 class="card-title">{{cards.clima.city}}</h5>
              <p style="font-size:2em;">{{cards.clima.grade}}c</p>
            </div>
          </div>
           <div class="card text-center">
            <div class="card-header h4">Precios </div>
            <div class="card-body">
              
              <h5 class="card-title display-4">{{cards.precio.mx}} </h5>
              <div class="row">
                <div class="col"><img v-bind:src="cards.precio.img_product" style="width:60px"></div>
                <div class="col"><img v-bind:src="cards.precio.img_price" style="width:15%" alt=""> </div>
              </div>
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
    cards: {
        product:'Aguacate',
        clima:{
            city: "Cd. Guzmán",
            state: "Jalisco",
            src: "//cdn.apixu.com/weather/64x64/day/113.png",
            flex: 3,
            grade: "32°"
        },
        precio:{
            mx:'18.89',
            img_product:'https://img.icons8.com/color/50/000000/avocado.png',
            img_price:'https://image.flaticon.com/icons/png/512/89/89569.png'
        }
        
    }
  })
};
</script>