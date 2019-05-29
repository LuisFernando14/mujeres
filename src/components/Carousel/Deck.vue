<template>
  <div >
      <!-- Cuando es modo normal ( Noticias )-->
      <div v-if="auxResp" class="card-deck bg-light " style=" padding-top:2%;padding-bottom:2%;">
        <Card v-for="card in news" :key="card.city" v-bind:news="card" v-bind:auxResp="true"></Card>
      </div>
      <!-- Cuando es modo responsivo -->
      <div v-else class="card-deck bg-light" style=" padding-top:2%;padding-bottom:2%;">
        <Card v-bind:news="news"></Card>
      </div>
  </div>
</template>
<script>
import Card from "@/components/Carousel/Card";
export default {
  data: () => ({}),
  props: ["news","auxResp"],

  components: {
    Card
  }
};
</script>
