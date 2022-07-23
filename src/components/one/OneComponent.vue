<script>
import  CounterComponent from '@/components/base/counter/CounterComponent.vue'

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