<script setup>
import { useStore } from '../../store.js';
import { ref } from 'vue';
import cartpopUp from "../../views/cartpopUp.vue";
let store=useStore();
console.log(store.cartCount,store.cart)
let dialog=ref(false);
function open(){
dialog.value=true;
}
</script>

<template>
  <div>
    <div id="navbar">
      <div id="lhs">Home</div>
      <div id="rhs">
        <div>Account</div>
        <div id="cart">
          <q-icon name="shopping_bag" @click="dialog = !dialog">

</q-icon>
          <div id="cart_count">{{ store.cartCount }}</div>
        </div>
      </div>
    </div>
    <cartpopUp :dialog="dialog"/>
  </div>
</template>

<style  scoped>
#navbar{
    display: flex;
    height: 70px;
    align-items: center;
    font-size: 130%;
    border-bottom: 1px solid;
}
#lhs{
    display: flex;
    flex: 3;
    align-items: center;
}
#rhs{
    display: flex;
    flex: 7;
    align-items: center; 
    gap: 10%;
    justify-content: flex-end;  
}
#cart{
  display: flex;
  align-items: center;

}
#cart_count{
  padding-bottom: 10px;
}
</style>
