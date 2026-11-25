<script setup>
const cards = ref([
  {
    title: 'Highly customizable',
    description: 'Any and all community'
  },
  {
    title: 'Zoom in, and in, and in',
    description: 'Niche communities below greater, zoom in and out through the existant as you please.'
  },
  {
    title: 'Want to see and read about dogs?',
    description: 'Grey dogs? Grey dogs outside?'
  },
  {
    title: 'Niches and niches are possible',
    description: 'Any '
  },
  {
    title: 'Want to learn about dogs?',
    description: 'Grey dogs? Grey dogs walking outside?'
  }
])

useTemplateRef('cards')
onMounted(() => {})
</script>

<template>
  <div>
    <UPageHero
      headline="Fraktal"
      title="Fraktal"
      description="~~~ Social media ~~~"
      class="bg-linear-to-t from-primary-100 to-neutral border-b border-olive-200"
    >
      <UPageGrid>
        <UPageCard
          v-for="card, i in cards"
          :key="i"
          v-bind="card"
          class="p-8"
        />
      </UPageGrid>
    </UPageHero>
    <UPageHero
      headline="Fraktal"
      title="Fraktal"
      description="~~~ Social media ~~~"
      class="bg-linear-to-t from-primary-200 to-white border-b-1"
    >
      <UCard />

      <UMarquee />

      <img src="">
    </upagehero>
  </div>
</template>
