<template>
  <aside>
    <div class="sticky">
      <h2><u>Documents</u></h2>
      <ul class="pl-0">
        <li v-for="link in links" :key="link.url">
          <a target="_blank" rel="noopener" :href="link.url">{{ link.text }}</a>
        </li>
      </ul>
      <b-img
        fluid
        class="rounded mt-4"
        src="~assets/lake.jpg"
        alt="lake view"
      />
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$store.state.page.sidebarLinks
    },
  },
}
</script>

<style scoped>
ul {
  margin: 20px 0;
}
li {
  margin-top: 5px;
}
a {
  text-decoration: none;
  font-size: 20px;
  color: #444;
}
</style>
