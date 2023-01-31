import axios from 'axios'

export default
{
    SoldProducts({Success,Fail,userid})
    {
       
        axios.get(`/api/SoldItemsOfUser?userid=${userid}`).then (
            (Data) => {    
                Success(Data)
            }
        ).catch((error) => {
         
            Fail(error)
        }
        )
    },
    PurchaseProducts({Success,Fail,userid})
    {
       
        axios.get(`/api/getPurchasedListOfBuyer?buyerid=${userid}`).then (
            (Data) => {    
                Success(Data)
            }
        ).catch((error) => {
         
            Fail(error)
        }
        )
    },
    PendingProducts({Success,Fail,userid})
    {
       //http://5a65-115-242-133-246.in.ngrok.io/api/PendingAdvertisementsOfUser?userid=101
///api/PendingAdvertisementsOfUser?userid=${userid}
        axios.get(`api/PendingAdvertisementsOfUser?userid=${userid}`).then (
            (Data) => {    
                Success(Data)
            }
        ).catch((error) => {
         
            Fail(error)
        }
        )
    }
}