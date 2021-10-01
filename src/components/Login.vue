<template>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">SignUp here</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Login",
    data() {
        return{
            name:'',
            email:''
        }
    },
/*       created() {
    axios.get("http://localhost:3000/users/1").then((result) => {
      console.log(result.data);
    })
  }, */
    methods: {
        async login(){
            //console.log("Hello u r Logged in as User");
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                
            )
            console.warn(result);
            if (result.status == 200 && result.data.length > 0) {
                    //alert("SIGNUP Successful");
                    localStorage.setItem(
                        "user_info",
                        JSON.stringify(result.data[0])
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
};
</script>
<style scoped>

</style>
