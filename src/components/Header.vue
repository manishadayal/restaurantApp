<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add">Add Restaurant</router-link>
        <!--<router-link to="update">Update Restaurant</router-link>-->
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
