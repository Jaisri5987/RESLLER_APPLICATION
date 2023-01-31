import { mapActions, mapGetters } from "vuex"

// import LoginPageComponent from '../components/LoginPageComponent'
import (mapGetters)
export default {
    name:'HeaderComponent',
    components:{
       
    },
    data(){
        return{
               btntoggle:'LOGIN',
                productobj:[],       
               
        }

    },
    
    mounted(){
        

    },
    computed:{
        ...mapGetters('History_Store',['gethistory']),
       ...mapGetters('User_Store',['users']),
        ...mapGetters('Product_Store',['GetDetails']),
        Getproducts:()=>{
            console.log(this.GetDetails)
            this.productobj=this.GetDetails;
        }
      
    },
    methods:{
        ...mapActions('Product_Store',['GET_CATEGORY']),
        ...mapActions('Product_Store',['GET_SUBCATEGORY']),
        Login_Page()
        {
            if(this.btntoggle ==='LOGIN')
            {
                this.btntoggle = 'LOGOUT' 
              
            }
            else{
                this.btntoggle = 'LOGIN'
            }
            
            
            this.$router.push('/login')   

        },
        Add_products()
        {
            this.$router.push('/Addproduct')
        },
        history()
        {
            this.$router.push('/historycomp')

        },
       
        category(value)
        {
            alert(value)
            // console.log(value)
          //  this.$router.push({name:"HomePageComponent",query:{category_name:value}})
            this.GET_CATEGORY({
                Success:this.onSuccessofproduct,
                Fail:this.onFailofproduct,
                category:value
            })
        },
       
        subcategory(event)
        {
           
            let value=event.target.value;
            alert(value)
            this.GET_SUBCATEGORY({

                Success:this.onSuccessofproduct,
                Fail:this.onFailofproduct,
                subcategory: value
            })
        },

       
        onSuccessofproduct(data) 
        {
           console.log(data)
        },
        onFailofproduct(error){
          console.error(error);
        },
       

    }
}
