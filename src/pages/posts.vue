<script setup lang="ts">
import PostsList from '~/components/PostsList.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <PostsList />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>
