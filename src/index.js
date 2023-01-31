// import VueRouter from 'vue-router';
// import  LoginPage from '../src/components/LoginPage';
// // import  detailsPage from '../src/components/detailsPage'
// // import productCard from "./components/productCard.vue";
// import productDescription from '/Users/jaisri/Documents/vue.js/vue-learn/src/components/productDescription.vue'
// import product_page from './components/product_page.vue';
// import CardComponent from '../src/components/CartComponent.vue'


     
// let routes= [ 
//     {
//         path:'/home',
//         name:'product_page',
//         component:product_page
//     },
//     {
//         path:'/',
//         name:'Login',
//         component:LoginPage
//     },
//     {
//        path:'/description',
//        name : 'productDescription',
//        component: productDescription
//     },
//     {
//         path:'/CardComponent',
//         name : 'CardComponent',
//         component: CardComponent
//      }

// ]

// const router = new VueRouter (
//     {
//         mode:"history",
//         routes
//     }
// )

// router.beforeEach((to, from,next) => {
//     console.log("Before")
//     console.log(to)
//     console.log(from)
//     if(to.name == 'product_page' && from.name != 'Login')
//     {
//         alert("Unauthorized login")
//         return false
//     }
//     next()
// })

// router.beforeResolve((to, from,next) =>
// {
//     console.log("Before resolved")
//     console.log(to)
//     console.log(from)
//     next()
// })

// router.beforeEach((to,from,next) =>
// {
//     console.log("Before")
//     console.log(to)
//     console.log(from)
//     if(to.name == 'productDescription' && from.name != 'product_page')
//     {
//         alert("Unauthorized login")
//         return false
//     }
//     next()
// })
// export default router;
