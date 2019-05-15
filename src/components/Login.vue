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
                            <form class="form-signin">
                                <div class="form-label-group">
                                    <label for="inputEmail">Correo electrónico</label>
                                    <input type="email" id="inputEmail" class="form-control"
                                           placeholder="" required autofocus>
                                </div>
                                <br>
                                <div class="form-label-group">
                                    <label for="inputPassword">Contraseña</label>
                                    <input type="password" id="inputPassword" class="form-control"
                                           placeholder="" required>
                                </div>
                                <br>
                                <div class="custom-control custom-checkbox mb-3">
                                    <label class="custom-control-label" for="customCheck1">Mantener sesión
                                        iniciada</label>
                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                </div>
                                <button style="background-color: #007b8a; color: white" class="btn btn-lg btn-block"
                                        type="submit">
                                    Iniciar sesión
                                </button>
                                <hr class="my-4">
                                <div class="text-center">
                                    <p>¿Olvidaste tu contraseña?</p>
                                    <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onSignin() {
                this.$store.dispatch('signUserLogin', {email: this.email, password: this.password})
            },
            onDismissed() {
                this.$store.dispatch('clearError')
            }
        }
    }
</script>
