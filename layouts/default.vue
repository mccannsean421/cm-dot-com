<template>
  <div class="layout" :style="{ '--theme-color': primaryPageColor }">
    <GlobalNavigation />
    <Nuxt class="pa-1" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'default',
  components: {
    GlobalNavigation: () => import('../components/Global/GlobalNavigation.vue'),
    Footer: () => import('../components/Global/Footer.vue')
  },
  computed: {
    primaryPageColor: function() {
      switch(this.$route.path) {
        case '/about':
          return '#ef3f81';
          break;
        case '/posts':
          return 'var(--medium-purple)';
          break;
        case '/posts/*':
          return 'var(--medium-purple)';
          break;
        case '/contact':
          return '#FB8C24';
          break;
        default:
          return 'mediumseagreen';
      }
    }
  },
}
</script>

<style lang="scss">
.layout {
  margin: 0 auto;
}

.highlight {
  color: var(--primary-color);
}
.global-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.container {
  padding-top: 40px;
}
h1 {
  font-size: 32px;
  text-transform: uppercase;
  margin: 0px;
}
.heading {
  margin-bottom: 40px;
}
.underline {
  display: inline-block;
  width: 25px;
  height: 5px;
  background-color: var(--primary-color);
}
.date {
  margin-bottom: 5px;
}
  input,
  select,
  textarea,
  button {
    outline: none;
  }
time {
  color: #717171;
  font-weight: bold;
}
a {
  text-decoration: none;
}
.inner {
  max-width: 1120px;
  margin: 0px auto;
  padding: 0px 15px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.content-block {
  margin: 40px 0px;
}
.para-container > p {
  margin: 0px 0px 20px 0px;
  font-size: 22px;
  line-height: 1.6;
}
</style>
