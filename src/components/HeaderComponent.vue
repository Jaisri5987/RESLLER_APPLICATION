<template>
    <div>
    <div class="Header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/OLX_Logo.jpg/800px-OLX_Logo.jpg"  class="img" width="100px" height="79px"/>
        <p class="name"><b> Hello {{ users.username }}...</b></p>
         <button class="login" @click="Login_Page()" >{{ btntoggle }}</button>
        <button class="sell" @click="Add_products">+ Sell</button>
        <button class="history" @click="history()">History</button>
    </div>
    <div class="category"> 
 <label @click="category('Phone')" class="Phone" >Phone</label>
        <select @input="subcategory"  class="phone-sub-category">
            <option value="input here" >input here</option>  
            <option value="Apple"  >Apple</option> 
            <option value="Oneplus"  >Oneplus</option> 
            <option value="Samsung" >Samsung</option> 
        </select>
        <button class="Laptop" >  <label @click="category('Laptop')" >Laptop</label></button> 
        <select  @input="subcategory"  class="Laptop-sub-category">
            <option value="input here">input here</option>  
            <option value="Asus"  >Asus</option> 
            <option value="Lenovo" >Lenovo</option> 
            <option value="Dell">Dell</option> 
        </select>
        <button class="cars" >  <label @click="category('Cars')" >Cars</label></button> 
        <select  @input="subcategory"  class="car-sub-category">
            <option value="input here">input here</option>  
            <option value="Hyundai" >Hyundai</option> 
            <option value="Kia" >Kia</option> 
            <option value="Skoda" >Skoda</option> 
        </select>
        <button class="RentalHouses"> <label @click="category('Rental Houses')" >Rental Houses</label></button> 
        <select  @input="subcategory" class="Rental-sub-category" >
            <option value="input here">input here</option>  
            <option value="1BHK" >1BHK</option> 
            <option value="2BHK" >2BHK</option> 
            <option value="3BHK" >3BHK</option> 
        </select>
        <button  class="PG">  <label @click="category('PG')" >PG</label></button> 
        <select  @input="subcategory" class="PG-sub-category" >
            <option value="input here">input here</option>  
            <option value="Single sharing" >Single sharing</option> 
            <option value="Two sharing"  >Two sharing</option> 
            <option value="Three sharing" >Three sharing</option> 
        </select>
        
    </div>
</div>
</template>
<style> 
      @import url('../css/HeaderComponent.css');
</style>
<script src="../js/HeaderComponent.js"> 

</script>