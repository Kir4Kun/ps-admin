<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
</script>

<template>
  <authenticator :hide-sign-up="true">
    <template #header>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <img
          class="amplify-image"
          alt="Amplify logo"
          src="https://i.ibb.co/QHTWRQn/ps-logo-full.png"
        >
      </div>
    </template>
    <template #default="{ signOut }">
      <Header @sign-out="{ signOut }" />
      <main class="mx-auto container text-center text-gray-700 dark:text-gray-200">
        <RouterView />
      </main>
    </template>
  </authenticator>
</template>
