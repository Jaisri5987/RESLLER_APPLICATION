<template>
    <div id="product">
    <center><h1 id="head">homepage</h1></center>  
     <div >
            <ProductCardComponent
            v-for="(order, index) in GetDetails.data"
            :key="index"
            :productobj="order"
            >hi
          </ProductCardComponent>
       
         </div>
         </div>
      
 
</template>
<script src="../js/HomePageComponent.js"></script>
<style> 
@import url('../css/HomePageComponent.css');
</style>