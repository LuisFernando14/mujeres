<template>
<div class="container" v-on:click="showOne" @mouseover="overOut">
    <div id="classifieds" >
        <div class="container">
            <div class="row">
                <div class="col-sm-10 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-11">
                                        <h1>Agregar clasificado</h1>
                                    </div>
                                    <div class="col-1 text-left">
                                        <img style=""
                                             src="https://datastorageusers.blob.core.windows.net/images/image.png"
                                             alt="">
                                    </div>
                                </div>
                                <hr>
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
                                        <select class="form-control" @change="setCat(sortType)" name="sell"
                                                id="inputPassword12" v-model="sortType">
                                            <option :click="hazAlgo" v-for="category in categories"
                                                    :key="category.value" :value="category.value">{{ category.text }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputPassword16">Selecciona una subcategoría</label>
                                        <select class="form-control" @change="setSub(sortType)" name="sell"
                                                id="inputPassword16" v-model="sortType">
                                            <option :click="hazAlgo" v-for="sub in subcategories" :key="sub.value"
                                                    :value="sub.value">{{ sub.text }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <h5>¿Dónde?</h5>
                                <div class="form-row">
                                    <div class="form-group col-md-10">
                                        <label for="search_term">Seleccione un lugar</label>
                                        <input ref="autocomplete"
                                               placeholder="Buscar ubicación"
                                               class="search-location form-control"
                                               id="search_term"
                                               type="text"/>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label for="inputZip">Código postal</label>
                                        <input type="text" class="form-control" id="inputZip">
                                    </div>
                                </div>
                                <hr>
                                <h4>Descripción del producto</h4>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="productTitle">Título</label>
                                        <input type="text" placeholder="Ingrese un título" class="form-control" name="productDesc" id="productTitle">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="productDesc">Descripción</label>
                                        <input type="text" placeholder="Ingrese descripción" class="form-control" name="productDesc" id="productDesc">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="productPrice">Precio</label>
                                        <input type="number" placeholder="$0.00 MXN" class="form-control" name="productDesc" id="productPrice">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="productUnit">Unidad</label>
                                        <input type="text" placeholder="Kg, c/u, lb" class="form-control" name="productDesc" id="productUnit">
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="negotiablePrice">Promoción (Opcional)</label>
                                        <input type="text" placeholder="Ej. 2 x 1/2" class="form-control" name="productDesc" id="negotiablePrice">
                                    </div>
                                </div>
                                <hr>
                                <h4>Descripción del vendedor</h4>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="productUserEmail">Correo electrónico</label>
                                        <input type="text" placeholder="Ingrese un título" class="form-control" name="productDesc" id="productUserEmail">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="productUserPhone">Teléfono</label>
                                        <input type="text" placeholder="Ingrese descripción" class="form-control" name="productDesc" id="productUserPhone">
                                    </div>
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-info">Publicar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--
        <country-select v-model="country" :country="country" topCountry="US" />
        <region-select v-model="region" :country="country" :region="region" />
        -->
    </div>
    </div>
</template>
<script src="./classifieds.js">
</script>