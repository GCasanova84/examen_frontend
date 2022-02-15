import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  sessionStorage.setItem('user',JSON.stringify(user));
  store.commit('setUser', user ? user.email : user);  
}); */
