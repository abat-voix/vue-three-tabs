<script>
import CounterComponent from '../base/counter/CounterComponent.vue'

export default {
  name: 'TwoComponent',
  components: {
    CounterComponent,
  }
}
</script>

<template>
  <CounterComponent title="Two Component"/>
</template>