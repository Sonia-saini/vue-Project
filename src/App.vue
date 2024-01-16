<template>
<div>
<Navbar></Navbar>
<!-- <HelloWorld msg="sonia" msg1="saini"/> -->
<!-- <Homepage/> -->
<router-view></router-view>
</div>
</template>
<script setup>
import  HelloWorld from "../src/components/HelloWorld.vue";
import Homepage from "../src/views/Homepage.vue"
import Navbar from "./components/Home/Navbar.vue";
</script>
<style scoped>
  
</style>
