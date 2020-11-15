<template>
  <div class="container contact-container">
    <h1>Contact</h1>

    <ContactForm />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact | Cormac McCann'
    };
  },
  components: {
     ContactForm: () => import('../components/ContactForm.vue')
  },
}
</script>

<style>

</style>
