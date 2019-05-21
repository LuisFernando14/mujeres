<template>
  <div class="container">
    <div class="container-fluid">
      <!---->
      <div class="card-deck card bg-light" style="padding-top:2%;padding-bottom:2%">
        <div v-for="card in new1" :key="card.city" class="card border-light">
          <img
            v-bind:src="card.img"
            class="card-img-top news-img"
            alt="..."
          >
          <div class="card-body">
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{card.short}}</p>
            <p class="card-text">
              <small class="text-muted">{{card.date}}</small>
            </p>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Ver más</button>
          </div>
          <!---->
          
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Hola</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum porro ab sit, neque ullam culpa harum amet nulla pariatur suscipit temporibus illum optio magni quidem molestias aliquid nemo et.
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
</div>



          <!---->
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
.news-img{
  width:200px;
  height:150px;
}
@media only screen and (max-width: 600px) {
   .news-img{
    width:50px;
    height:200px;
    
  }
}



</style>