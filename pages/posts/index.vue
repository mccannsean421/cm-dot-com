<template>
  <div class="container posts-container">
    <h1>Posts</h1>

    <p>
      As well as web development in my spare time I like learning about various other topics such as mathematics, physics, electronics and a few more.
      Writing blog posts on these topics helps me to remember things so expect to see a few non-web posts here!
    </p>

    <BlogList :posts="posts" />
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    return {
      posts: await context.$content('posts').fetch()
    }
  },
  components: {
    BlogList: () => import('@/components/Blog/BlogList.vue'),
  },
  head() {
    return {
      title: 'Blog Posts | Cormac McCann'
    };
  },
}
</script>

<style lang="scss">

.post-link {
  color: #fff;
  font-weight: 800;
}

</style>
