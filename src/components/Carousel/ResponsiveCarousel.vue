<template>
  <div class="">
    <div  class="container-fluid">
      <div
        v-bind:id="nombre"
        class="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
      <!-- Mandamos llamar una noticia individual para el primer item -->
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <!-- Para Noticias -->
            <Deck v-if="nombre === 'noticias'" v-bind:news="newOne" v-bind:auxResp="false"></Deck>
            <!-- Para Clima -->
            <Deck v-if="nombre === 'weather'" v-bind:news="cardsOne" v-bind:auxResp="false"></Deck>
          </div>
      <!-- Iteramos con todas las noticias que tengamos -->
          <div v-for="card in news" :key="card.city" class="carousel-item">
            <Deck v-bind:news="card" v-bind:auxResp="false"></Deck>
          </div>
          <btn v-bind:nombre="nombre" class="d-sm-none news-btn" ></btn>
        </div>

      </div>
      
    </div>
 
  </div>
</template>
<script>
import Deck from "@/components/Carousel/Deck";
import btn from "@/components/Carousel/btn";

export default {
  data: () => ({
    cardsOne:
    {
        city: "Cd. Guzmán",
        state: "Jalisco",
        src: "//cdn.apixu.com/weather/64x64/day/113.png",
        flex: 3,
        grade: "32°"
      },
    cards: [
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
    newOne:
    {
        title: "EE. UU. comienza a importar el chile más picante",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Han comenzado las importaciones de chile Carolina Reaper en Estados Unidos.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558026964728_background-cayenne-chili-1091778.jpg"
      },

    news: [
      {
        title: "México prepara nuevos gravámenes para los productos",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body: "El tomate, uno de los alimentos más consumidos del mundo.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558027099270_fruits-market-colors.jpg"
      },
      {
        title: "Proyecto de mapeo de genoma del tomate sería clave ",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body: "Científicos del Servicio de Investigación Agrícola de EE.UU.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558027253084_pexels-photo-428301-(1).jpeg"
      },
      {
        title: "México podría exportar plátano a China durante 2019",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Con la firma del acuerdo fitosanitario entre China y México, se espera que este último pueda empezar a comercializar el plátano antes de que finalice el año.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558027392119_banana-fruit-healthy-yellow-41957.jpeg"
      },
      {
        title: "Presenta Seipasa su nuevo departamento de microbiología ",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Seipasa, empresa española especializada en el desarrollo y formulación de biopesticidas, bioestimulantes y fertilizantes para la agricultura.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558027677856_biology-doctor-health-4154.jpg"
      },
      {
        title:
          "Lanzamiento de tres nuevas variedades de frambuesa «Made in Chile»",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Santa Teresa, Santa Clara y Santa Catalina son las tres variedades de frambuesas 100% chilenas desarrolladas por el Programa de Mejoramiento Genético",
        img:
          "https://portal-data1.storage.googleapis.com/news/1558027999014_background-berries-close-up-1537690.jpg"
      },
      {
        title:
          "La innovación es el camino para el sector de berries de México y Florida",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés) expresó su preocupación por los precios decrecientes de las fresas que están enfrentando los productores de Florida.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557936202750_accion-color-comida-1070980.jpg"
      },
      {
        title: "Un protector que reduce en un 90% la necesidad de agua ",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "17 de Mayo",
        body:
          "Beneficioso para los agricultores y para el medio ambiente. Así se presenta Tree T-PEE, un contenedor de agua y nutrientes creado con plástico reciclado que se ubica en la base de los árboles para protegerlos del frío y proveerlos del agua y el fertilizante que necesitan, ni una gota más.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557944184119_forest-path-trees-6037.jpg"
      },
      {
        title: "Los mecanismos del envejecimiento vegetal",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "16 de Mayo",
        body:
          "A diferencia de los animales que pueden evitar el estrés, las plantas han desarrollado respuestas para evadir factores que pueden ser perjudiciales para el crecimiento y la supervivencia.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557944417185_agriculture-cornfield-crops-55766.jpg"
      },
      {
        title: "Cómo la agricultura nos convirtió en X-Men",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        date: "16 de Mayo",
        body:
          "A pesar de la aureola idílica que rodea a la agricultura y de que nos conecta a la naturaleza, al más puro estilo flower power, lo cierto es que no solo fue producto de los primeros ingenieros genéticos de la historia",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557945279941_canola-fields-1911392_1280.jpg"
      },
      {
        title: "Propone Sinaloa imponer arancel a maíz de EU",
        date: "16 de Mayo",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        body:
          "Ante las imposiciones de aranceles al tomate mexicano, el gobierno federal debería gravar con un arancel similar las importaciones de maíz, señaló el secretario de Agricultura y Ganadería de Sinaloa, Manuel Tarriba Urtuzuastegui.",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557945472078_agriculture-corn-cropland-96715.jpg"
      },
      {
        title:
          "La innovación es el camino para el sector de berries de México y Florida",
        date: "16 de Mayo",
        body:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés) expresó su preocupación por los precios decrecientes de las fresas que están enfrentando los productores de Florida.",
        short:
          "Recientemente, la Asociación de Productores de Fresas de Florida (FSGA, por sus siglas en inglés)",
        img:
          "https://portal-data1.storage.googleapis.com/news/1557936202750_accion-color-comida-1070980.jpg"
      }
]}),
  components: {
    Deck,
    btn
  },
  props: ["nombre"],
};
</script>


