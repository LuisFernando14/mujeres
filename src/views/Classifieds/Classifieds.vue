<template>
    <div id="classifieds">
        <div class="container w-50 p-3">
            <!--
            <country-select v-model="country" :country="country" topCountry="US" />
            <region-select v-model="region" :country="country" :region="region" />
            -->
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">¿Qué deseas hacer?</label>
                        <select class="form-control" disabled name="sell" id="inputEmail4">
                            <option value="volvo">Vender</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Selecciona un sector</label>
                        <select class="form-control" name="sell" id="inputPassword4">
                            <option value="Agropecuario">Agropecuario</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail5">¿Qué deseas vender?</label>
                        <select class="form-control" name="sell" id="inputEmail5">
                            <option value="volvo">Producto</option>
                            <option value="volvo">Servicio</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword12">Selecciona una categoría</label>
                        <select class="form-control" name="sell" id="inputPassword12">
                            <option value="Agropecuario">Agropecuario</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputPassword16">Selecciona una subcategoría</label>
                        <select class="form-control" name="sell" id="inputPassword16">
                            <option value="Agropecuario">Agropecuario</option>
                        </select>
                    </div>
                </div>
                <h5>¿Dónde?</h5>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputAddress">País</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputAddress23">Estado</label>
                        <input type="text" class="form-control" id="inputAddress23" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputAddress4">Ciudad</label>
                        <input type="text" class="form-control" id="inputAddress4" placeholder="Apartment, studio, or floor">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    </div>
</template>
<script src="./classifieds.js"></script>
