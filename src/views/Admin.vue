<script setup>
//     import { ref,reactive } from 'vue';
//    const form= reactive({name:"",number:0,city:"",age:0})
   import addProduct from "../components/admincomponents/addProduct.vue"
</script>

<template>
    <div>
<h1>this is admin page</h1>
<addProduct/>
<!-- <input type="text" v-model="form.name">
<input type="number" v-model="form.number">
<input type="text" v-model="form.city">
<input type="number" v-model="form.age"> -->

<!-- {{ form }} -->
    </div>
</template>