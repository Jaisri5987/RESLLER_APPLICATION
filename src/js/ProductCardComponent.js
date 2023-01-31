import {  mapGetters } from "vuex";

import axios from 'axios';




export default {

    name: "ProductCardComponent",
    data() {
        return {
           
        }
    },
    props: {
        productobj: {
            type: Object,
            default: {}
        }
    },
    computed: {
        ...mapGetters('User_Store',['users']),
        // ...mapGetters('QuoteOffer_Store',['Getoffer']),
        ...mapGetters('Product_Store',['GetDetails'])
        
    },
    methods: {
        
        quote()
        {
            this.$router.push({name:"QuoteOfferComponent",query:{product:this.productobj.adid}})
            //  console.log("hi")
        },
        buy()
        {
            console.log('hi');
        this.$router.push({name:"BuyProduct",query:{product:this.productobj.adid}})
        
            
        },
        view()//http://5a65-115-242-133-246.in.ngrok.io/api/addView?adid=${ this.Getoffer?.data?.adid} &userid=${this.users.userid}`
        {
        
            console.log(this.productobj.adid)
            console.log(this.users.userid)
            var res = parseInt(this.productobj.adid)
            var name= parseInt(this.users.userid)
            let result = axios.post(`/api/addView?adid=${res} &userid=${name}`)
            console.log(result)
            this.$router.push('/')
        }
    },
}