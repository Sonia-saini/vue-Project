<script setup>
// import products from "../../data/products.json"
import { onMounted, ref, onUpdated } from "vue";
import {getDocs,db,app,collection} from "../../firebase.js"
import { useRouter } from "vue-router";
let router=useRouter();
let incr = () => {
  count.value++;
};
console.log(getDocs,db,app,collection)
onUpdated((el) => {
  console.log("change", el);
});
let loading = ref(false);
let products = ref([]);
const showproduct=(id)=>{
  console.log(id)
  router.push(`/productdetail/${id}`)
}
onMounted(async () => {
  let div = document.getElementById("products");
  loading.value = true;
  let data=await getDocs(collection(db,"vuestore"));
  data.forEach((el)=>{
    let product=el.data();
    product.id=el.id
    products.value.push(product)})
//   let res = await fetch(`https://fakestoreapi.com/products`);
//   let data = await res.json();

  loading.value = false;
//   products.value = data;
  console.log(data);
  console.log(products.value);
});
console.log(loading);
</script>

<template>
  <div id="products">
    <div id="product" v-for="el in products" v-if="loading === false" @click="showproduct(el.id)">
  
      <img :src="el.image" width="300px" height="350px" />
      <h6>{{ el.title }}</h6>
      <p>{{ el.price }}</p>
      <p>{{ el.description }}</p>
    </div>
    <div v-else-if="loading === true">...loading</div>
  </div>
  <div>
    <button @click="incr()">+</button>
    <p>{{ count }}</p>
  </div>
</template>
<style scoped>
#products {
  margin-top: 3%;
  text-align: justify;
  width: 95%;
  height: fit-content;
  margin: auto;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
#product {
  border: 3px solid;
  padding: 10px;
  height: fit-content;
}
img {
  display: block;
  margin: auto;
  background-color: lightblue;
  padding: 10px;
}
</style>
