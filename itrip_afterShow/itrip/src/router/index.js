import App from 'containers/App'
import Home from 'pages/Home'
import HotelList from 'pages/HotelList'
import HotelDetail from 'pages/HotelDetail'
// import OrderPage from 'pages/OrderPage'
import OrderDetail from 'pages/OrderDetail'
import CommentPage from 'pages/CommentPage'
import OrderFill from 'pages/OrderFill'
import OrderPay from 'pages/OrderPay'
import OrderPayState from 'pages/OrderPayState'
import MyInfo from 'pages/MyInfo'
import Login from 'pages/Login'
import Register from 'pages/Register'
import ItripHome from 'pages/ItripHome'
import Travel from 'pages/Travel'
import FlyTicket from 'pages/FlyTicket'
import Strategy from 'pages/Strategy'
import ErrorPage from 'pages/ErrorPage'
import BuildingPage from 'pages/BuildingPage'

export default [
  {
    path: '/',
    component: App,
    indexRoute: {
      // component: Home
      component: ItripHome
    },
    childRoutes: [
      {
        path: 'hotellist',
        component: HotelList
      },
      {
        path: 'hoteldetail',
        component: HotelDetail
      },
      {
        path: 'orderdetail',
        component: OrderDetail
      },
      {
        path: 'orderfill',
        component: OrderFill
      },
      {
        path: 'commentpage',
        component: CommentPage
      },
      {
        path: 'orderpaystate',
        component: OrderPayState
      },
      {
        path: 'orderpay',
        component: OrderPay
      },
      {
        path: 'myinfo',
        component: MyInfo
      },
       {
        path: 'itripHome',
        component: ItripHome 
      },
      {
        path: 'travel',
        component: Travel
      },
      {
        path: 'flyTicket',
        component: FlyTicket
      },
      {
        path: 'strategy',
        component: Strategy
      },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'buildingpage',
        component: BuildingPage
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    component: ErrorPage
  }
]
