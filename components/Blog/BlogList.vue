<template>
  <div class="blog-list">
    <div
      v-for="(post, index) in posts"
      :key="`post-${index}`"
      class="blog-list__item"
    >
    <h3 class="post-link-title">
      <nuxt-link
        :to="post.path"
        class="post-link text--larger"
      >
        {{ post.title }}
      </nuxt-link>
      </h3>
      <p class="text--large">{{ post.description }}</p>
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
