<template>
    <div id='product-page' v-if='product'>
        <h1>Title: {{ product.name }}</h1>
        <p class='id'>Joke #{{ product.id }}</p>
        <p class='description'>{{ product.description }}</p>
        <p class='categories'>Category: {{ product.categories }}</p>
        
        <button @click='addToCart(product.id)'>Add to cart</button>
        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>
        <br/>
        <router-link :to='"/products"'>&larr; Return to all jokes</router-link>
    </div>
</template>

<script>
const axios = require('axios');
import Cart from './../../Cart.js';
import * as app from './../../app.js';

export default {
    name: 'ProductPage',
    props: ['id'],
    data: function() {
        return {
            product: null,
            addAlert: false

        };
    },
    mounted() {
        this.product = axios
            .get(
                'https://my-json-server.typicode.com/vanillacandy/e28-api/jokes/' +
                    this.id
            )
            .then(response => (this.product = response.data));
    },
    methods: {
        addToCart: function(productId) {
            let cart = new Cart();
            cart.add(productId);

            app.store.cartCount = cart.count();

            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        }
    }
};
</script>