<script>
import { tabsRoutes } from '../../routes'

export default {
  name: 'TabsComponent',
  data() {
    return {
      tabsRoutes
    }
  }
}
</script>

<template>
  <v-tabs
    background-color="primary"
  >
    <v-tab
      v-for="tab in tabsRoutes"
      :key="tab.name"
      :to="tab.path"
    >
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<style scoped>

</style>