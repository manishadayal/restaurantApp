<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login here</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        name: 'SignUp',
        data () {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async signUp() {
                //console.log("Entered signup function call");
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email : this.email,
                    password : this.password
                });
                console.warn(result);
                if (result.status == 201) {
                    //alert("SIGNUP Successful");
                    localStorage.setItem(
                        "user_info",
                        JSON.stringify(result.data)
                    );
                    this.$router.push({name:"Home"});
                }
            }
        },
        mounted() {
        let user = localStorage.getItem('user_info');
        console.log(user);
        if (user) {
           this.$router.push({name:"Home"});
        }
        }
    }
</script>
<style scoped>

</style>
