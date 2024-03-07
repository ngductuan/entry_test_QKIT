<template>
  <div>
    <Header />
    <div class="container-fluid">
      <Home/>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import Header from "./components/layouts/Header.vue";
import Nav from "./components/layouts/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Nav,
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
@import "@/styles/margin.scss";
</style>
