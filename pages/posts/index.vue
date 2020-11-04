<template>
  <div class="container">
    <h1>Posts</h1>

    <ul>
      <li
        v-for="(post, index) in posts"
        :key="`post-${index}`"
      >
        <nuxt-link :to="post.path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
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
