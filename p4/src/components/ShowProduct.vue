<template>
  <div>
    <!-- /src/components/ShowProduct.vue -->
    <router-link :to='{ name:"joke", params: { id: product.id }}'>
            <div class='product'>
                <div class='product-name'>{{ product.name }}</div>
            </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShowProduct',
  props: ['product']
};
</script>

<style scoped></style>
