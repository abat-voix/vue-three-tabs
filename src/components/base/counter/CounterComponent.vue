<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      counter: 0,
    }
  }
}
</script>

<template>
  <v-col cols="12">
    <v-row justify="center">
      <v-col cols="auto">
        <div class="text-h1">{{ counter }}</div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          color="success"
          @click="() => {
            counter++
          }"
        >
          Increment
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<style scoped>

</style>