<script>
import CounterComponent from '../base/counter/CounterComponent.vue'

export default {
  name: 'ThreeComponent',
  components: {
    CounterComponent,
  }
}
</script>

<template>
  <CounterComponent title="Three Component" />
</template>