<template>
    <div class="ad">
    <h2 class="post">Post Advertisement</h2>
    <button @click="goBack" class="back-butt">
    X
    </button>
    <div class="postAD">
    <form class="form" @submit.prevent="postads" name="frm_upload">
        <br/><br/>
    <div >
    <label class="input">Title</label>
    <input v-model="product.title" type="text" placeholder="Enter the title here" class="title"/>
    </div>
    <br/>
    <br/><br/>
    <div >
    <label class="input">Sellerid</label>
    <input v-model="product.sellerid" type="text" placeholder="Enter the sellerId here" class="title"/>
    </div>
    <br/>
    <br/><br/>
    <div >
    <label class="input">Category</label>
    <select v-model="product.category" class="title">  
<option value="input here">input here</option>  
<option value="Mobile Phone">Phone</option>  
<option value="Car">Car</option>  
<option value="Laptop">Laptop</option>  
<option value="Rental House">Rental House</option>  
<option value="PG">PG</option>  
</select>       
    </div>
    <br/>
    <br/>
    <br/>
    <div >
        <label class="input" >Subcategoryname</label>
        <select v-model="product.subcategoryname" class="title">  
<option value="input here">input here</option>  
<option value="Samsung">Samsung</option>  
<option value="Asus">Asus</option> 
<option value="Lenovo">Lenovo</option> 
<option value="Dell">Dell</option> 
<option value="Kia">Kia</option>  
<option value="Skoda">Asus</option> 
<option value="1BHK">1BHK</option>
<option value="2BHK">2BHK</option>
<option value="3BHK">3BHK</option>   
<option value="Hyundai">Hyundai</option>  
<option value="Oneplus">Oneplus</option>  
<option value="Apple">Apple</option>
<option value="Single sharing">Single sharing</option>
<option value="Two sharing">Two sharing</option>
<option value="Three sharing">Three sharing</option>    

</select>       
    </div>
    <br/><br/>
    <br/>
    <div >
        <label class="input">Description</label><br/>
       
        <textarea v-model="product.description" cols="80" rows="5" value="description" class="title">  
</textarea> 

        
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/><br/><br/><br/>
    <div>
        <label class="input">Price</label>
    <input type="text" placeholder="Enter the price here" class="title" v-model="product.price" />
        
    </div>
    <br/>
    <br/><br/>
    <div >
        <label class="input">MinPrice</label>
    <input type="text" placeholder="Enter the Min price here" class="title" v-model="product.minimumprice"/>
        
    </div>
    <br/>
    <br/><br/>
    <label class="input">Images</label>
  <input type="file" id="myFile" name="filename" class="title" >
<br/> 
<div> 
    <button type="submit"  class="button1">Post AD</button>
    <button class="button2">Clear</button>
</div>
</form>
</div>
</div>
</template>
<script src="../js/AddProducts.js"></script>
<style>

@import url('../css/AddProducts.css');
</style>