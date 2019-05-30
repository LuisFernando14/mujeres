<template>
  <div class="card-row">
    <div class="card cardd marginn " style="width: 18rem;">
      <img v-bind:src="empresa.img" class="card-img-top card-image size c border" alt="...">
      <div class="card-body">
        <h5 class="card-title text-info">{{empresa.name}} </h5>
        <p class="card-text txt-body" >
          {{getText(empresa.description,120)}}
        </p>
      </div>
      <div class="card-footer text-muted">{{empresa.city}} </div>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    text:'d'
  }),
  props:['empresa'],
  methods:{
    getText: (text, lengh) =>  {
      return text.substring(0,lengh) + ' ...';
    }
  }
};
</script>
<style>
.size{
    height: 150px;
    width: 50%;
}

.cardd {
  /* the other rules */
  transition: height 0.3s, box-shadow 0.3s;
}
.cardd:hover {
  box-shadow: 1px 2px 1px 0px rgba(0,0,0,0.5);
}
.c{
    padding: 0 6px;
  float: left;
  width: 24.99999%;
}

.txt-body{
  font-size: 0.9em;
}
</style>



