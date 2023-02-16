<template>
  <div class="container">
    <div class="mb-2">
      <router-link class="nav-link" active-class="active" to="/">Go Home</router-link>
      <router-link class="nav-link" active-class="active" to="/about">Go About</router-link>
      <router-link class="nav-link" active-class="active" to="/detail/123">Go Detail</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px !important;
}
.active {
  background-color: #fa6558;
  color: #fff;
}
</style>
