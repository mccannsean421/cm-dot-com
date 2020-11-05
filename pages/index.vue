<template>
  <div class="container home-container">
    <div>
      <h1>Cormac McCann</h1>
      <h2>Frontend Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Frontend Developer | Cormac McCann'
    };
  },

  async asyncData (context) {
    return {
      posts: await context.$content('posts').fetch()
    }
  }
}

</script>

<style  lang="scss">
.home-container {
  display: grid;
  align-content: center;
  h1 {
    font-size: 72px;
  }
}
</style>
