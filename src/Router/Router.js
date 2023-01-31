import LoginPageComponent from '../components/LoginPageComponent'
import HomePageComponent from '../components/HomePageComponent'
import VueRouter from 'vue-router'
import AddProducts from '../components/AddProducts'
import QuoteOfferComponent from '../components/QuoteOfferComponent'
import BuyProduct from '../components/BuyProduct'
import HistoryComponent from '../components/HistoryComponent'

let routes = [{
    path: '/',
    name: "HomePageComponent",
    component: HomePageComponent,
  },
  {
    path: '/login',
    name: "LoginPageComponent",
    component: LoginPageComponent
  },
  {
    path: '/Addproduct',
    name: "AddProducts",
    component: AddProducts
  },
  {
    path: '/QuoteOffer',
    name: "QuoteOfferComponent",
    component: QuoteOfferComponent
  },
  {
    path: '/Buy',
    name: "BuyProduct",
    component: BuyProduct
  },
  {
    path: '/historycomp',
    name: "HistoryComponent",
    component: HistoryComponent
  }
]

  const router = new VueRouter(
    {
      mode: "history",
      routes
    }
  )
  export default router