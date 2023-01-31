<template>
    <div>
      
    <div class="Login_page">
        <button @click="goBack" class="back">></button> 
        <div >
          
       <b><h2 class="Login">LOGIN</h2></b> 
        <center><img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" width="250px" height="250px"/></center>
        <label class="username"><b>UserName   </b></label>
        <input  v-model="user.name" class="input1" type="text"/>
       </div>
       <div>
        <br/>
        <br/>
        <label class="Pass"><b>Password </b></label> 
        <input v-model="user.pass" class="input2"  type="password"/>
       </div>
            <br/>
            <br/>
        <button class="button-73" @click="logincheck">Login</button>
        <button class="button-74" @click="clear()">Clear</button>
    </div>
    </div>
   
</template>
<script src="../js/LoginPageComponent.js"></script>

<style> 
@import '../css/LoginPageComponent.css'
</style>