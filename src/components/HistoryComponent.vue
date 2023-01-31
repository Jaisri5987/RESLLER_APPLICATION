<template>
    <div class="his_pag">
    <div id="history_page">
        <div>
            <button @click="goBack" class="back">></button> 
        </div>
       <h1>History</h1>
        <div class="dropdown">
            <select @input="history">
                <option value="input here">input here</option>
                <option value="Sold">Sold</option>
                <option value="Purchase">Purchase</option>
                <option value="Pending">Pending</option>
            </select>
        </div> 
      
        <div class="data">    
            <!-- <p>{{ gethistory.data}}</p>  -->
            <!-- {{ post.categories.data.map(({name}) => name).join(' ') }} -->
              <!-- <p>{{ gethistory.data.price}} </p> -->
            <!-- <p>{{ gethistory.data[0].sellerid }}</p> -->
            <!-- <p>{{  gethistory.data[0].title }}</p>
            <p>{{ gethistory.data[0].price }}</p>
            <p>{{ gethistory.data[0].minimumprice }}</p> 
            <p>{{ gethistory.data[0].description }}</p> 
            <p v-if="gethistory.data[0].status == false">
                <button>offer</button> 
            </p>  -->
            <CategoryComponent
            v-for="(order, index) in gethistory.data"
            :key="index"
            :productobj="order"
            >hi
          </CategoryComponent>
       

        </div>
    </div>
    </div>
</template>
<script src="../js/HistoryComponent.js"></script>
<style> 
@import url('../css/HistoryComponent.css');
</style>