<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" src="https://agrimercante.com/images/layout/logo_banner.png"
                                     alt="AgriMercnate Logo">
                            </div>
                            <br>
                            <h5 class="card-title text-center">Iniciar sesión</h5>

                            <div id="loginForm">
                                <div class="form-group">
                                    <input autofocus type="email" name="Email" class="form-control" id="Email" v-model="user.Email"
                                           placeholder="Correo electrónico">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="Password" class="form-control" id="Password" v-model="user.Password"
                                           placeholder="Contraseña">
                                </div>

                                <div class="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"> Mantener sesión iniciada
                                    </label>
                                </div>
                                <div class="form-group">
                                    <input type="button" id="btnLogin" class="form-control btn btn-lg btn-info" value="Iniciar sesión"
                                           @click="iniciarSesion">
                                </div>
                            </div>
                            <hr class="my-4">
                            <div class="text-center">
                                <p>¿Olvidaste tu contraseña?</p>
                                <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                user: {
                    Email: '',
                    Password: ''
                }
            }
        },
        mounted() {
            console.log('montado');
        },
        methods: {
            iniciarSesion() {
                this.$http.post('auth/login', this.user).then(res => {
                    // console.log(res.data.tokenHash);
                    const token = res.data.tokenHash;
                    localStorage.setItem('token', token)
                })
            },
            onDismissed() {
                this.$store.dispatch('clearError')
            }
        }
    }
</script>
