import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ProductsPage from './components/pages/ProductsPage.vue';
import ContactsPage from './components/pages/ContactsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import CartPage from './components/pages/CartPage.vue';
import store from './store';
import ContactCreate from './components/pages/ContactCreatePage.vue';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import BootstrapVue from 'bootstrap-vue'
/* eslint-disable no-unused-vars */
const _ = require('lodash');
/* eslint-enable no-unused-vars */

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/jokes', component: ProductsPage, name: 'jokes' },
  { path: '/contacts', component: ContactsPage, name: 'contacts' },
  { path: '/ContactCreate', component: ContactCreate, name: 'create' },
  { path: '/joke/:id', component: ProductPage, name: 'joke', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' },
  { path: '/cart', component: CartPage, name: 'cart' }

]
const router = new VueRouter({
  routes: routes,
  mode: 'history' // <-- NEW

})
new Vue({
  store: store,
  router: router, // <-- NEW
  render: h => h(App),
}).$mount('#app')
