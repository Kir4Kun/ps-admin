<script setup lang="ts">
import { Auth } from 'aws-amplify'
import { provideClient } from '@urql/vue'
import { client } from './utils/client'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
toggleDark(false)

Auth.configure({
  userPoolId: 'ap-south-1_vVUOxBHCJ',
  userPoolWebClientId: '4leasfjtpbb31o7a7oggvl1aeo',
})

useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

provideClient(client())
</script>

<template>
  <RouterView />
</template>
