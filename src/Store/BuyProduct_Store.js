import ProductService from '../Service/ProductService'


const  QuoteOffer_Store =
{
    state: {
        buy: []
    },
    getters: {
        Getbuy(state) {
            console.log('ghjkkl') 
            return state.buy;
        }
    },
    mutations: {
        setbuy(state, data) {
            state.buy = data
           
        }
    },
    actions: {

        GET_BUY({ commit }, { success, fail,  adid }) {
            ProductService.BuyProduct({
                success: (adid) => {
                    // console.log(data)
                    console.log("get buy "+adid)
                    commit('setbuy', adid)
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