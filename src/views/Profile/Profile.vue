<template>
  <div class>
    <div class="container" v-on:click="showOne" @mouseover="overOut">
      <br>
      <br>
      <br>
      <section class="d-flex justify-content-center">
        <div class="content card">
          <a id="link" v-on:click="hideInput" class="icon-link">
            <span class="lnr lnr-pencil icon"> Editar</span>
          </a>
          <img
            src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png"
            class="img-profile"
            alt="..."
          >
          <div id="info">
            <div class="card text-center intro2 border-white card-info">
              <div class="card-body">
                <h3 class="card-title">{{name}}</h3>
                <h4 class="text-muted">{{mail}} </h4>
              </div>
            </div>
          </div>
          <div id="edit-info" class="hide">
            <div class="card text-center intro2 border-white card-info">
              <div class="card-body">
                <!---------------------------------------------------------------------------->

                <table class="table">
                  <tbody>
                    <tr v-on:click="edit('name')" class="element">
                      <td id="e-name">Nombre</td>
                      <td id="e-input-name"> {{name}} </td>
                      <td id="e-input" class="hide"><input id="inputName" type="text" class="form-control" v-bind:value="name" placeholder="Nombre"  aria-label="Username" aria-describedby="basic-addon1"></td>
                    </tr>
                    <tr v-on:click="edit('correo')" class="element">
                      <td id="e-email">Correo</td>
                      <td id="e-input-email" class>{{mail}}</td>
                      <td id="e-input-e" class="hide"><input id="inputMail" type="text" class="form-control" v-bind:value="mail" placeholder="Corre Electronico" aria-label="Username" aria-describedby="basic-addon1"></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <button v-on:click="hideInput" class="btn bg-primary btn-block text-white">
                  <h5>Guardar</h5>
                </button>

                <!---------------------------------------------------------------------------->
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
const $ = require("jquery");
export default {
  data() {
  	return {
      name:'Mario Fonseca Martínez',
      mail:'mario_fmtz@hotmail.com'
    }
  },
 
  methods: {
    showOne() {
      $(".menu").removeClass("menu-show");
      $(".menu-Mobil ").addClass("menu-show-mobil");
    },
    overOut() {
      $(".menu").removeClass("menu-show");
      $(".menu-Mobil ").addClass("menu-show-mobil");
      $("#nametitle").addClass("hidename");
    },
    hideInput() {
      if ($("#info").is(":visible")) {
        $("#info").addClass("hide");
        $("#link").addClass("hide");
        $("#edit-info").removeClass("hide");
      } else {
        $("#edit-info").addClass("hide");
        $("#e-input").addClass("hide");
        $("#e-input-name").removeClass("hide");
        $("#e-input-e").addClass("hide");
        $("#e-input-email").removeClass("hide");
        $("#info").removeClass("hide");
        $("#link").removeClass("hide");
        
        this.mail = $('#inputMail').val();
        
        this.name = $('#inputName').val();
      }
    },
    edit(element) {
      if(element === 'name'){
        $("#e-input-name").addClass("hide");
        $("#e-input").removeClass("hide");
        $("#e-input-email").removeClass("hide");
        $("#e-input-e").addClass("hide");
        this.mail = $('#inputMail').val();
      }
      if(element === 'correo'){
        $("#e-input-email").addClass("hide");
        $("#e-input-e").removeClass("hide");
        $("#e-input-name").removeClass("hide");
        $("#e-input").addClass("hide");
        this.name = $('#inputName').val();
      }
      console.log('Holas')
    },
  }
};
</script>
<style>
.card-info {
  height: 100px;
}
.element:hover {
  background: rgba(168, 250, 165, 0.445);
}
.icon:hover {
  color: rgb(11, 11, 172);
}
.icon:hover {
  color: gray;
}
.icon-link {
  cursor: pointer;
  margin-left: 85%;
  margin-top: 2%;
  color: rgb(11, 11, 172);
}
.icon-link:hover {
  text-decoration: none;
  color: gray;
}
.intro {
  height: 90vh;
}
.intro2 {
  height: 40vh;
  width: 500px;
  padding: 0 7%;
  display: table;
  margin: 0;
  max-width: none;
  border-radius: 1%;
}
.img-profile {
  border: 5px solid #021a40;
  border-radius: 50%;
  height: 200px;
  margin-top: 5%;
  margin-left: 30%;
  width: 200px;
}
.edit:hover {
  color: blueviolet;
}
.hide {
  display: none;
  text-decoration: none;
}
.table{
  cursor: pointer;
}
</style>


