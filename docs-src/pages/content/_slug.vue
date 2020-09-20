<template>
  <section class="section">
    <article>
      <h1 class="title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
    <hr />
    <div class="field">
      <b-tag rounded>Last updated {{ formatDate(page.updatedAt) }}</b-tag>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString('en')
    },
  },
}
</script>
