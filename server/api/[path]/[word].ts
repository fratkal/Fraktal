export default defineEventHandler((event) => {
  const path: string = getRouterParam(event, 'path')!
  const word: string = getRouterParam(event, 'word')!
  return {
    [path]: `${word}`
  }
})
