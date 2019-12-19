<template>
  <div id="products">
    <h2>Contacts</h2>
    <show-contact
      v-for="contact in contacts"
      :key="contact.id"
      :contact="contact"
    ></show-contact>
  </div>
</template>

<script>

import ShowContact from './../ShowContact.vue';

export default {
  name: 'ContactsPage',
  components: { ShowContact },

  data: function() {
    return {
    };
  },
  mounted(){
  },
  computed: {
    contacts: function() {
        return this.$store.state.contacts;
    }
  }
};
</script>

<style scoped></style>
