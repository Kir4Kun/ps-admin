<script setup lang="ts">
import { usePostsQuery } from '../../generates'
import TableHeadItem from './TableHeadItem.vue'
import TableRow from './TableRow.vue'
import TableItem from './TableItem.vue'

const { data } = await usePostsQuery()
</script>

<template>
  <Table name="Posts">
    <template #header>
      <TableHeadItem>
        Serial
      </TableHeadItem>
      <TableHeadItem>
        Username
      </TableHeadItem>
      <TableHeadItem>
        Name
      </TableHeadItem>
      <TableHeadItem>
        Content
      </TableHeadItem>
      <TableHeadItem>
        Media
      </TableHeadItem>
      <TableHeadItem>
        Created
      </TableHeadItem>
    </template>
    <template #items>
      <TableRow v-for="(post, index) in data?.posts" :key="post.id">
        <TableItem>
          {{ index + 1 }}.
        </TableItem>
        <TableItem>
          {{ post.user.username }}
        </TableItem>
        <TableItem>
          {{ post.user.name ?? '-' }}
        </TableItem>
        <TableItem>
          {{ post.content ?? '-' }}
        </TableItem>
        <TableItem>
          <div v-if="post.media.length" class="w-25 h-25 p-1 ">
            <img :src="post.media[0]" alt="" srcset="">
          </div>
          <p v-else>
            -
          </p>
        </TableItem>
        <TableItem>
          {{ post.createdAt ?? '-' }}
        </TableItem>
      </TableRow>
    </template>
  </Table>
</template>
