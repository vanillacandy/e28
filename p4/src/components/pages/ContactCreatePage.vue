<template>
    <div id='product-create'>
        <h1>Add a contact</h1>
        <form @submit.prevent='handleSubmit'>
            
            <div class='form-group'>
                <b-form-group for='name'>Name</b-form-group>
                <b-form-input
                    type='text'
                    :class='{ "form-input-error": $v.product.name.$error }'
                    data-test='product-name-input'
                    id='name'
                    v-model='$v.product.name.$model'
                />
                <div v-if='$v.product.name.$error'>
                    <div
                        class='form-feedback-error'
                        v-if='!$v.product.name.required'
                    >Name is required.</div>
                </div>
                <div class='form-group'>
                    <label for='email'>Email</label>

                    <b-form-input
                        type='text'
                        id='email'
                        data-test='product-categories-input'
                        v-model='product.email'
                    />
                </div>

            </div>

            <b-button variant="outline-primary" data-test='add-product-button' type='submit'>Add Contact</b-button>

            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
        </form>
    </div>
</template>

<script>
import * as app from './../../app.js';
import { required } from 'vuelidate/lib/validators';

let product = {};
// If in dev mode, we'll pre-fill the product to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
    product = {
        name: 'Jenny',
        email: 'jenny.tin@gmail.com'
    };
} else {
    product = {
        name: '',
    };
}

export default {
    name: 'ProductCreatePage',
    data: function() {
        return {
            product: product,
            formHasErrors: false
        };
    },
    validations: {
        product: {
            name: {
                required
            }
        }
    },
    watch: {
        '$v.$anyError': function() {
            this.formHasErrors = this.$v.$anyError;
        }
    },
    methods: {
        handleSubmit: function() {
            if (!this.formHasErrors) {
                // Axios request to the server to persist the new product
                app.axios
                    .post('https://e28-p4-d52ea.firebaseio.com/contacts.json', this.product)
                    .then(response => {
                        let key = response.data.name;

                        this.$store.commit('addContact', {
                            [key]: this.product
                        });

                    });
            }
        }
    }
};
</script>

<style scoped>
#description {
    height: 150px;
}
</style>