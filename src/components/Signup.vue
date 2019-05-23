<template>
    <div id="signup">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 mx-auto" style="margin-top: 4em;">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" src="https://agrimercante.com/images/layout/logo_banner.png"
                                     alt="AgriMercnate Logo">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Nombre</label>
                                <input type="text" v-model="user.Name" class="form-control" id="inputAddress" autofocus
                                       placeholder="Nombre">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Apellido</label>
                                <input type="text" v-model="user.LastName" class="form-control" id="inputAddress2"
                                       placeholder="Apellido">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress3">Correo electrónico</label>
                                <input type="text" v-model="user.Email" class="form-control" id="inputAddress3"
                                       placeholder="Correo electrónico">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress4">Contraseña</label>
                                <input type="password" v-model="user.Password" class="form-control" id="inputAddress4"
                                       placeholder="Contraseña">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress5">Confirmar contraseña</label>
                                <input type="password" v-model="confirmPassword" class="form-control" id="inputAddress5"
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
                            <div class="text-right"><input type="button" id="btnLogin" class="form-control btn btn-lg" style="background-color: #f7b334" value="Registrarse"
                                                           @click="register">
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
        name: 'signup',
        data() {
            return {
                user: {
                    Name: '',
                    LastName: '',
                    Email: '',
                    Password: ''
                },
                confirmPassword: ''
            }
        },
        computed: {
            comparePasswords() {
                return this.user.Password !== this.confirmPassword ? 'Passwords do not match' : '' || false
            },

        },
        methods: {
            register() {
                console.log('vamos a registrar')
                this.$http.post('api/usuarios', this.user).then(res => {
                    const token = res.data.id;
                    localStorage.setItem('token', token)
                    // console.log(res);
                    //this.$router.push('/');
                    window.location.replace('/');
                })
            },
        }
    }
</script>
