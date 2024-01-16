<template>
    <div>
      <h1>welcome {{msg}} {{msg1}}</h1>
      <button @click=incr()>increment</button>  
<h3>{{count}}</h3>
    </div>
</template>
// compostion api
<script setup>
import {ref} from "vue"
    defineProps(["msg","msg1"])
let count=ref(0);
function incr(){
    console.log(count.value)
    count.value++
}
</script>
<style scoped></style>