// import axios from 'axios'
import {  mapGetters } from 'vuex';
export default{
    name: "CategoryComponent",
    components:{},
    data(){

        return{}
    },
    props: {
        productobj: {
            type: Object,
            default: {}
        }
    },
    mounted(){
        console.log(this.productobj)
    },
    computed:{
        ...mapGetters('History_Store',['gethistory']),

    },
    method:{

        
    }

}