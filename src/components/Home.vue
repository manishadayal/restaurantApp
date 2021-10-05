<template>
<Header />
    <h1> Hello {{name}}, Welcome to my home page!!! </h1>
    <table border="1" cellpadding="10">
        <tr>
            <th>ID</th><th>Name</th><th>Phone</th><th>Address</th><th>Action</th>
        </tr>
        <tr  v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{ restaurant.id }}</td>
            <td>{{ restaurant.name }}</td>
            <td>{{ restaurant.contact }}</td>
            <td>{{ restaurant.address }}</td>
            <td><router-link :to="'/update/' + restaurant.id">Update</router-link></td>
        </tr>
    </table>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: "Home",
    data() {
        return {
            name: "",
            restaurants: [],
            }
    },
    components: {
        Header
    },
    async mounted() { // after page is fully loaded
        let user = localStorage.getItem('user_info'); // as the data stored here is in form of string so we need to parse before we can use
        this.name = JSON.parse(user).name;
        //console.log(user);
        if (!user) {
            this.$router.push({name:"SignUp"});
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        //console.warn(result);
        this.restaurants = result.data;
    }
}
</script>
<style scoped>
table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
td {
    text-align: left;
}
</style>
