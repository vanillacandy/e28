<template>
  <div>
    <!-- /src/components/ShowProduct.vue -->

    <div :to='{ name:"contact", params: { id: contact.id }}'>
            <b-list-group horizontal class='product'>
                <b-list-group-item class='product-name'>{{ contact.name }}| {{ contact.email }}</b-list-group-item>
            </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowContact',
  props: ['contact']
};
</script>

<style scoped></style>
