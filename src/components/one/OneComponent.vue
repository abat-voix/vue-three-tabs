<script>
import  CounterComponent from '../base/counter/CounterComponent.vue'

export default {
  name: 'OneComponent',
  components: {
    CounterComponent,
  }

}
</script>

<template>
  <CounterComponent title="One Component"/>
</template>