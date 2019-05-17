<template>
  <div class="container ">
    <div class="container-fluid border-dark">
      <!---->

      <div id="carouselExampleControls" class="carousel slide " data-interval="false" data-ride="carousel">
        <div class="carousel-inner">

        <div  class="carousel-item active">
            <deckNews v-bind:new1="new1"></deckNews>
        </div>
         <div  class="carousel-item ">
            <deckNews v-bind:new1="new2"></deckNews>
        </div>
         <div  class="carousel-item ">
            <deckNews v-bind:new1="new3"></deckNews>
        </div>
          
          
        </div>
        
        <a
          style="border-radius:500px;width:50px;height:50px; margin-top:20%;"
          class="carousel-control-prev bg-info align-self-center mr-3"
          
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
        
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only ">Previous</span>
        </a>
        <a
          style="border-radius:500px;width:50px;height:50px; margin-top:20%;"
          class="carousel-control-next bg-info"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!---->
    </div>
  </div>
</template>
<script>
import DeckNews from '@/components/deckNews';
export default {
  data: () => ({
      new1:[
          {
            title:"Mouse negro",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
          },
          {
            title:"Mouse blanco",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse gris",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse obscuro",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          }
      ],
      new2:[
          {
            title:"Mouse rojo",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse amarillo",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse Naranja",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse amarojo",
            date:"17 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          }
      ],
      new3:[
          {
            title:"Mouse morado",
            date:"16 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse lila",
            date:"16 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          },
          {
            title:"Mouse rosita",
            date:"16 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
          },
          {
            title:"Mouse purpura",
            date:"16 de Mayo",
            body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          }
      ]
      

  }),
  components: {
    DeckNews,
  }
};
</script>
<style >

</style>