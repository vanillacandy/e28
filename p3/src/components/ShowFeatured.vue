<!-- src/components/ShowFeatured.vue -->
<template>
  <div id="featured">
    <h2>Featured Products</h2>
    <ul class="cleanList">
      <li v-for="product in featuredProducts" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { products } from './../products.js';

export default {
  // src/components/ShowFeatured.vue
  name: 'ShowFeatured',

  computed: {
    featuredProducts: function() {
      function isMatch(product) {
        return product.categories.includes(this);
      }
      return this.products.filter(isMatch, this.category);
    }
  },
  props: ['category'],
  data: function() {
    return {
      products: products
    };
  }
};
</script>

<style scoped></style>
