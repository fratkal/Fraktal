export default defineEventHandler((event) => {
  const path: string = getRouterParam(event, 'path')!
  return {
    [path]: ''
  }
})
