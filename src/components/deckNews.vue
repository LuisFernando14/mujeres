<template>
  <div class="container">
    <div class="container-fluid">
      <!---->
      <div class="card-deck">
        <div v-for="card in new1" :key="card.city" class="card border-light">
          <img src="https://picsum.photos/800/700" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{card.body}}</p>
            <p class="card-text">
              <small class="text-muted">{{card.date}}</small>
            </p>
            
          </div>
          <!--
          <div class="card-footer text-right">
            <a href="#" class="card-link ">Modal</a>
          </div>
          -->
          
        </div>
      </div>

      <!---->
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  props: ["new1"]
};
</script>
<style >
</style>