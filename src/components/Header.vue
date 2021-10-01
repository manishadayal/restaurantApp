<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Add Resturant</a>
        <a href="#">Update Resturant</a>
        <a href="#">Logout</a>
    </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name: "Header",
}
</script>
<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float:left;
    color: white;
    padding: 14px;
    text-align: center;
    font-size: 17px;
    text-decoration:none;
    margin-right: 4px
}
.nav a:hover {
    background-color: #ddd;
    color:#333
}
</style>
