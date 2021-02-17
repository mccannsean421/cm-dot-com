<template>
  <div class="container contact-container">
    <h1 class="page-heading text--largest pb-1">Contact</h1>

    <h2 class="page-heading py-1">If you're a recruiter</h2>
    <p class="text--large">Right now I am not looking for any new employment opportunities. But do feel free to add me on LinkedIn!</p>

    <h2 class="page-heading py-1">Otherwise,</h2>
    <p class="text--large">If you have any questions about my posts, my work, my site. Or if you want you just want to connect you can reach me at:
      <a class="contact-link" href="mailto:cormacmccanndev@gmail.com">cormacmccanndev@gmail.com</a>
    </p>


  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact | Cormac McCann'
    };
  },
}
</script>

<style>
.contact-link {
  color: var(--theme-color);
}
</style>
