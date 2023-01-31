import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './Router/Router.js'
import Product_Store from '/Users/jaisri/Documents/vue.js/vue-learn/src/Store/Product_Store.js'
import QuoteOffer_Store from '/Users/jaisri/Documents/vue.js/vue-learn/src/Store/QuoteOffer_Store.js'
import HeaderComponent from './components/HeaderComponent';
import User_Store from './Store/User_Store';
import BuyProduct_Store from './Store/BuyProduct_Store';
import History_Store from './Store/History_Store'
// import CategoryComponent from '/Users/jaisri/Documents/vue.js/vue-learn/src/components/CategoryComponent.vue';

Vue.component('HeaderComponent',HeaderComponent)
Vue.use(Vuex)
Vue.use(VueRouter)



const store = new Vuex.Store({
  modules:
  {
   Product_Store,
   QuoteOffer_Store,
   User_Store,
   BuyProduct_Store,
   History_Store
  //  CategoryComponent
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
