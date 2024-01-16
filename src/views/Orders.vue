<script setup>
import { reactive } from 'vue';
import { useStore } from '../store.js';
import {db,collection,addDoc} from "../firebase"
let store=useStore();
 let form=reactive({name:"",contact:null,address:"",orders:store.cart,total:store.cartTotal})   
 const onSubmit=async()=>{
    const docRef = await addDoc(collection(db, "orders"), form);

console.log("Document written with ID: ", docRef)
    console.log(form)
 }
</script>

<template>
    <div>
        <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        label="Name *"
  
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Contact*"
        lazy-rules

      />
      <q-input
        filled
        type="text"
        v-model="form.address"
        label="Address*"
        lazy-rules

      />
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
    </div>
</template>

<style lang="css" scoped>

</style>