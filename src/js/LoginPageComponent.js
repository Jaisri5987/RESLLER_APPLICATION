import axios from 'axios'
import { mapActions,mapGetters } from 'vuex'

export default{
    name: "LoginPage",
    data(){
        return{
            user:{ name: " ",pass:" "},
           
        }
    },
    computed:{
        ...mapGetters('User_Store',['users']),
        
    },
    methods:{
        ...mapActions('User_Store',['getUser']),

        goBack() {
            this.$router.go(-1)
          },
       async logincheck(){
        alert("login successfull")
        console.log(this.user.pass)
        console.log(this.user.name)
        // let result = await axios.post(`http://5a65-115-242-133-246.in.ngrok.io/api/login?username=${this.user.name}&password=${this.user.pass}`);
        let result = await axios.post(`/api/login?username=${this.user.name}&password=${this.user.pass}`);
        this.getUser(result.data)
        // if (result.status != 400) {
        //     localStorage.setItem("userInfo", JSON.stringify(result.data));
        //     console.log(result);
        //     this.$router.push("/");
        //   }
        //   console.log(result)
          if(localStorage.getItem('User') === null || localStorage.getItem('User') === "{}"){
            localStorage.setItem("userInfo", JSON.stringify(result.data));
            this.$router.push("/");
          }
          console.log(result.data)
          return JSON.parse(localStorage.getItem('user'))

        },
        clear()
        {
            this.user.name="";
            this.user.pass="";
            
        }
    }
}