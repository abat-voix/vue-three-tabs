<script>
import { tabsRoutes } from '../../routes'

export default {
  name: 'TabsComponent',
  data() {
    return {
      tabsRoutes
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({ path })
    },
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
      @click="goTo(tab.path)"
    >
      {{ tab.name }}
      <v-btn
        rounded
        color="secondary"
        size="x-small"
        @click.stop="goTo('/')"
      >
        x
      </v-btn>
    </v-tab>
  </v-tabs>
</template>

<style scoped>

</style>