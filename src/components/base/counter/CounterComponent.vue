<script>
export default {
  name: 'CounterComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    closeTab() {
      this.counter = 0
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="auto" class="ms-auto">
        <v-btn
          variant="text"
          @click="closeTab"
        >
          close
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <span class="text-h6">{{ title }}</span>
      </v-col>
      <v-col cols="auto">
        <span class="text-h1">{{ counter }}</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          color="success"
          @click="increment"
        >
          Increment
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>