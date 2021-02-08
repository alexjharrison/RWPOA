<template>
  <div class="container">
    <h1 class="my-3">{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <hr />

    <nuxt-content :document="page" class="mb-4" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('home').fetch()

    return { page }
  },
}
</script>
