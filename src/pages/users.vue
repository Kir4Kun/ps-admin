<script setup lang="ts">
import UsersList from '~/components/UsersList.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <UsersList />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
