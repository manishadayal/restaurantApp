<template>
 <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body {
    padding:0;
    margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.register input, .login input, .addRestaurant input, .updateRestaurant input {
    width: 300px;
    height: 30px;
    padding-left:20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button, .login button, .addRestaurant button, .updateRestaurant button {
    width: 320px;
    border: 1px solid skyblue;
    background: skyblue;
    padding:10px;
    border: 1px solid cyan;
    color: white;
    cursor: pointer;
}
</style>
