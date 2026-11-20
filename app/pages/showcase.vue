<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const cards = ref([
  {
    title: 'Etique',
    description: 'Fraktal se démarque de réseaux sociaux lambda grace a sa transparance total du fonctionnement de nos algorithme et a notre promesse de ne pas utiliser de fonctions algorithmique immorals, Une promesse plus forte que sur les autres sites car tous utilisateur peuvent regarder le code de nos algoritme open source ou le remplacer par leur algorithmes créer par eux même.',
    icon: 'material-symbols:account-balance'
  },
  {
    title: 'Personalization',
    description: 'Fraktal donne a ses utilisateurs la possibilité de customiser la totalité de leur contenus consommé sur Fraktal. Notre algorithme est entièrement customisable par nos utilisateurs qui peuvent le modifier entièrement pour que Fraktal leur propose que du contenus qui leur intéresse.',
    icon: 'material-symbols:format-paint'
  },
  {
    title: 'Focalisation',
    description: 'Fraktal propose un système de sous-catégorization évolutive infini ce qui permet a nos utilisateurs de regarder que les elements spécifique d"une catégorie qui leur interesse (Exemple : Média>Jeux Videos) et cette sous-catégorisation est infini et évolutive étant crée par nos utilisateurs eux même permettant une focalisation infini (Média>Jeux Video>RPG>Dungeon Crawler)',
    icon: 'material-symbols:search'
  }
])
const QNA = ref<AccordionItem[]>([
  {
    label: 'Q : Est il possible d`accéder au site sans compte ?',
    content: 'A : Il est possible de browse sans compte, pas de créer de posts ou de liker/commenter'
  },
  {
    label: 'Q : Pourquoi ce choix de laisser ses utilisateurs customizer leurs algorithme ?',
    content: 'A : Car les algorithme sont trops souvent des mécanismes opaque inscrutable remplis de procédés douteux et parfois nee comprennent pas ce qui intéresse un utilisateur, laisser son utilisateur gérer ses algorithme le laisse décider quels matériel lui est recommandé et rend le processus beaucoup plus transparent'
  },
  {
    label: 'Q : Pourquoi le nom de Fraktal ?',
    content: 'A : Dûs au système de sous-catégorization infinie permetant de zoomer sur une catégorie de manière pratiquement infini ce qui rappelle le fait que due a la répétition infini du pattern fratctal il est possible de zoomer infiniment dedant'
  }
])
const screenshots = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <Uapp>
    <Upage>
      <UContainer>
        <UCarousel
          v-slot="{ item }"
          arrows
          dots
          :items="screenshots"
          class="w-full max-w-xs mx-auto"
        >
          <img
            :src="item"
            width="450"
            height="450"
            class="rounded-lg"
          >
        </UCarousel>
      </UContainer>

      <UPageHero>
        <UContainer>
          <UPageGrid>
            <UPageCard
              v-for="(card, index) in cards"
              :key="index"
              v-bind="card"
            />
          </UPageGrid>
        </UContainer>
      </UPageHero>

      <UContainer>
        <UAccordion :items="QNA" />
      </UContainer>

      <Ucontainer>
        <UPageLogos
          marquee
          :items="[
            'i-simple-icons-github',
            'i-simple-icons-discord',
            'i-simple-icons-x',
            'i-simple-icons-instagram',
            'i-simple-icons-linkedin',
            'i-simple-icons-facebook'
          ]"
        />
      </Ucontainer>
    </Upage>
  </Uapp>
</template>
