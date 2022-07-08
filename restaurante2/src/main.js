import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAEYHRFqvX_RPZM6GPQZdHvFdlYbW0lBvw",
  authDomain: "p1frontend.firebaseapp.com",
  projectId: "p1frontend",
  storageBucket: "p1frontend.appspot.com",
  messagingSenderId: "700878670060",
  appId: "1:700878670060:web:5637b196b3a1264bdf7dc9"
};

firebase.initializeApp(firebaseConfig)
createApp(App).use(VueAxios, axios).use(router).mount('#app')


