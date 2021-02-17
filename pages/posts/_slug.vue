<template>
  <div class="white-page py-1">
    <article class="container post-container">
     <h1 class="text--thicc text--largest post-heading">{{ page.title }}</h1>
     <time :datetime="page.lastUpdated">{{ page.lastUpdated }}</time>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content(`/posts/${slug}`).fetch()
      .catch (err => {
        error({ statusCode: 404, message: "Page not found" })
      })

    return {
      page
    }
  },
  head() {
    return {
      title: `${this.page.title} | Cormac McCann`
    };
  },
}
</script>

<style lang="scss">
.white-page {
  background: #fff;
  color: #001;
}
</style>
