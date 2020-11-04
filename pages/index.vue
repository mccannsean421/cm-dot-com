<template>
  <div class="container">
    <h1>Cormac McCann</h1>
    <h2>Frontend Developer</h2>
  </div>
</template>

<script>
export default {

  async asyncData (context) {
    return {
      posts: await context.$content('posts').fetch()
    }
  }
}

</script>

<style>

</style>
