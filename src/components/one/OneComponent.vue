<script>
import CounterComponent from '../base/counter/CounterComponent.vue'
import TabContentWrapper from '../base/tabContentWrapper/TabContentWrapper.vue'

export default {
  name: 'OneComponent',
  components: {
    CounterComponent,
    TabContentWrapper,
  }

}
</script>

<template>
  <TabContentWrapper title="OneComponent">
    <CounterComponent />
  </TabContentWrapper>
</template>