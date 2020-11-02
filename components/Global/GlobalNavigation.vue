<template>
  <nav class="global-nav">
    <div>
      <nuxt-link to="/">
        CM
      </nuxt-link>
    </div>

    <div>
      <nuxt-link
        v-for="(link, index) in links"
        :key="`nav-link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalNaviation',
  data () {
    return {
      links: [
        {
          text: 'About',
          to: '/about',
          color: 'magenta'
        },
        {
          text: 'Posts',
          to: '/posts',
          color: 'magenta'
        },
        {
          text: 'Contact',
          to: '/contact',
          color: 'magenta'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.global-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
}
</style>
