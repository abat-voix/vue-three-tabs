const Home = () => import('../components/home/Home.vue')
const OneComponent = () => import('../components/one/OneComponent.vue')
const TwoComponent = () => import('../components/two/TwoComponent.vue')
const ThreeComponent = () => import('../components/three/ThreeComponent.vue')


const homeRoute = {
  path: '/',
  name: 'Home',
  component: Home,
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