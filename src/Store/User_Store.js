const User_Store ={
    state:{
        user:{},
    },
    mutations:{
        setLogin(state,user)
        {
            state.user=user;
            console.log(user);
        }
    },
    actions: {
        getUser: ({ commit }, user) => {
          commit('setLogin', user)
        },
      },
    getters:{
        users(state){
            console.log(state.user)
            return state.user;
            
        }
    },
    namespaced:true
}
export default User_Store