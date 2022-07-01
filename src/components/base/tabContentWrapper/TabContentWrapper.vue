<script>
export default {
  name: 'TabContentWrapper',
  props: {
    title: {
      type: String,
      default: '',
    },
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <span class="text-h6">{{ title }}</span>
    </v-col>
    <v-col cols="12">
      <slot>
        no content
      </slot>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>