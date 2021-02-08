<template>
  <div>
    <app-header />
    <b-container fluid="xl" class="row mx-auto">
      <sidebar class="col-md-3 col-sm-4 col-12 min-h-100" />
      <Nuxt class="col border-left" />
    </b-container>
    <app-footer />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: { Sidebar, AppHeader, AppFooter },
}
</script>

<style>
.sticky {
  position: sticky;
  top: 10px;
}
</style>
