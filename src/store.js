import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStore = defineStore('cart', ()=>{
    // other options...
    let cart=ref([]);
    let cartTotal=computed(()=>cart.value.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price), 0));
    console.log(cartTotal,"cartotal")
let cartCount=computed(()=>cart.value.length)
function addtocart(product){
let match=cart.value.filter((el)=>el.id===product.id)

if(match.length>0){
 alert("product is already exist")
}else{
    cart.value.push(product);
    console.log("cart",cart.value)
   alert("succesfully add to cart")
}

}
function removecart(id){
    let data=cart.value.filter((el)=>el.id!==id);
    cart.value=data
    alert("product deleted form the cart")
}
return {cartCount,cart,addtocart,removecart,cartTotal}
  })