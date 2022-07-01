<script>
import TabsComponent from './components/tabs/TabsComponent.vue'
export default {
  name: 'App',
  components: {
    TabsComponent,
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <v-card>
            <TabsComponent />
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
