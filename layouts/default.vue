<template>
  <div>
    <app-header />
    <div class="row container mx-auto">
      <sidebar class="col-md-3 col-6 min-h-100" />
      <Nuxt class="col border-left" />
    </div>
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
