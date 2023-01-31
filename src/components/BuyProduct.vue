<template>
    <div class="page">
        <center><h1>Purchase Product</h1></center>
             <p>AdId : {{ Getbuy?.data?.adid }}</p> 
            <p>Title : {{ Getbuy?.data?.title }}</p>
            <p>Description : {{ Getbuy?.data?.description}} </p>
            <p>Price : {{ Getbuy?.data?.price}} </p> 
            <p>MinimumPrice : {{ Getbuy?.data?.minimumprice}} </p>
            <p>ViewCount : {{ Getbuy?.data?.viewcount}} </p>
            
            <center><button @click="buy_pro">BUY</button></center>
    </div>
</template>
<script src="../js/BuyProduct.js"></script>
<style> 
 @import url('../css/Buyproduct.css');
</style>