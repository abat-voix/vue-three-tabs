<script>
import { tabsRoutes } from './routes/index'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      tabsRoutes
    }
  }

}
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
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
          <router-view />
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
