import axios from "axios"

export default
{
    FetchProducts({Success,Fail})
    {
        ///api/pendingAdvertisements
        //https://5a65-115-242-133-246.in.ngrok.io/api/pendingAdvertisements
        axios.get(`/api/pendingAdvertisements`).then (
            (Data) => { 
                Success(Data)
                console.log(Data )
            }
        ).catch((error) => {
         
            Fail(error)
        }
        )
    },
    QuoteOffer({success,fail,adid})
    {
       
        axios.get(`/api/AdById?adid=${adid}`).then (
            (data) => {
                console.log(data) 
                success(data)
            }
        ).catch((error) => {
         
            fail(error)
        }
        )
    },
    BuyProduct({success,fail,adid})
    {
       
        axios.get(`/api/AdById?adid=${adid}`).then (
            (data) => {
                console.log(data) 
                success(data)
            }
        ).catch((error) => {
         
            fail(error)
        }
        )
    },
    HistoryProduct({success,fail,userid})
    {
       
        axios.get(`/api/AdsOfUser?userid=${userid}`).then (
            (data) => {
                console.log(data) 
                success(data)
            }
        ).catch((error) => {
         
            fail(error)
        }
        )
    },
    CategoryProduct({success,fail,category})
    {
       console.log("api service:"+category)
        axios.get(`/api/${category}`).then (
            (data) => {
                console.log('ffff') 
                success(data)
            }
        ).catch((error) => {
         
            fail(error)
        }
        )
    },
    SubCategoryProduct({success,fail,subcategory})
    {
       
        axios.get(`/api/subcategory/${subcategory}`).then (
            (data) => {
                console.log(data) 
                success(data)
            }
        ).catch((error) => {
         
            fail(error)
        }
        )
    },



}