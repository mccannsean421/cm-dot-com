<template>
  <div class="container posts-container">
    <h1 class="page-heading text--largest">Posts</h1>
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
      title: 'Blog Posts | Cormac McCann',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-purple.png' }
      ]
    };
  },
}
</script>

<style lang="scss">

.post-link {
  color: var(--black);
  font-weight: 800;
}

</style>
