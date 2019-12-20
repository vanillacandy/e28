<template>
    <div id='product-create'>
        <h2>Add a contact</h2>
        <p>You can choose to add more contact at create page</p>
        
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

                <b-form-group for='email'>Email</b-form-group>
                <b-form-input
                    type='text'
                    :class='{ "form-input-error": $v.product.email.$error }'
                    data-test='product-email-input'
                    id='email'
                    v-model='$v.product.email.$model'
                />
                <div v-if='$v.product.email.$error'>
                    <div
                            class='form-feedback-error'
                            v-if='!$v.product.email.required'
                        >Email is required.</div>
                    <div
                            class='form-feedback-error'
                            v-if='!$v.product.email.email'
                        >Please enter a email format.</div>    
                </div>


            </div>

            <b-button variant="outline-primary" data-test='add-product-button' type='submit'>Add Contact</b-button>

            <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
        </form>
    </div>
</template>

<script>
import * as app from './../../app.js';
import { required , email} from 'vuelidate/lib/validators';

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
        email: '',
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
            },
            email: {
                required,
                email
            },
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