import HistoryService from '../Service/HistoryService'

const History_Store =
{
    state:{
        history:[]
    },
    getters:{
        gethistory(state)
        {
            return state.history;
        }
    },
    mutations:{
        sethistory(state,data)
        {
            state.history = data
            console.log(data)
            
        }
    },
    actions:{

        GET_SOLDPRODUCTS({ commit }, { Success, Fail, userid }) {
           
                HistoryService.SoldProducts({
                    Success: (userid) => {
                        // console.log(userid)    
                        commit('sethistory', userid)
                        Success(userid)
                    },
                    fail: (error) =>{
                     Fail(error)
                    },userid
                
                })
        },
        GET_PENDINGPRODUCTS({ commit }, { Success, Fail, userid }) {
           
            HistoryService.PendingProducts({
                Success: (userid) => {
                    console.log(userid)    
                    commit('sethistory', userid)
                    Success(userid)
                },
                fail: (error) =>{
                 Fail(error)
                },userid
            
            })
    },
    GET_PURCHASEPRODUCTS({ commit }, { Success, Fail, userid }) {
           
        HistoryService.PurchaseProducts({
            Success: (userid) => {
                // console.log(userid)    
                commit('sethistory', userid)
                Success(userid)
            },
            fail: (error) =>{
             Fail(error)
            },userid
        
        })
}
    },
    namespaced: true
}
export default History_Store