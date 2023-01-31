import ProductCardComponent from '/Users/jaisri/Documents/vue.js/vue-learn/src/components/ProductCardComponent.vue';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

// import axios from 'axios';

export default
{
    name:'HomePageComponent',
    components :
    {
        ProductCardComponent,
    
    },
    props:{
        name:String
    },
    data()
    {
        return {
            Product_list:[],
            // ErrorOccured:false,
           
        }
    },
    mounted(){
        this.GET_PRODUCTS({
            Success:this.onSuccess,
            Fail:this.onFail
        })
    },
    computed:{
        ...mapGetters('Product_Store',['GetDetails']),
        ...mapGetters('QuoteOffer_Store',['Getoffer']),
       
        
    },
    
    methods:
    {
        ...mapActions('Product_Store', ['GET_PRODUCTS']),
        ...mapActions('Product_Store', ['GET_CATEGORY']),

        // callapi()
        // {
        //     axios.get(`https://63d0f4dcd5f0fa7fbdc0a41b.mockapi.io/products`).then(
        //         (res) => {
        //             console.log(res);
        //         }
        //     ).catch((res) =>
        //     console.log('rejected',res)
            
        //     )    
    
        // }
        OnSuccess(data){
            console.log(data)
            this.Product_list=data
        },
        onFail(){
            this.ErrorOccured = true
        },
        quote()
        {
            this.$router.push('/QuoteOffer')
        }
   
    },
       
   
}