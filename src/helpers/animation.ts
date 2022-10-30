import router from '../router'

export const animation = (route: string, animation: string) => {
  router.push({ name: route })
  router.beforeEach((to, from, next) => {
    to.meta.animation = animation
    next()
  })
}
