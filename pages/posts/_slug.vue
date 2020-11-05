<template>
  <div class="container post-container">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || "index"
    console.log(slug)
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
