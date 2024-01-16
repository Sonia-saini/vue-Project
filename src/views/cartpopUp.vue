<script setup>
import {ref} from "vue";
import { useStore } from "../store.js";
let position=ref("right");
let store=useStore()
defineProps(["dialog"])
</script>
<style scoped>
#cart{
  margin-top: 10%;
  height: 900px;
}
#product{
display: flex;
gap: 20px;
justify-content: space-evenly;

}
#proceed{
    margin-top: 5%;
    margin-bottom: 5%;
}
a{
    text-decoration: none;
}
#rhs{
    display: grid;
    justify-content: space-between;
    gap: 10px;
}
</style>
<template>
    <div class="">
      <q-dialog :modelValue="dialog" :position="position" :seamless="true">
        <q-card  id="cart">
  
          <q-card-section class="" id="cart_section">
            <div>
<h4>Recently added product</h4>
            </div>
  
            <q-space />
  <div id="cart_products" v-for="el in store.cart">
  <div id="product">
  <div id="lhs"><img :src="el.image"  width="100px" height="150px"/></div>
  <div id="rhs">  <p>Name :- {{ el?.title }}</p>
      <p>Price :- {{ el?.price }}</p>
      <q-icon name="delete" @click="store.removecart(el.id)">

</q-icon>
       </div>

  </div>
  </div>
<div id="proceed">
<RouterLink to="/orders">
<q-btn color="secondary" label="Procced"></q-btn></RouterLink>
</div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </template>


  