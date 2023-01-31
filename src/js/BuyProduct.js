import {mapGetters,mapActions} from 'vuex'
import axios from 'axios';

 export default{
    name:'Buyproduct',
    data(){
        return{}
    },
    computed:{
        ...mapGetters('BuyProduct_Store',['Getbuy']),
        ...mapGetters('User_Store',['users'])
    },
    mounted(){
        this.product_id=this.$route.query.product;
        console.log(this.product_id)
        this.GET_BUY({
     
        success:this.onSuccessofproduct,
        fail:this.onFailofproduct,
        adid:this.product_id
        })
    },
    methods:{
      
            ...mapActions('BuyProduct_Store',['GET_BUY']),
            onSuccessofproduct(data) 
            {
               console.log(data)
            },
            onFailofproduct(error){
              console.error(error);
            },
        buy_pro(){
            console.log(this.Getbuy?.data?.adid)
            console.log(this.users.userid)
            let res = axios.post(`/api/purchase?adid=${this.Getbuy?.data?.adid}&buyerid=${this.users.userid}`)
            console.log(res)
            alert("Thank you for purchasing......")
            this.$router.push("/");
        }


    }
}