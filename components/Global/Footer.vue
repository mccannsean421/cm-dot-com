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
          href: 'https://github.com/mccannsean421',
          color: 'magenta'
        },
        {
          text: 'LinkedIn',
          href: 'https://www.linkedin.com/in/cormac-mccann-70052283',
          color: 'magenta'
        },
        {
          text: 'Twitter',
          href: 'https://www.twitter.com/cormacmccanndev',
          color: 'magenta'
        },

      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  .footer-container {
     margin: 0 auto;
    display: grid;
    padding: 2em 0em;
    @media screen and (min-width: 767px) {
      width: var(--container-width-desktop);
      grid-template-columns: 1fr 1fr;
    }
    &__socials {
      @media screen and (min-width: 767px) {
        text-align: right;
      }
      a {
        color: var(--black);
        &:after {
          content: '-';
        }
        &:last-child::after {
          content: '';
        }
      }
    }
  }
}
</style>
