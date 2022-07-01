import HelloWorld from '../components/HelloWorld.vue'
import OneComponent from '../components/one/OneComponent.vue'
import TwoComponent from '../components/two/TwoComponent.vue'
import ThreeComponent from '../components/three/ThreeComponent.vue'


const homeRoute = {
  path: '/',
  name: 'Home',
  component: HelloWorld,
}

export const tabsRoutes = [
  {
    path: '/one',
    name: 'One',
    component: OneComponent,
  },
  {
    path: '/two',
    name: 'Two',
    component: TwoComponent,
  },
  {
    path: '/three',
    name: 'Three',
    component: ThreeComponent,
  },
]

export const routes = [
  homeRoute,
  ...tabsRoutes,
]