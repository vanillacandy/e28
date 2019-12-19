<template>
    <div id='app'>
        
        <img id='logo' alt='ZipFoods logo' src='./assets/images/jokes.png' />
        <b-container class="bv-example-row">
        <b-row>
            <b-col>
                <b-nav vertical class="w-40">
                        <b-nav-item v-for='link in links' :key='link'>
                            <router-link exact :to='{ name: link }'>
                                {{ link }}
                                <span data-test='cart-count' v-if='link == "cart"'>({{ cartCount }})</span>
                            </router-link>
                        </b-nav-item>
                </b-nav>
            </b-col>
            <b-col >
                    <router-view></router-view>
            </b-col>
        </b-row>
        </b-container>
        

    </div>
</template>

<script>
import * as app from './app.js';

import { products } from './products.js';

export default {
    name: 'app',
    components: {},
    data: function() {
        return {
            products: products,
            links: ['home', 'jokes', 'categories', 'cart', 'contacts', 'create'],
            //cartCount: null,
            //sharedState: app.store
        };
    },
    computed: {
        cartCount: function() {
            return this.$store.state.cartCount;
        }
    },
    mounted() {
        this.cart = new app.Cart();
        //app.store.cartCount = this.cart.count();
        this.$store.commit('setCartCount', this.cart.count());
        this.$store.dispatch('setProducts');
        this.$store.dispatch('setContacts');
    }
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
