<template>
  <div class="container d-flex justify-content-center">
    <div class="row justify-content-md-center">
      <div class="row ">
          <div class="card-deck ">
            <div v-for="card in empresas" :key="card.city" class="col col-md-3 marginn ">
                <CardEmpresa v-bind:empresa="card"></CardEmpresa>
            </div>
          </div>
        </div>
    </div>
 </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import CardEmpresa from "@/components/Directories/CardEmpresa";

export default {
  data: () => ({
    empresas: [
      {
        name: "Agencia Aduanal Joffroy",
        img:
          "https://portal-data1.storage.googleapis.com/directories/logo/1512684887129_logo-jofrroy-1904.png",
        description:
          "Nuestro objetivo como empresa es conectar y crecer junto con nuestros clientes, empleados, proveedores y el mercado mundial a través de nuestras ofertas competitivas. Venimos de una larga historia y aún hasta el día de hoy somos fieles a nuestra misión y valores fundadores.",
        direction:
          "Blvd. Luis Donaldo Colosio, 2693 Local C-4, Col. Kennedy, 84063, Nogales, Sonora, MX",
        phone: "(631) 311-0030",
        site: "www.joffroy.com",
        city:'Nogales, Sonora.'
      },
      {
        name: "AgriNova Mexico",
        img:
          "https://portal-data-dev1.storage.googleapis.com/directories/logo/1509077216166_agri-nova-logo160x120.jpg",
        description:
          "Empresa dedicada a la investigación, fabricación y Distribución de Fertilizantes de alta calidad. Proporcionamos confianza para la cosecha a los agricultores. ",
        direction: "Los Pinos, 80128, Culiacán, Sinaloa, MX",
        phone: "(667) 715 6100",
        site: "www.agri-nova.com",
        city:'Culiacán, Sinaloa.'
      },
      {
        name: "Agricola paredes",
        img:
          "https://portal-data-dev1.storage.googleapis.com/directories/logo/1508984570555_agricolap.png",
        description:
          "Somos una empresa familiar establecida en 1981 en la región de Culiacán, Sinaloa, México. Nos dedicamos a la producción y empaque de hortalizas, así como de su comercialización en México, Estados Unidos y Canadá.",
        direction:
          "Paseo Niños Heroes Oriente N° Ext.520 N° Int. 302, 82000, Culiacán, Sinaloa, MX",
        phone: "667 760 35 40",
        site: "www.aparedes.com.mx",
        city:'Culiacán, Sinaloa.'
      },
      {
        name: "AgroSupport of Mexico",
        img:
          "https://portal-data1.storage.googleapis.com/directories/logo/1512672581569_logo-agrosupport.jpg",
        description:
          "Compañía que provee servicios de apoyo para las operaciones de logística en campos y empaques y bodegas de distribución hortofrutícolas en el área de Control de Calidad, Inocuidad Alimentaría, Responsabilidad Social, de Seguridad Física en Instalaciones y esquemas de producción, empaque y distribución de productos orgánicos. ",
        direction:
          "Calle Catedráticos 554, Chapultepec,, 80040, Culiacán Rosales, Sinaloa, MX",
        phone: "(667) 713 9592",
        site: "www.agsm.mx",
        city:'Culiacán, Sinaloa'
      },
      {
        name: "Battery Club",
        img:
          "https://portal-data1.storage.googleapis.com/directories/logo/1512671571378_logo-battery-club.jpg",
        description:
          "Distribuidores de las mejores marcas de Acumuladores para auto y camión: LTH y DURACELL",
        direction:
          "Blvd. Jiquilpan #1440-2 casi esquina con Dren Juárez. Residencial del Valle,, 81249, Los Mochis, Sinaloa, MX",
        phone: "(668) 811-5241",
        site: "www.batteryclub.mx",
        city:'Los Mochis, Sinaloa'
      }
    ]
  }),
  components: {
    NavBar,
    CardEmpresa
  },
  methods:{
    showOne() {
        $('.menu').removeClass("menu-show");
        $('.menu-Mobil ').addClass("menu-show-mobil");
        },
    overOut(){
        $('.menu').removeClass("menu-show");
        $('.menu-Mobil ').addClass("menu-show-mobil");
        $('#nametitle').addClass("hidename");
        }
  }
};
</script>
<style>

</style>



