<template>
  <footer class="footer">
    <div>
      &copy; 2019 Coramc McCann. Built with NuxtJS
    </div>
    <div>
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
          href: '#',
          color: 'magenta'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
