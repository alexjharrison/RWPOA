<template>
  <b-container fluid="xl">
    <h1 class="my-3">{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <hr />

    <nuxt-content :document="page" class="mb-4" />
  </b-container>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page
    },
  },
}
</script>
