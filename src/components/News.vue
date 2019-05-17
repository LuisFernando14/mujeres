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
            date:"16 de Mayo",
            body:"Well, the wre going to mrograms. S ",
          },
          {
            title:"Mouse blanco",
            date:"16 de Mayo",
            body:"The path of the rie of charity andnd the finder of.",
          },
          {
            title:"Mouse gris",
            date:"16 de Mayo",
            body:"Your bones don't break, I dt, we choke. We get sosite ends.",
          },
          {
            title:"Mouse obscuro",
            date:"16 de Mayo",
            body:"You thinnce and got seven o man.",
          }
      ],
      new2:[
          {
            title:"Mouse rojo",
            date:"16 de Mayo",
            body:"You think water .",
          },
          {
            title:"Mouse amarillo",
            date:"16 de Mayo",
            body:"that killed the other two, but it wasn't. Nandle to man.",
          },
          {
            title:"Mouse Naranja",
            date:"16 de Mayo",
            body:"Now that there is the TecDo you thamerican crime. Like thehat shit. ",
          },
          {
            title:"Mouse amarojo",
            date:"16 de Mayo",
            body:"Now that we know who times tss.",
          }
      ],
      new3:[
          {
            title:"Mouse morado",
            date:"16 de Mayo",
            body:"You think water movknows it killeded on eachman.",
          },
          {
            title:"Mouse lila",
            date:"16 de Mayo",
            body:"Now that we know who you are and me! I should've known wlass.",
          },
          {
            title:"Mouse rosita",
            date:"16 de Mayo",
            body:"Now that there is the Tec-9,  it: the most popular gun in American crime. ",
          },
          {
            title:"Mouse purpura",
            date:"16 de Mayo",
            body:"Now that there is the Tec-9,  is advertised as t. ",
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