<template>
  <footer class="footer">
    <div class="footer-container">
      <div>
        &copy; 2021 Cormac McCann. Built with NuxtJS
      </div>
      <div class="footer-container__socials">
        <a
          v-for="(link, index) in socialLinks"
          :key="`social-link-${index}`"
          :href="link.href"
          rel="nofollow"
          target="_blank"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      socialLinks: [
        {
          text: 'Github',
          href: '#',
          color: 'magenta'
        },
        {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/cormac-mccann-70052283',
          color: 'magenta'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  .footer-container {
    width: var(--container-width-desktop);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2em 0em;
    &__socials {
      text-align: right;
    }
  }
}
</style>
