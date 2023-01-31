import {mapGetters,mapActions} from 'vuex'
import CategoryComponent from '../components/CategoryComponent'

export default{
    name:'HistoryComponent',
    components :{
        CategoryComponent 
    },
    data(){
        return{}
    },
    computed:{
       ...mapGetters('History_Store',['gethistory']),
       ...mapGetters('User_Store',['users'])
    },

    mounted(){
    },
    methods:{
        ...mapActions('History_Store',['GET_SOLDPRODUCTS'],),
        ...mapActions('History_Store',['GET_PENDINGPRODUCTS'],),
        ...mapActions('History_Store',['GET_PURCHASEPRODUCTS'],),

        history(event)
        {
            let value=event.target.value;
            console.log(value)
            console.log(this.users.userid)
            if(value === 'Sold')
            {
                this.GET_SOLDPRODUCTS({
                    Success:this.onSuccessofproduct,
                    Fail:this.onFailofproduct,
                    userid:this.users.userid
                    
                })
            }
            else if(value === 'Pending')
            {
                console.log('vvvv')
                this.GET_PENDINGPRODUCTS({
                    
                    Success:this.onSuccessofproduct,
                    Fail:this.onFailofproduct,
                    userid:this.users.userid
                    
                })

            }
            else if(value === 'Purchase')
            {
                this.GET_PURCHASEPRODUCTS({
                    Success:this.onSuccessofproduct,
                    Fail:this.onFailofproduct,
                    userid:this.users.userid
                    
                })

            }

        },







        onSuccessofproduct(data) 
        {
           console.log(data)
          this. productObj = data
        },
        onFailofproduct(error){
          console.error(error);
        },
        goBack() {
            alert('hi')
            this.$router.go(-1)
          },
    },
    
}