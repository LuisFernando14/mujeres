<template>
<!-- Card Noticias -->
    <div  class="card border-light  marginn"  >
       <img v-if="auxResp" v-bind:src="news.img" class="card-img-top img " alt="...">
       <img v-else v-bind:src="news.img" class="card-img-top img-resp " alt="...">
      <div class="card-body">
            <h5 class="card-title title3">{{news.title}}</h5>
            <p v-if="auxResp" class="card-text">{{news.short}}</p>
            <p class="card-text">
              <small class="text-muted">{{news.date}}</small>
            </p>
          </div>
    </div>
</template>
<script>
export default {
  data: () => ({}),
  props: ["news","auxResp"],
};
</script>
<style>
.img{
  height: 150px;
}
.img-resp{
  height: 200px;
}
.marginn{
  padding: 1%;  
}
.title3{
  font-weight: bold;
}
</style>

