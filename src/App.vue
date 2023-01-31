<template>
  <div id="app">
    <router-view/>
    <!-- <HeaderComponent/> -->
    <!-- <HomePageComponent/> -->
    <!-- <LoginPageComponent/> -->
  <HeaderComponent/>
  


</div>
</template>

<script>
//  import {mapGetters} from "vuex";
//  import HomePageComponent from "./components/HomePageComponent.vue";
//  import vuex from "Vuex"
// import LoginPageComponent from './components/LoginPageComponent.vue';
import HeaderComponent from "./components/HeaderComponent.vue";



export default {
  name: 'App',
  components: {
    // HomePageComponent,
    // LoginPageComponent,
    HeaderComponent
    
},

  // computed:{
  //   ...mapGetters('UserStore',['user'])
  // }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
