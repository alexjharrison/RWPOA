<template>
  <b-conatiner fluid="xl">
    <h1 class="my-3">{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <hr />

    <nuxt-content :document="page" class="mb-4" />
  </b-conatiner>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('home').fetch()

    return { page }
  },
}
</script>
