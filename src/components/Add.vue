<template>
<Header />
    <h1> Hello, Welcome to add new Restaurant page!!! </h1>
    <form class="addRestaurant">
        <input type="text" name="name" placeholder="Enter restaurant name" v-model="restaurant.name" />
        <input type="text" name="contact" placeholder="Enter phone number" v-model="restaurant.contact" />
        <input type="text" name="address" placeholder="Enter full address" v-model="restaurant.address" />
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: "Add",
    components: {
        Header
    },
/*     props: {
        modelValue: String,

    }, */
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
        async addRestaurant() {
            //console.warn(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurants", {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address
                }); // need to write or submit data
            //console.log(result);
            if (result.status == '201') {
                this.$router.push({name:"Home"});
            }
        }
    },
    mounted() { // after page is fully loaded
        let user = localStorage.getItem('user_info');
        console.log(user);
        if (!user) {
            this.$router.push({name:"SignUp"});
        }
    }
}
</script>
<style scoped>

</style>
