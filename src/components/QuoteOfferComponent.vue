<template>
    <div>
        <div class="Quote">
            <div class="quote_box">
        <button @click="goBack" class="back_button">Back</button>
        <h2 class="head">Make an Quote Offer</h2>
        
         <div class="image"> 
             <!-- <img :src="Getoffer.data.Image" @click="showDescription()" width="410px" height="350px" /> -->
        </div> 
        <div class="content">
            <!-- <p>{{ Getoffer.data.id}} </p>    -->
            <p>AdId : {{ Getoffer?.data?.adid }}</p> 
            <p>Title : {{ Getoffer?.data?.title }}</p>
            <p>Description : {{ Getoffer?.data?.description}} </p>
            <p>Price : {{ Getoffer?.data?.price}} </p> 
            <p>MinimumPrice : {{ Getoffer?.data?.minimumprice}} </p>
            <label>Quote a Price</label>
            <input type="text" class="offer_quote" v-model="product.quoteamount" /><br/><br/>
            <button class ="button" @click="quote">Make Quote</button>
        </div>
        </div>
    </div>
</div>
</template>
<script src="../js/QuoteOfferComponent.js">
</script>
<style >
@import url('../css/QuoteOfferComponent.css');
</style>