<script setup>
import { useRoute } from 'vue-router';
import { onMounted,ref } from 'vue';
import {  collection,db,doc,getDoc} from '../firebase';
import { useStore } from '../store.js';
let product=ref({});
   const {id}=useRoute().params;
   console.log(id);
   let store=useStore();
   const addtocart=(product)=>{
    store.addtocart(product)
   }
   onMounted(async() => {
    const docRef = doc(db, "vuestore", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
     product.value=docSnap.data();
    product.value.id=docSnap.id
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
   });
   console.log("cart",store.cart)
</script>

<template>
    <div id="container">
    <div>
        <img :src="product?.image" width="300px" height="350px" /></div>

 <div id="sub">    <h6>{{ product?.title }}</h6>
      <p>{{ product?.price }}</p>
      <p>{{ product?.description }}</p>
      <q-btn color="black" @click="addtocart(product)">Add To Cart</q-btn></div> 
    </div>
</template>

<style lang="css" scoped>
#container{
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
}
#sub{
    display: grid;
}
</style>