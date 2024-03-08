<template>
  <div>
    <Header @nav-click="navClick"/>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { provide, ref, watch, onUnmounted, watchEffect } from 'vue'
import Home from "@/views/Home";
import Header from "./components/layouts/Header.vue";
import Nav from "./components/layouts/Nav.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Nav,
  },
  setup(){
    let navBool = ref(false)

    let navClick = () => {
      navBool.value = !navBool.value
    }

    provide('navClick', navBool);

    return {
      navClick,
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
@import "@/styles/margin.scss";
</style>
