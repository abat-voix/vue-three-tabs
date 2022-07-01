<script>
import logo from '../assets/logo.svg'

export default {
  name: 'Home',
  data() {
    return {
      logo,
    }
  }
}
</script>

<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-img
        :src="logo"
        class="my-3"
        contain
        height="200"
      />
    </v-col>
  </v-row>
</template>