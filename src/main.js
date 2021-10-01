import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import axios from 'axios';
//import VueAxios from 'vue-axios';

createApp(App).use(router).mount('#app');
