import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import PricingView from '../views/PricingView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'


Vue.use(VueRouter)

// function isAuthenticated(to,from,next){
//     if(localStorage.getItem("user")){
//       next({path:"/login"});
//     }
//     else{
//       next()
//     }
// }

// function isAuthenticated(to, from, next) {
//   if (!localStorage.getItem("user")) {
//     next({ path: "/login" });
//   } else {
//     next();
//   }
// }
function isAuthenticated(to, from, next) {
  if (!localStorage.getItem("user")) {
    next(); // Laisser passer vers la page de connexion si l'utilisateur n'est pas authentifié
  } else {
    next({ path: "/" }); // Rediriger vers la page d'accueil si l'utilisateur est déjà authentifié
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    beforeEnter:isAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
