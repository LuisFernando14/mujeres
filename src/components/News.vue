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
            title:"EE. UU. comienza a importar el chile más picante",
            date:"17 de Mayo",
            body:"Han comenzado las importaciones de chile Carolina Reaper en Estados Unidos.",
            img:"https://portal-data1.storage.googleapis.com/news/1558026964728_background-cayenne-chili-1091778.jpg"
          },
          {
            title:"México prepara nuevos gravámenes para los productos estadounidenses",
            date:"17 de Mayo",
            body:"El tomate, uno de los alimentos más consumidos del mundo.",
            img:"https://portal-data1.storage.googleapis.com/news/1558027099270_fruits-market-colors.jpg"
          },
          {
            title:"Proyecto de mapeo de genoma del tomate sería clave para desbloquear mejor sabor",
            date:"17 de Mayo",
            body:"Científicos del Servicio de Investigación Agrícola de EE.UU.",
            img:"https://portal-data1.storage.googleapis.com/news/1558027253084_pexels-photo-428301-(1).jpeg"
          },
          {
            title:"México podría exportar plátano a China durante 2019",
            date:"17 de Mayo",
            body:"Con la firma del acuerdo fitosanitario entre China y México, se espera que este último pueda empezar a comercializar el plátano antes de que finalice el año.",
            img:"https://portal-data1.storage.googleapis.com/news/1558027392119_banana-fruit-healthy-yellow-41957.jpeg"
          }
      ],
      new2:[
          {
            title:"Presenta Seipasa su nuevo departamento de microbiología y fortalece su apuesta por la I+D+i",
            date:"17 de Mayo",
            body:"Seipasa, empresa española especializada en el desarrollo y formulación de biopesticidas, bioestimulantes y fertilizantes para la agricultura.",
            img:"https://portal-data1.storage.googleapis.com/news/1558027677856_biology-doctor-health-4154.jpg"
          },
          {
            title:"Lanzamiento de tres nuevas variedades de frambuesa «Made in Chile»",
            date:"17 de Mayo",
            body:"Santa Teresa, Santa Clara y Santa Catalina son las tres variedades de frambuesas 100% chilenas desarrolladas por el Programa de Mejoramiento Genético",
            img:"https://portal-data1.storage.googleapis.com/news/1558027999014_background-berries-close-up-1537690.jpg"
          },
          {
            title:"La innovación es el camino para el sector de berries de México y Florida",
            date:"17 de Mayo",
            body:"Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés) expresó su preocupación por los precios decrecientes de las fresas que están enfrentando los productores de Florida.",
            img:"https://portal-data1.storage.googleapis.com/news/1557936202750_accion-color-comida-1070980.jpg"
          },
          {
            title:"Un protector que reduce en un 90% la necesidad de agua y fertilizante de los árboles",
            date:"17 de Mayo",
            body:"Beneficioso para los agricultores y para el medio ambiente. Así se presenta Tree T-PEE, un contenedor de agua y nutrientes creado con plástico reciclado que se ubica en la base de los árboles para protegerlos del frío y proveerlos del agua y el fertilizante que necesitan, ni una gota más.",
            img:"https://portal-data1.storage.googleapis.com/news/1557944184119_forest-path-trees-6037.jpg"
          }
      ],
      new3:[
          {
            title:"Los mecanismos del envejecimiento vegetal",
            date:"16 de Mayo",
            body:"A diferencia de los animales que pueden evitar el estrés, las plantas han desarrollado respuestas para evadir factores que pueden ser perjudiciales para el crecimiento y la supervivencia.",
            img:"https://portal-data1.storage.googleapis.com/news/1557944417185_agriculture-cornfield-crops-55766.jpg"
          },
          {
            title:"Cómo la agricultura nos convirtió en X-Men",
            date:"16 de Mayo",
            body:"A pesar de la aureola idílica que rodea a la agricultura y de que nos conecta a la naturaleza, al más puro estilo flower power, lo cierto es que no solo fue producto de los primeros ingenieros genéticos de la historia",
            img:"https://portal-data1.storage.googleapis.com/news/1557945279941_canola-fields-1911392_1280.jpg"
          },
          {
            title:"Propone Sinaloa imponer arancel a maíz de EU",
            date:"16 de Mayo",
            body:"Ante las imposiciones de aranceles al tomate mexicano, el gobierno federal debería gravar con un arancel similar las importaciones de maíz, señaló el secretario de Agricultura y Ganadería de Sinaloa, Manuel Tarriba Urtuzuastegui.",
            img:"https://portal-data1.storage.googleapis.com/news/1557945472078_agriculture-corn-cropland-96715.jpg"
          },
          {
            title:"La innovación es el camino para el sector de berries de México y Florida",
            date:"16 de Mayo",
            body:"Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés) expresó su preocupación por los precios decrecientes de las fresas que están enfrentando los productores de Florida.",
            img:"https://portal-data1.storage.googleapis.com/news/1557936202750_accion-color-comida-1070980.jpg"
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