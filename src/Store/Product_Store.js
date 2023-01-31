

import ProductService from '../Service/ProductService'


const Product_Store =
{
    state: {
        products: []
    },
    getters: {
        GetDetails(state) {
            // console.log('ghjkkl') 
            return state.products;
        }
    },
    mutations: {
        setAllProducts(state, data) {
            // console.log(data)
            state.products = data
            console.log(data)
            // console.log( state.products)
        }
    },
    actions: {

        GET_PRODUCTS({ commit }, { Success, Fail }) {
            ProductService.FetchProducts({
                Success: (data) => {
                    // console.log(data)
                    commit('setAllProducts', data)
                    Success(data)
                },
                Fail: (error) =>{
                               Fail(error)
                }
            })
        },
        GET_CATEGORY({ commit }, { Success, Fail,category }) {
            console.log('xxxxx')
            ProductService.CategoryProduct({
                success: (category) => {
                    commit('setAllProducts', category)
                    Success(category)
                },
                fail: (error) =>{
                               Fail(error)
                },category    
            })
        },
        GET_SUBCATEGORY({ commit }, { Success, Fail,subcategory }) {
            ProductService.SubCategoryProduct({
                success: (subcategory) => {
            
                    commit('setAllProducts', subcategory)
                    Success(subcategory)
                },
                fail: (error) =>{
                               Fail(error)
                },subcategory
            
            })
        },
    
    },
   
    namespaced: true
}


export default Product_Store


