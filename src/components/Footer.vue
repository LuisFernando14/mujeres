<template>
  <footer style="background-color:#2e2e2f;color:white;">
    <br>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-7 col-md-10  d-flex justify-content-center">
          <a href>
            <img src="https://agrimercante.com/images/footer/f-logo-neg-png.png" alt>
          </a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-7 col-md-10  d-flex justify-content-center">
          <hr style="border-top: 2px solid white;width: 70%;">
          <br>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-md-2 d-flex justify-content-center">
          <a class="aaa" href>
            <span class="f-letra">Términos de uso</span>
          </a>
        </div>
        <div class="col col-md-2  d-flex justify-content-center">
          <a class="aaa" href>
            <span class="f-letra">Privacidad</span>
          </a>
        </div>
        <div class="col col-md-2  d-flex justify-content-center">
          <a class="aaa" href>
            <span class="f-letra">Contáctanos</span>
          </a>
        </div>
      </div>
      
    </div>
    <br><br>
  </footer>
</template>
<script>
export default {
  data: () => ({})
};
</script>
<style>
.f-letra {
  color: white;
  font-size: 1.21em;
}
.f-letra:hover {
  color: rgb(0, 123, 138);
}
.aaa {
  text-decoration: none; /* no underline */
}
.aaa:hover {
  text-decoration: none; /* no underline */
}



@media only screen and (max-width: 600px) {
   .f-letra{
    font-size: 0.8em;
  }
}
</style>
