<template>
  <div class="white-page py-1">
    <article class="container post-container">
     <h1 class="text--thicc text--largest page-heading">{{ page.title }}</h1>
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
      title: `${this.page.title} | Cormac McCann`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        { hid: 'og:description', property: 'og:title', content: 'Blurb Content' },
        { hid: 'og:image', property: 'og:image', content: `https://www.cormacmccann.com/me.jpg` },
        { hid: 'og:url', property: 'og:url', content: this.$route.path },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@CormacMcCannDev' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.title },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Check out the full post on my website!' },
        { hid: 'twitter:image', name: 'twitter:image', content: `https://www.cormacmccann.com/me.jpg` },
      ]
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
