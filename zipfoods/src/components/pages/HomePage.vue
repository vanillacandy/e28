<template>
    <div>
        <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>

        <show-featured :category='featuredCategory'></show-featured>
    </div>
</template>

<script>
//import * as app from './app.js';
import ShowFeatured from './../ShowFeatured.vue';

export default {
    name: 'HomePage',
    components: { ShowFeatured },
    data: function() {
        return {
            featuredCategory: 'snacks'
        };
    }
};
</script>
