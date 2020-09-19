<template>
  <section class="section">
    <article>
      <h1 class="title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>
