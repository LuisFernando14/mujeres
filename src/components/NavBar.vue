<template>
  <div class="bg-success">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <a class="navbar-brand no-link" href="#">
            <h4 class="text-white" style="padding-top:10px;">{{name}}  </h4>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data: () => ({}),
  props:['name']
};
</script>
<style>
.no-link {
  color: black;
  text-decoration: none;
}
.no-link:hover {
  text-decoration: none;
  color: black;
}
</style>


