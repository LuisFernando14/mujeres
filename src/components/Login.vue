<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto" style="margin-top: 4em;">
          <div class="card card-signin my-5">
            <div class="card-body">
              <div class="text-center">
                <img class="img-fluid" src="./../assets/images/puro-sinaloa.jpg" style="height: 120px" alt="Aplicación de mujeres logo">
              </div>
              <br>
              <h5 class="card-title text-center">Iniciar sesión</h5>
              <div id="loginForm">
                <div class="form-group">
                  <input ref="Email" type="email" name="Email" class="form-control" id="Email" v-model="user.Email" placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                  <input type="password" name="Password" class="form-control" id="Password" v-model="user.Password" v-on:keyup.enter="iniciarSesion"  placeholder="Contraseña">
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Mantener sesión iniciada
                  </label>
                </div>
                <div class="form-group">
                  <input type="button" id="btnLogin" class="form-control btn btn-lg btn-info" value="Iniciar sesión" @click="iniciarSesion">
                </div>
              </div>
              <hr class="my-4">
              <div class="text-center">
                <p>¿Olvidaste tu contraseña?</p>
                <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
              </div>
              <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { finished } from 'stream';
const $ = require("jquery");

export default {
  name: 'login',
  components: {
    Loading
  },
  data() {
    return {
      user: {
        Email: '',
        Password: '',
      },
      isLoading: false,
      fullPage: true
    }
  },
  mounted() {
    console.log('montado');
  },
  methods: {
    iniciarSesion() {
      this.isLoading = true
      this.$http.post('api/users/Login', this.user).then(res => {
        if(res.data.data){
          const user = res.data.data;
          const token = res.data.token;
          localStorage.setItem('token', token)
          this.isLoading = false
          window.location.replace('/');
        }
        else {
          console.log("fe")
          this.$refs.Email.focus();
          }
        this.isLoading = false
      })
    },
    onDismissed() {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
