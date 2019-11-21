<template>
  <div id="products">
    <h2>Jokes</h2>
    <show-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></show-product>
  </div>
</template>

<script>
import ShowProduct from './../ShowProduct.vue';

const axios = require('axios');

export default {
  name: 'ProductsPage',

  components: { ShowProduct },
  data: function() {
    return {
      products: null
    };
  },
  mounted(){
    axios
      .get(
          'https://my-json-server.typicode.com/vanillacandy/e28-api/jokes'
      )
      .then(response => {
          this.products = response.data;
      });

  }
};
</script>

<style scoped></style>
