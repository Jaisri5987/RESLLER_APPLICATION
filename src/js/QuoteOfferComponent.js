import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import axios from 'axios'
export default{
    name:'QuoteOfferComponent',
    data(){
        return{
           
            product_id:'',
            product:{quoteamount:" "}
        
        }
    },
    props:{
        obj:{
            type:Object,
            default:() => {}
        }
    },
    computed:{
        ...mapGetters('QuoteOffer_Store',['Getoffer']),
        ...mapGetters('User_Store',['users'])
    },
    mounted(){
        this.product_id=this.$route.query.product;
        console.log(this.product_id)
        this.GET_OFFER({
     
        success:this.onSuccessofproduct,
        fail:this.onFailofproduct,
        adid:this.product_id
        })
    },
    methods:{
        ...mapActions('QuoteOffer_Store',['GET_OFFER']),
        onSuccessofproduct(data) 
        {
           console.log("quotedoffer "+data)
        },
        onFailofproduct(error){
          console.error(error);
        },
        quote(){
           
            console.log(this.Getoffer?.data?.adid)
            console.log(this.Getoffer?.data?.title)
            console.log(this.product.quoteamount)
            console.log(this.users.userid)
            let result = axios.post(`/api/makeQuote?adid=${this.Getoffer?.data?.adid}&buyerid=${this.users.userid}&quoteamount=${this.product.quoteamount}`)
            console.log(result)
            alert('user quoted!!!')
            this.$router.push('/')
        },
        goBack() {
            this.$router.go(-1)
          },
    }
}