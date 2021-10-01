<template>
<Header />
    <h1> Hello, Welcome to add new Resturant page!!! </h1>
</template>
<script>
import Header from './Header.vue'

export default {
    name: "Add",
    components: {
        Header
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
