<template>
<Header />
    <h1> Hello, Welcome to update Restaurant page!!! </h1>
        <form class="updateRestaurant">
        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurant.name" />
        <input type="text" name="contact" placeholder="Enter phone number" v-model="restaurant.contact" />
        <input type="text" name="address" placeholder="Enter full address" v-model="restaurant.address" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios'

export default {
    name: "Update",
    components: {
        Header
    },
    data() {
        return {
           restaurant: {
                name:'',
                contact: '',
                address: '',
           }
            
        }
    },
    methods: {
        async updateRestaurant() {
            //console.warn(this.restaurant);
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address
                }); // need to write or submit data
            //console.log(result);
            if (result.status == '200') {
                this.$router.push({name:"Home"});
            }
        }
    },
    async mounted() { // after page is fully loaded
        let user = localStorage.getItem('user_info');
        //console.log(user);
        if (!user) {
            this.$router.push({name:"SignUp"});
        }
        //console.warn(this.$route.params.id);
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        console.warn(result.data);
        this.restaurant = result.data;
    }
}
</script>
<style scoped>

</style>
