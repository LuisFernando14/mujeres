<template>
<div v-on:click="showOne" @mouseover="overOut">



  <div class="margi">
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">origin</th>
        <th scope="col">destination</th>
        <th scope="col">market</th>
        <th scope="col">quality</th>
        <th scope="col">packageDesc</th>
        <th scope="col" v-for="date in date">{{date.date}}</th>
      </tr>
    </thead>
    <tbody v-for="rows in rows">
      <tr>
        <td>{{rows.origin}}</td>
        <td>{{rows.destination}}</td>
        <td>{{rows.market}}</td>
        <td>{{rows.quality}}</td>
        <td>{{rows.packageDesc}}</td>

          <td v-for="ee in rows.prices">{{ee.price}}</td>
      </tr>
    </tbody>
  </table>
  </div>

</div>
</template>

<script>
const $ = require('jquery')
import axios from 'axios'

import { constants } from 'crypto';
export default {
    data() {
  	return {
      columns: [
        {
          label: 'commodity',
          field: 'commodity',
        },
        {
          label: 'destination',
          field: 'destination',
          type: 'label',
        },
        {
          label: 'freqPrice',
          field: 'freqPrice',
          type: 'number',
        },
        {
          label: 'market',
          field: 'market',
          type: 'label',
        },
        {
          label: 'origin',
          field: 'origin',
          type: 'label',
        },
        {
          label: 'packageDesc',
          field: 'packageDesc',
          type: 'label',
        },
        {
          label: 'quality',
          field: 'quality',
          type: 'label',
        },
        {
          label: 'prices',
          field: 'prices',
          type: 'object',
        },
      ],
      rows: [],
      date: []
    };
  },
  components: {
  },
  mounted(){
    var self = this;

    axios.get(`http://localhost:3500/api/SniimPrices/dailyPrices?commodityId=PgWLSiFEL44wu6DZa&startDate=2019-03-28%2000%3A00%3A00.000Z&endDate=2019-03-21%2000%3A00%3A00.000Z`)
    .then((response) => {
      //console.log(response.data.data);
      self.rows = response.data.data;
      console.log(response.data.data[0].prices)
      self.date = response.data.data[0].prices;
    })
    .catch(error => {
      console.log(error.response)
    });
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
  },
}
</script>
<style>
.margi {
  padding: 10%;
}
</style>
