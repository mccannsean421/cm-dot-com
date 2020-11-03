<template>
  <div class="container">
    <h1>CMC dot com</h1>

    {{ posts }}

  </div>
</template>

<script>
export default {

  async asyncData (context) {
    return {
      posts: await context.$content('posts').fetch()
    }
  },

  async mounted () {
    // const posts = await this.$content('posts').fetch()
    // console.log(posts)
  }

}

</script>

<style>

</style>
