<script>
import CounterComponent from '../base/counter/CounterComponent.vue'
import TabContentWrapper from '../base/tabContentWrapper/TabContentWrapper.vue'

export default {
  name: 'TwoComponent',
  components: {
    CounterComponent,
    TabContentWrapper
  }
}
</script>

<template>
  <TabContentWrapper title="TwoComponent">
    <CounterComponent />
  </TabContentWrapper>
</template>