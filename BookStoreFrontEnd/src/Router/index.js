import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../Pages/LoginPage"
import Register from "../Pages/Register"
import ForgotPassword from "../Pages/Forgot"
import ResetPassword from "../Pages/ResetPage"
import NavBar from "../components/NavBar"
// import Books from "../components/Books"
import cart from "../components/Cart"
import Home from"../components/HomePage"
import customer from "../components/CustomerDetail"
Vue.use(VueRouter);

// Router Guard

function guardRoute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("AccessToken")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
}



const routes = [
  {
    path: "/home",
    name: "Home",
    // beforeEnter: guardRoute,
    component: Home,
  },

  {
    path: "/cst",
    name: "customer",
    beforeEnter: guardRoute,
    component: customer,
  },

  {
    path: "/nav",
    name: "NavBar",
    component: NavBar,
    // children: [{
    //   path: "books",
    //   name: "books",
    //   component: Books,
    // },
    // ]
  },

  {
    path: "/",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword,
  },

  {
    path: "/reset",
    name: "reset",
    component: ResetPassword,
  },

{
  path: "/cart",
  name: "Cart",
  beforeEnter: guardRoute,
component:cart,
}
  
];

const router = new VueRouter({
  mode: "history",
  routes

});

export default router;
