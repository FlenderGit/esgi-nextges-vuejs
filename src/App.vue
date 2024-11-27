<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="flex">
      <Sidebar />
      <div class="flex-1 px-5 bg-neutral-100">
        <RouterView />
      </div>
    </div>
    <!-- <div class="wrapper"> -->
    <!--   <!-- <HelloWorld msg="You did it!" /> -->
    <!---->
    <!--   <nav> -->
    <!--     <RouterLink to="/">Home</RouterLink> -->
    <!--     <RouterLink to="/about">About</RouterLink> -->
    <!--   </nav> -->
    <!-- </div> -->
  <!-- </header> -->

</template>

