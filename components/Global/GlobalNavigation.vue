<template>
  <nav
    class="global-nav"
    :class="{
      'global-nav--mobile-open': showMobile,
    }"
  >
    <div class="global-nav__inner">
    <div class="global-nav__home-btn">
      <nuxt-link to="/">
        CM
      </nuxt-link>
    </div>

    <div class="global-nav__mobile-toggle">
      <button @click="toggleMobile">
        <img class="icon icon--hamburger" src="/hamburger.svg" alt="hamburger" />
        <img class="icon icon--close" src="/close.svg" alt="X icon" />
      </button>
    </div>

    <div
      class="global-nav__links"
    >
      <nuxt-link
        v-for="(link, index) in links"
        :key="`nav-link-${index}`"
        :to="link.to"
      >
        {{ link.text }}
        <div class="nav-underline"></div>
      </nuxt-link>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'GlobalNavigation',
  data () {
    return {
      showMobile: false,
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
  },
  methods: {
    toggleMobile() {
      this.showMobile = !this.showMobile;
    },
  }
}
</script>

<style lang="scss">
.global-nav {
    &__inner {
    max-width: var(--container-width-desktop);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    height: 80px;
    padding: 1em;
    margin: 0 auto;
    align-items: center;

    .global-nav__mobile-toggle {
      button {
        background: transparent;
        color: #fff;
        border: 0;
      }
      @media screen and (min-width:767px) {
        display: none;
        text-align: right;
      }
    }

    .global-nav__links {
      text-align: right;
      @media screen and (max-width:767px) {
        display: none;
        position: absolute;
        background: var(--theme-color);
        padding: 1em;
        border-radius: 10px;
        right: 10%;
        top: 80px;
      }
      a {
        display: inline-block;
        padding-left: 20px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 800;
        @media screen and (max-width:767px) {
          display: block;
        }
      }

      .nav-underline {
        width: 0px;
        height: 5px;
        background-color: var(--theme-color);
        position: absolute;
        margin: 0 auto;
        transition: width .2s cubic-bezier(0.51, -0.38, 0.68, 1.86);
        margin-top: 5px;
        @media screen and (max-width:767px) {
          display: none;
        }
      }
      a.active-link > .nav-underline {
        width: 40px;
      }
    }
    .global-nav__home-btn {
      a {
        font-weight: 800;
        font-size: 32px;
        color: var(--theme-color);
      }
    }
  }

    .icon {
      height: 24px;
      width: 24px;
    }

  .icon--close {
    display: none;
  }

  &--mobile-open {
    .global-nav__links {
      display: block;
    }

    .icon--hamburger {
      display: none;
    }

    .icon--close {
      display: block;
    }
  }
}
</style>
