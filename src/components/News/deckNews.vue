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
            <Modal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from '@/components/News/Modal';

export default {
  data: () => ({}),
  props: ["new1"],
  components:{
    Modal,
  }
};
</script>
