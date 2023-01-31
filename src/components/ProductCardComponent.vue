<template>
    <div>
     <div class="display">
            <!-- {{ productobj }} -->
            <!-- {{ productobj?.imgpath }} -->
        
        <!-- <center><img src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="image" width="110px" height="150px"/></center> -->
        <!-- <img :src="productobj?.imgpath"  width="110px" height="150px" /> -->
       <center><div>
        <p>AdvertisementId : {{ productobj.adid }}</p>
        <p>Title : {{ productobj.title }}</p>
        <p>Description : {{ productobj.description}}</p>
        <p>Price : {{ productobj.price}}</p>
        <p>TopQuotedAmount  : {{productobj.topQuotedAmount}}</p>
        <p>Date : {{ productobj.postedDate   }}</p>

        <!-- <p>{{ GetDetails }}</p> -->
<br/></div></center> 
   <div class="tag-button">   
        <button @click="view" class="views">View {{ productobj.viewcount }}</button>
        <button @click="buy()" class="buy">Buy</button> 
        <button @click="quote" class="offer">Make Offer</button> 
    </div>
   
    </div>  
   
</div>
  
</template>
<script src="../js/ProductCardComponent.js"></script>
<style>
@import url('../css/ProductCardComponent.css');

</style>