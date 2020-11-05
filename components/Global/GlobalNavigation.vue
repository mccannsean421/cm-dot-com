<template>
  <nav class="global-nav">
    <div class="global-nav__home-btn">
      <nuxt-link to="/">
        CM
      </nuxt-link>
    </div>

    <div class="global-nav__links">
      <nuxt-link
        v-for="(link, index) in links"
        :key="`nav-link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
        <div class="nav-underline"></div>
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
  height: 80px;
  padding: 1em;
  &__links {
    text-align: right;
    a {
      display: inline-block;
      padding-left: 20px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 800;
    }

    .nav-underline {
      width: 0px;
      height: 5px;
      background-color: var(--theme-color);
      position: absolute;
      margin: 0 auto;
      transition: width .2s cubic-bezier(0.51, -0.38, 0.68, 1.86);
      margin-top: 5px;
    }
    a.active-link > .nav-underline {
       width: 40px;
    }
  }
  &__home-btn {
    a {
      font-weight: 800;
      font-size: 32px;
      color: var(--theme-color);
    }
  }
}
</style>
