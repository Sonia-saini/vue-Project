<script setup>
 defineProps(["welcome"])   
</script>

<template>
    <div id="welcome">
<h1>{{ welcome }}</h1>
    </div>
</template>

<style lang="css" scoped>
#welcome{
    display: flex;
    height: 200px;
    border-bottom: solid 1px black;
    justify-content: center;
    align-items: center;
    color:rgb(3, 53, 53);
}
h1{
    font-weight: 500;
    font-size: 3rem;
}
</style>