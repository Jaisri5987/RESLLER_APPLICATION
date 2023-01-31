<template>
    <div class="category_page">  
       
        <div v-if="productobj.status == true " id="sold">
        <p>ProductId : {{ productobj.pid }}</p>
        <p>AdvertisementId : {{productobj.advertisementid  }}</p>
        <p>Adtitle : {{productobj.adtitle  }}</p>
        <p>BuyerName : {{productobj.buyerName }}</p>
        <p>FinalPrice : {{productobj.finalprice  }}</p>
        <p>Date : {{productobj.date }}</p>
        <hr/>
        </div>
        <div v-else-if="productobj.status == false" class="pending">
        <p>ProductId : {{ productobj.adid }}</p>
        <p>AdvertisementId :{{productobj.sellerid  }}</p>
        <p>Adtitle : {{productobj.title  }}</p>
        <p>Price : {{productobj.price  }}</p>
        <p>MinimunPrice : {{productobj.minimumprice  }}</p>
        <p> Description : {{productobj.description  }}</p> 
        <button class="approve">Approve Quote</button> 
        <hr/>  
        </div>
        <div v-else class="purchase">
        <p>ProductId :{{ productobj.pid }}</p>
        <p>AdvertisementId :{{productobj.advertisementid  }}</p>
        <p>Adtitle : {{productobj.adTitle  }}</p>
        <p>BuyerName : {{productobj.buyerName }}</p>
        <p>FinalPrice: {{productobj.finalprice }}</p>
        <p>SellerEmail : {{productobj.selllerEmail  }}</p>  
        <hr/>
        </div>
    </div>
</template>
<script src="../js/CategoryComponent.js"></script>
<style>
@import url('../css/CategoryComponent.css');

</style>