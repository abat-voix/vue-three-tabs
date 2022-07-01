<script>
import CounterComponent from '../base/counter/CounterComponent.vue'
import TabContentWrapper from '../base/tabContentWrapper/TabContentWrapper.vue'

export default {
  name: 'ThreeComponent',
  components: {
    CounterComponent,
    TabContentWrapper,
  }
}
</script>

<template>
  <TabContentWrapper title="ThreeComponent">
    <CounterComponent />
  </TabContentWrapper>
</template>