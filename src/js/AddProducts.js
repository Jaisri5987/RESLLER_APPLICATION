import axios from'axios'


export default{
    name: 'AddProduct',
    data(){
        return{
          product:{sellerid: " ",subcategoryname: " " , title: " ", description: " ", price: " ", minimumprice: " ",imgPath:" "}
        }
    },
    // created(){
    //   const newAd  = {sellerid: this.data.sellerid,subcategoryname: this.data.subcategoryname, title: this.data.title, description: this.data.description, price: this.data.price, minimumprice: this.data.minimumprice }
    // },
    methods:{
      goBack() {
        this.$router.go(-1)
      },
        postads(){
          var Form = document.forms['frm_upload'];
          console.log(Form);
         var inputName = Form.elements['filename'].files[0].name;

         var imgPath = inputName;
          console.log(imgPath);
            const newAd  = {sellerid: this.product.sellerid, subcategoryname: this.product.subcategoryname, title: this.product.title, description: this.product.description, price: this.product.price, minimumprice: this.product.minimumprice , imgPath: imgPath }
            console.log(newAd);
            let result = axios.post(`/api/postAdvertisement`, newAd)
            console.log(result)
              if (result.status == 200 && result.data.length > 0){
                console.log(result);
              }
              this.$router.push('/')
         },
        }
}