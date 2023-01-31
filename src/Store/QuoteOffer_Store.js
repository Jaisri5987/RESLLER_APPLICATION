

import ProductService from '../Service/ProductService'


const  QuoteOffer_Store =
{
    state: {
        quote: []
    },
    getters: {
        Getoffer(state) {
            console.log('ghjkkl') 
            return state.quote;
        }
    },
    mutations: {
        setoffer(state, data) {
            state.quote = data
           
        }
    },
    actions: {

        GET_OFFER({ commit }, { success, fail,  adid }) {
            ProductService.QuoteOffer({
                success: (adid) => {
                    // console.log(data)
                    console.log("get offer "+adid)
                    commit('setoffer', adid)
                    success(adid)
                },
                fail: (error) =>{
                               fail(error)
                },adid
            
            })
        }
    },
   
    namespaced: true
}


export default QuoteOffer_Store


