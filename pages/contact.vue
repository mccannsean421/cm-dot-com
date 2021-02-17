<template>
  <div class="container contact-container">
    <h1 class="page-heading text--largest">Contact</h1>

    <p><b>If you're a recruiter</b> right now I am not looking for any new employment opportunities. But do feel free to add me on LinkedIn!</p>

    <p>Otherwise if you have any questions about my posts, my work, my site. Or if you want you just want to connect you can reach me at:</p>

    <a class="post-heading text--largest" href="mailto:cormacmccanndev@gmail.com">cormacmccanndev@gmail.com</a>
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
