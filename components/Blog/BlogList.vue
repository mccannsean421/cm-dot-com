<template>
  <div class="blog-list">
    <div
      v-for="(post, index) in posts"
      :key="`post-${index}`"
      class="blog-list__item"
    >
    <h3 class="post-link-title text--large">
      <nuxt-link
        :to="post.path"
        class="post-link"
      >
        {{ post.title }}
      </nuxt-link>
      </h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    posts: {
      type: Array,
      default: false,
    },
  }
}
</script>

<style lang="scss">
.blog-list {
  padding: 2em 0em;
  &__item {
    padding: 1em 0em;
    h3 {
      text-transform: uppercase;
      font-size: 1.5rem;
    }
  }
}
</style>
