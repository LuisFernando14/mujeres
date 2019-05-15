<template>
    <div id="register">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" src="https://agrimercante.com/images/layout/logo_banner.png"
                                     alt="AgriMercnate Logo">
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="inputAddress">Nombre *</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Nombre">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Apellido *</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apellido">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress3">Correo electrónico *</label>
                                    <input type="text" class="form-control" id="inputAddress3"
                                           placeholder="Correo electrónico">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress4">Contraseña *</label>
                                    <input type="text" class="form-control" id="inputAddress4"
                                           placeholder="Contraseña">
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress5">Confirmar contraseña *</label>
                                    <input type="text" class="form-control" id="inputAddress5"
                                           placeholder="Confirmar contraseña">
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck">
                                        <label class="form-check-label" for="gridCheck">
                                            Acepto <a href="">Términos y condiciones</a>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button style="background-color: #f7b334; color: white" type="button" class="btn btn-lg">Registrarse</button>
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
                name: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
                checkbox: ''
            }
        },
        computed: {
            comparePasswords() {
                return this.password !== this.confirmPassword ? 'Passwords do not match' : '' || false
            },

        },
        methods: {
            onSignin() {
                this.$store.dispatch('createUser', {
                    name: this.name,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                })
            },
        }
    }
</script>
