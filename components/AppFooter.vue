<template>
  <footer class="py-4">
    <p>Rolling Woods Property Owners Association</p>
    <p class="mb-2">Copyright {{ year }}</p>
    <small
      >Built by Alex Harrison
      <a href="https://aharrison.xyz">https://aharrison.xyz</a></small
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
footer {
  text-align: center;
  background-color: #bbb;
}
p {
  margin: 0;
}
</style>
